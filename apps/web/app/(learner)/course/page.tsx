"use client";

import Link from "next/link";

import { useLearner } from "@/components/learner-provider";
import {
  courseStages,
  getLesson,
  pilotLessons,
  prerequisitesAreComplete,
} from "@/lib/course-content";

const studioCount = pilotLessons.filter(
  (lesson) => lesson.discipline === "integrated",
).length;
const lessonCount = pilotLessons.length - studioCount;
const lessonMinutes = pilotLessons.map((lesson) => lesson.estimatedMinutes);
const shortestLesson = Math.min(...lessonMinutes);
const longestLesson = Math.max(...lessonMinutes);

export default function CoursePage() {
  const { ready, progress, completedLessonIds } = useLearner();

  if (!ready) {
    return <div className="app-loading">Building your course map…</div>;
  }

  return (
    <main className="app-page course-app-page">
      <header className="app-page-header">
        <div>
          <p className="app-eyebrow">Course map</p>
          <h1>A foundation that builds in the right order.</h1>
        </div>
        <p>
          Start with the shared language of science, then develop chemistry and
          physics as connected descriptions of matter, motion, and change.
        </p>
      </header>

      <section className="pilot-summary-strip" aria-label="Pilot course details">
        <div>
          <span>Private pilot</span>
          <strong>{pilotLessons.length} experiences</strong>
          <p>
            {lessonCount} lessons and {studioCount} studios
          </p>
        </div>
        <div>
          <span>Typical lesson</span>
          <strong>{shortestLesson}–{longestLesson} min</strong>
          <p>Stop and resume at any block</p>
        </div>
        <div>
          <span>Starting level</span>
          <strong>No recent science</strong>
          <p>Mathematics appears in context</p>
        </div>
      </section>

      <ol className="course-stage-list">
        {courseStages.map((stage) => {
          const stageComplete = stage.lessonIds.every((id) =>
            completedLessonIds.includes(id),
          );
          return (
            <li className={`course-app-stage discipline-${stage.discipline}`} key={stage.id}>
              <div className="course-app-stage-header">
                <span>{stage.number}</span>
                <div>
                  <p>{stageComplete ? "Stage complete" : "Course stage"}</p>
                  <h2>{stage.title}</h2>
                  <p>{stage.description}</p>
                </div>
              </div>
              <ol className="lesson-row-list">
                {stage.lessonIds.map((lessonId) => {
                  const lesson = getLesson(lessonId);
                  if (!lesson) {
                    return null;
                  }
                  const unlocked = prerequisitesAreComplete(
                    lesson,
                    completedLessonIds,
                  );
                  const completed = completedLessonIds.includes(lesson.id);
                  const visit = progress.lessonVisits[lesson.id];
                  return (
                    <li key={lesson.id}>
                      <div className="lesson-state" aria-hidden="true">
                        {completed ? "✓" : unlocked ? lesson.number : "—"}
                      </div>
                      <div className="lesson-row-copy">
                        <div>
                          <span>
                            {lesson.estimatedMinutes} min · {lesson.reviewStatus}
                          </span>
                          <h3>{lesson.title}</h3>
                        </div>
                        <p>{lesson.summary}</p>
                      </div>
                      {unlocked || visit ? (
                        <Link href={{ pathname: `/learn/${lesson.slug}/` }}>
                          {completed ? "Revisit" : visit ? "Resume" : "Start"}
                        </Link>
                      ) : (
                        <span className="locked-label">Prerequisite first</span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ol>

      <section className="course-explainer">
        <div>
          <p className="app-eyebrow">Progress without gatekeeping</p>
          <h2>Repair a prerequisite when it matters—not forever.</h2>
        </div>
        <p>
          Progress combines exposure, guided work, an independent check, and
          what remains after a delay. Draft content is visibly marked
          unreviewed throughout this private build.
        </p>
      </section>
    </main>
  );
}
