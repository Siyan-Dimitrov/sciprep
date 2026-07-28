"use client";

import Link from "next/link";
import { useState } from "react";

import { useLearner } from "@/components/learner-provider";
import {
  courseStages,
  getLesson,
  pilotLessons,
  prerequisitesAreComplete,
} from "@/lib/course-content";
import { completionPercentage, evidenceLabel } from "@/lib/progress";

export default function TodayPage() {
  const { ready, progress, completedLessonIds } = useLearner();
  const [now] = useState(() => Date.now());
  const nextLesson =
    pilotLessons.find(
      (lesson) =>
        !completedLessonIds.includes(lesson.id) &&
        prerequisitesAreComplete(lesson, completedLessonIds),
    ) ?? pilotLessons[0];
  const nextVisit = progress.lessonVisits[nextLesson.id];
  const percent = completionPercentage(progress, pilotLessons.length);
  const reviewCount = Object.values(progress.reviews).filter(
    (review) => new Date(review.dueAt).getTime() <= now,
  ).length;

  if (!ready) {
    return <div className="app-loading">Opening your course…</div>;
  }

  return (
    <main className="app-page today-page">
      <header className="app-page-header">
        <div>
          <p className="app-eyebrow">Your learning day</p>
          <h1>Pick up where the science started to click.</h1>
        </div>
        <p>
          One focused lesson is enough. Your position, notes, and checks stay on
          this device.
        </p>
      </header>

      <section className="today-grid" aria-label="Recommended learning">
        <article className="next-lesson-card">
          <div className="card-topline">
            <span>Recommended next</span>
            <span>{nextLesson.estimatedMinutes} min</span>
          </div>
          <p className="lesson-number">{nextLesson.number}</p>
          <h2>{nextLesson.title}</h2>
          <p>{nextLesson.summary}</p>
          <div className="lesson-card-actions">
            <Link
              className="button primary"
              href={{ pathname: `/learn/${nextLesson.slug}/` }}
            >
              {nextVisit ? "Resume lesson" : "Start lesson"}
            </Link>
            <span>{evidenceLabel(progress, nextLesson.id, now)}</span>
          </div>
        </article>

        <div className="today-side">
          <article className="metric-card">
            <span>Pilot progress</span>
            <strong>{percent}%</strong>
            <p>
              {completedLessonIds.length} of {pilotLessons.length} learning
              experiences completed
            </p>
            <div className="large-progress" aria-hidden="true">
              <span style={{ width: `${percent}%` }} />
            </div>
          </article>
          <article className="metric-card review-metric">
            <span>Review queue</span>
            <strong>{reviewCount}</strong>
            <p>
              {reviewCount === 0
                ? "Your first delayed review appears after a completed lesson."
                : "Short reviews are ready now."}
            </p>
            <Link href={{ pathname: "/review/" }}>Open review</Link>
          </article>
        </div>
      </section>

      <section className="current-path" aria-labelledby="path-heading">
        <div>
          <p className="app-eyebrow">Course path</p>
          <h2 id="path-heading">A shared toolkit, then two ways of seeing change.</h2>
        </div>
        <div className="mini-stage-list">
          {courseStages.map((stage) => {
            const completed = stage.lessonIds.filter((id) =>
              completedLessonIds.includes(id),
            ).length;
            const firstLesson = getLesson(stage.lessonIds[0]);
            return (
              <article key={stage.id}>
                <span>{stage.number}</span>
                <div>
                  <strong>{stage.title}</strong>
                  <p>
                    {completed}/{stage.lessonIds.length} complete
                  </p>
                </div>
                {firstLesson ? (
                  <Link href={{ pathname: `/learn/${firstLesson.slug}/` }}>
                    View
                  </Link>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
