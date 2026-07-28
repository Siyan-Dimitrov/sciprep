"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { useLearner } from "@/components/learner-provider";
import { getLesson } from "@/lib/course-content";

export default function ReviewPage() {
  const { ready, progress, completedLessonIds, completeReview } = useLearner();
  const [reviewed, setReviewed] = useState<string[]>([]);
  const [now] = useState(() => Date.now());
  const records = useMemo(
    () =>
      completedLessonIds
        .map((lessonId) => ({
          lesson: getLesson(lessonId),
          review: progress.reviews[lessonId],
        }))
        .filter((entry) => entry.lesson && entry.review),
    [completedLessonIds, progress.reviews],
  );

  if (!ready) {
    return <div className="app-loading">Checking your review queue…</div>;
  }

  return (
    <main className="app-page">
      <header className="app-page-header compact">
        <div>
          <p className="app-eyebrow">Delayed retrieval</p>
          <h1>Bring the model back without reopening the lesson.</h1>
        </div>
        <p>
          Review is deliberately short. Recall first, then compare your model
          with the key principle.
        </p>
      </header>

      {records.length === 0 ? (
        <section className="empty-state">
          <span aria-hidden="true">↻</span>
          <h2>Your review queue is waiting for a completed lesson.</h2>
          <p>
            Finish the first Science Toolkit lesson and a delayed review will be
            scheduled automatically.
          </p>
          <Link className="button primary" href={{ pathname: "/course/" }}>
            Open the course
          </Link>
        </section>
      ) : (
        <section className="review-list" aria-label="Review activities">
          {records.map(({ lesson, review }) => {
            if (!lesson || !review) {
              return null;
            }
            const done = reviewed.includes(lesson.id);
            const due = new Date(review.dueAt).getTime() <= now;
            const summary = lesson.blocks.find((block) => block.type === "summary");
            return (
              <article key={lesson.id}>
                <div className="review-card-heading">
                  <div>
                    <span>{due ? "Due now" : "Early review available"}</span>
                    <h2>{lesson.title}</h2>
                  </div>
                  <span>{review.intervalDays}-day interval</span>
                </div>
                <p className="review-prompt">
                  Before revealing anything: what is the most important model or
                  relationship from this lesson?
                </p>
                {done && summary?.type === "summary" ? (
                  <div className="review-reveal">
                    <strong>Compare your recall</strong>
                    <p>{summary.transferRule}</p>
                  </div>
                ) : null}
                <div className="review-actions">
                  <button
                    className="button primary"
                    disabled={done}
                    onClick={() => {
                      completeReview(lesson.id);
                      setReviewed((current) => [...current, lesson.id]);
                    }}
                    type="button"
                  >
                    {done ? "Reviewed" : "Reveal and record"}
                  </button>
                  <Link href={{ pathname: `/learn/${lesson.slug}/` }}>
                    Open lesson
                  </Link>
                </div>
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}
