"use client";

import { useState } from "react";

import { useLearner } from "@/components/learner-provider";
import { courseStages, getLesson, pilotLessons } from "@/lib/course-content";
import { completionPercentage, evidenceLabel } from "@/lib/progress";

export default function ProgressPage() {
  const { ready, progress, completedLessonIds, resetProgress } = useLearner();
  const [now] = useState(() => Date.now());
  const percent = completionPercentage(progress, pilotLessons.length);
  const correctChecks = Object.values(progress.checkResults)
    .flatMap((results) => Object.values(results))
    .filter((result) => result.correct).length;

  if (!ready) {
    return <div className="app-loading">Gathering your evidence…</div>;
  }

  return (
    <main className="app-page">
      <header className="app-page-header compact">
        <div>
          <p className="app-eyebrow">Learning evidence</p>
          <h1>Progress is more than reaching the bottom of a page.</h1>
        </div>
        <p>
          The pilot separates lesson exposure, independent checks, and delayed
          review. It does not invent an official exam score.
        </p>
      </header>

      <section className="progress-metrics">
        <article>
          <span>Course completion</span>
          <strong>{percent}%</strong>
          <p>{completedLessonIds.length} learning experiences complete</p>
        </article>
        <article>
          <span>Independent checks</span>
          <strong>{correctChecks}</strong>
          <p>Correct checks recorded on this device</p>
        </article>
        <article>
          <span>Notes created</span>
          <strong>{Object.values(progress.notes).filter(Boolean).length}</strong>
          <p>Personal explanations saved</p>
        </article>
      </section>

      <section className="evidence-section">
        <div>
          <p className="app-eyebrow">Evidence by stage</p>
          <h2>Broad states, not false precision</h2>
        </div>
        <div className="evidence-list">
          {courseStages.flatMap((stage) =>
            stage.lessonIds.map((lessonId) => {
              const lesson = getLesson(lessonId);
              if (!lesson) {
                return null;
              }
              return (
                <article key={lessonId}>
                  <div>
                    <span>{stage.title}</span>
                    <strong>{lesson.title}</strong>
                  </div>
                  <span className="evidence-pill">
                    {evidenceLabel(progress, lesson.id, now)}
                  </span>
                </article>
              );
            }),
          )}
        </div>
      </section>

      <section className="data-control">
        <div>
          <h2>Private-pilot data</h2>
          <p>
            Progress is currently stored only in this browser or Android app.
            Resetting removes lessons, checks, reviews, and notes from this
            device.
          </p>
        </div>
        <button
          className="button danger"
          onClick={() => {
            if (window.confirm("Remove all locally saved SciPrep progress?")) {
              resetProgress();
            }
          }}
          type="button"
        >
          Reset local progress
        </button>
      </section>
    </main>
  );
}
