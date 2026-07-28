export type CheckResult = {
  correct: boolean;
  attempts: number;
  answeredAt: string;
};

export type LessonVisit = {
  blockIndex: number;
  lastVisitedAt: string;
  completedAt?: string;
};

export type ReviewRecord = {
  dueAt: string;
  intervalDays: number;
  lastReviewedAt?: string;
};

export type LearnerProgress = {
  version: 1;
  lessonVisits: Record<string, LessonVisit>;
  checkResults: Record<string, Record<string, CheckResult>>;
  notes: Record<string, string>;
  reviews: Record<string, ReviewRecord>;
};

export const emptyProgress: LearnerProgress = {
  version: 1,
  lessonVisits: {},
  checkResults: {},
  notes: {},
  reviews: {},
};

export function completedLessonIds(progress: LearnerProgress): string[] {
  return Object.entries(progress.lessonVisits)
    .filter(([, visit]) => Boolean(visit.completedAt))
    .map(([lessonId]) => lessonId);
}

export function completionPercentage(
  progress: LearnerProgress,
  totalLessons: number,
): number {
  if (totalLessons <= 0) {
    return 0;
  }

  return Math.round((completedLessonIds(progress).length / totalLessons) * 100);
}

export function evidenceLabel(
  progress: LearnerProgress,
  lessonId: string,
  now: number,
): "Not started" | "Introduced" | "Practising" | "Independent" | "Review due" {
  const visit = progress.lessonVisits[lessonId];
  if (!visit) {
    return "Not started";
  }

  if (!visit.completedAt) {
    return "Introduced";
  }

  const review = progress.reviews[lessonId];
  if (review && new Date(review.dueAt).getTime() <= now) {
    return "Review due";
  }

  const results = Object.values(progress.checkResults[lessonId] ?? {});
  return results.some((result) => result.correct) ? "Independent" : "Practising";
}

export function nextReviewDate(from: Date, intervalDays: number): string {
  const date = new Date(from);
  date.setUTCDate(date.getUTCDate() + intervalDays);
  return date.toISOString();
}
