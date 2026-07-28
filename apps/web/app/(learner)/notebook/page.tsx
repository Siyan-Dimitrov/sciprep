"use client";

import Link from "next/link";

import { useLearner } from "@/components/learner-provider";
import { getLesson } from "@/lib/course-content";

export default function NotebookPage() {
  const { ready, progress } = useLearner();
  const notes = Object.entries(progress.notes).filter(([, note]) => note.trim());

  if (!ready) {
    return <div className="app-loading">Opening your notebook…</div>;
  }

  return (
    <main className="app-page">
      <header className="app-page-header compact">
        <div>
          <p className="app-eyebrow">Your notebook</p>
          <h1>Keep explanations that make sense in your own words.</h1>
        </div>
        <p>
          Notes are stored locally on this device and remain connected to the
          lesson where you wrote them.
        </p>
      </header>

      {notes.length === 0 ? (
        <section className="empty-state">
          <span aria-hidden="true">✎</span>
          <h2>No notes yet.</h2>
          <p>
            Every lesson includes a private notebook. Try explaining a concept
            without copying the lesson wording.
          </p>
          <Link className="button primary" href={{ pathname: "/course/" }}>
            Choose a lesson
          </Link>
        </section>
      ) : (
        <section className="notebook-grid">
          {notes.map(([lessonId, note]) => {
            const lesson = getLesson(lessonId);
            return (
              <article key={lessonId}>
                <span>{lesson?.number ?? "Note"}</span>
                <h2>{lesson?.title ?? "Course note"}</h2>
                <p>{note}</p>
                {lesson ? (
                  <Link href={{ pathname: `/learn/${lesson.slug}/` }}>
                    Return to lesson
                  </Link>
                ) : null}
              </article>
            );
          })}
        </section>
      )}
    </main>
  );
}
