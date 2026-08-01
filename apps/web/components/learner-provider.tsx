"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  completedLessonIds,
  emptyProgress,
  type LearnerProgress,
  nextReviewDate,
} from "@/lib/progress";

const storageKey = "sciprep.learner-progress.v1";

type LearnerContextValue = {
  ready: boolean;
  progress: LearnerProgress;
  completedLessonIds: string[];
  setLessonPosition: (lessonId: string, blockIndex: number) => void;
  completeLesson: (lessonId: string) => void;
  recordCheck: (lessonId: string, blockId: string, correct: boolean) => void;
  saveNote: (lessonId: string, note: string) => void;
  completeReview: (lessonId: string) => void;
  resetLesson: (lessonId: string) => void;
  resetProgress: () => void;
};

const LearnerContext = createContext<LearnerContextValue | null>(null);

function persist(progress: LearnerProgress): void {
  window.localStorage.setItem(storageKey, JSON.stringify(progress));
}

export function LearnerProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState<LearnerProgress>(emptyProgress);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        try {
          const parsed = JSON.parse(stored) as LearnerProgress;
          if (parsed.version === 1) {
            setProgress(parsed);
          }
        } catch {
          window.localStorage.removeItem(storageKey);
        }
      }
      setReady(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const update = useCallback((change: (current: LearnerProgress) => LearnerProgress) => {
    setProgress((current) => {
      const next = change(current);
      persist(next);
      return next;
    });
  }, []);

  const setLessonPosition = useCallback(
    (lessonId: string, blockIndex: number) => {
      update((current) => ({
        ...current,
        lessonVisits: {
          ...current.lessonVisits,
          [lessonId]: {
            ...current.lessonVisits[lessonId],
            blockIndex,
            lastVisitedAt: new Date().toISOString(),
          },
        },
      }));
    },
    [update],
  );

  const completeLesson = useCallback(
    (lessonId: string) => {
      const now = new Date();
      update((current) => ({
        ...current,
        lessonVisits: {
          ...current.lessonVisits,
          [lessonId]: {
            ...current.lessonVisits[lessonId],
            blockIndex: Number.MAX_SAFE_INTEGER,
            lastVisitedAt: now.toISOString(),
            completedAt: now.toISOString(),
          },
        },
        reviews: {
          ...current.reviews,
          [lessonId]: {
            dueAt: nextReviewDate(now, 1),
            intervalDays: 1,
          },
        },
      }));
    },
    [update],
  );

  const recordCheck = useCallback(
    (lessonId: string, blockId: string, correct: boolean) => {
      update((current) => {
        const previous = current.checkResults[lessonId]?.[blockId];
        return {
          ...current,
          checkResults: {
            ...current.checkResults,
            [lessonId]: {
              ...current.checkResults[lessonId],
              [blockId]: {
                correct,
                attempts: (previous?.attempts ?? 0) + 1,
                answeredAt: new Date().toISOString(),
              },
            },
          },
        };
      });
    },
    [update],
  );

  const saveNote = useCallback(
    (lessonId: string, note: string) => {
      update((current) => ({
        ...current,
        notes: {
          ...current.notes,
          [lessonId]: note,
        },
      }));
    },
    [update],
  );

  const completeReview = useCallback(
    (lessonId: string) => {
      const now = new Date();
      update((current) => {
        const previous = current.reviews[lessonId];
        const intervalDays = Math.min((previous?.intervalDays ?? 1) * 3, 30);
        return {
          ...current,
          reviews: {
            ...current.reviews,
            [lessonId]: {
              intervalDays,
              lastReviewedAt: now.toISOString(),
              dueAt: nextReviewDate(now, intervalDays),
            },
          },
        };
      });
    },
    [update],
  );

  const resetLesson = useCallback(
    (lessonId: string) => {
      update((current) => {
        const {
          [lessonId]: removedVisit,
          ...lessonVisits
        } = current.lessonVisits;
        const {
          [lessonId]: removedChecks,
          ...checkResults
        } = current.checkResults;
        const { [lessonId]: removedReview, ...reviews } = current.reviews;
        void removedVisit;
        void removedChecks;
        void removedReview;

        // Notes are the learner's own writing, so a lesson reset leaves them
        // alone. Only the position, the check answers, and the review schedule
        // are cleared.
        return { ...current, lessonVisits, checkResults, reviews };
      });
    },
    [update],
  );

  const resetProgress = useCallback(() => {
    persist(emptyProgress);
    setProgress(emptyProgress);
  }, []);

  const value = useMemo<LearnerContextValue>(
    () => ({
      ready,
      progress,
      completedLessonIds: completedLessonIds(progress),
      setLessonPosition,
      completeLesson,
      recordCheck,
      saveNote,
      completeReview,
      resetLesson,
      resetProgress,
    }),
    [
      ready,
      progress,
      setLessonPosition,
      completeLesson,
      recordCheck,
      saveNote,
      completeReview,
      resetLesson,
      resetProgress,
    ],
  );

  return <LearnerContext.Provider value={value}>{children}</LearnerContext.Provider>;
}

export function useLearner(): LearnerContextValue {
  const context = useContext(LearnerContext);
  if (!context) {
    throw new Error("useLearner must be used inside LearnerProvider");
  }
  return context;
}
