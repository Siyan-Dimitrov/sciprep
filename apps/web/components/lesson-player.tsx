"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import type {
  CheckBlock,
  Lesson,
  LessonBlock,
  WorkedBlock,
} from "@/lib/course-content";

import { notation } from "@/components/notation";

import { ConceptVisual } from "./concept-visual";
import { useLearner } from "./learner-provider";

function WorkedExample({ block }: { block: WorkedBlock }) {
  return (
    <div className="worked-example">
      <p className="worked-scenario">{notation(block.scenario)}</p>
      <ol>
        {block.steps.map((step) => (
          <li key={step.label}>
            <span>{notation(step.label)}</span>
            <div>
              <p>{notation(step.decision)}</p>
              <code>{notation(step.working)}</code>
            </div>
          </li>
        ))}
      </ol>
      <div className="worked-answer">
        <span>Answer</span>
        <strong>{notation(block.answer)}</strong>
      </div>
      <p className="plausibility">
        <strong>Plausibility check:</strong> {notation(block.plausibility)}
      </p>
    </div>
  );
}

function KnowledgeCheck({
  block,
  lessonId,
  onAnswered,
}: {
  block: CheckBlock;
  lessonId: string;
  onAnswered: (answered: boolean) => void;
}) {
  const { progress, recordCheck } = useLearner();
  const existing = progress.checkResults[lessonId]?.[block.id];
  const [selected, setSelected] = useState<number | null>(
    existing?.correct ? block.correctIndex : null,
  );
  const answered = selected !== null;
  const correct = selected === block.correctIndex;

  return (
    <div className="knowledge-check">
      <p className="check-prompt">{notation(block.prompt)}</p>
      <div className="check-options" role="group" aria-label="Answer options">
        {block.options.map((option, index) => {
          const optionCorrect = answered && index === block.correctIndex;
          const optionWrong = answered && index === selected && !correct;
          return (
            <button
              className={`${selected === index ? "selected" : ""} ${
                optionCorrect ? "correct" : ""
              } ${optionWrong ? "wrong" : ""}`}
              key={option}
              onClick={() => {
                setSelected(index);
                recordCheck(lessonId, block.id, index === block.correctIndex);
                onAnswered(true);
              }}
              type="button"
            >
              <span>{String.fromCharCode(65 + index)}</span>
              {notation(option)}
            </button>
          );
        })}
      </div>
      {answered ? (
        <div className={`check-feedback ${correct ? "correct" : "repair"}`} role="status">
          <strong>{correct ? "That model holds." : "Repair the relationship."}</strong>
          <p>{notation(correct ? block.explanation : block.misconception)}</p>
          {!correct ? <p className="feedback-followup">{notation(block.explanation)}</p> : null}
        </div>
      ) : (
        <p className="check-hint">
          Commit to the model that best explains the relationship. This is
          practice, not a score.
        </p>
      )}
    </div>
  );
}

function LessonContent({
  block,
  lesson,
  onCheckAnswered,
}: {
  block: LessonBlock;
  lesson: Lesson;
  onCheckAnswered: (answered: boolean) => void;
}) {
  if (block.type === "concept") {
    return (
      <div className="lesson-prose">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph}>{notation(paragraph)}</p>
        ))}
        {block.callout ? <div className="equation-callout">{notation(block.callout)}</div> : null}
      </div>
    );
  }

  if (block.type === "visual") {
    return (
      <div className="visual-block">
        <p>{notation(block.introduction)}</p>
        <ConceptVisual block={block} />
        <p className="visual-caption">{notation(block.caption)}</p>
      </div>
    );
  }

  if (block.type === "worked") {
    return <WorkedExample block={block} />;
  }

  if (block.type === "check") {
    return (
      <KnowledgeCheck
        block={block}
        lessonId={lesson.id}
        onAnswered={onCheckAnswered}
      />
    );
  }

  return (
    <div className="lesson-summary">
      <ul>
        {block.points.map((point) => (
          <li key={point}>{notation(point)}</li>
        ))}
      </ul>
      <div className="transfer-rule">
        <span>Transfer rule</span>
        <p>{notation(block.transferRule)}</p>
      </div>
    </div>
  );
}

function LessonNotebook({ lesson }: { lesson: Lesson }) {
  const { progress, saveNote } = useLearner();

  return (
    <aside className="lesson-notebook">
      <div>
        <span>Private notebook</span>
        <strong>Explain it your way</strong>
      </div>
      <textarea
        aria-label={`Notes for ${lesson.title}`}
        defaultValue={progress.notes[lesson.id] ?? ""}
        key={lesson.id}
        onBlur={(event) => saveNote(lesson.id, event.target.value)}
        placeholder="What changed in your mental model? Which relationship do you want to remember?"
      />
      <p>Saved on this device when you leave the field.</p>
    </aside>
  );
}

function ReadyLessonPlayer({
  initialBlockIndex,
  lesson,
}: {
  initialBlockIndex: number;
  lesson: Lesson;
}) {
  const router = useRouter();
  const {
    progress,
    completedLessonIds,
    setLessonPosition,
    completeLesson,
    resetLesson,
  } = useLearner();
  const [blockIndex, setBlockIndex] = useState(initialBlockIndex);
  const [answeredBlockIds, setAnsweredBlockIds] = useState<string[]>([]);
  const block = lesson.blocks[blockIndex];
  const percent = Math.round(((blockIndex + 1) / lesson.blocks.length) * 100);
  const checkAnswered =
    block.type !== "check" ||
    Boolean(progress.checkResults[lesson.id]?.[block.id]) ||
    answeredBlockIds.includes(block.id);
  const prerequisitesMissing = useMemo(
    () =>
      lesson.prerequisiteLessonIds.filter(
        (id) => !completedLessonIds.includes(id),
      ),
    [completedLessonIds, lesson.prerequisiteLessonIds],
  );

  const move = (nextIndex: number) => {
    const bounded = Math.max(0, Math.min(nextIndex, lesson.blocks.length - 1));
    setBlockIndex(bounded);
    setLessonPosition(lesson.id, bounded);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const finish = () => {
    completeLesson(lesson.id);
    router.push("/today");
  };

  const restart = () => {
    if (
      !window.confirm(
        `Start ${lesson.title} again? This clears your answers and position for this lesson. Your notes are kept.`,
      )
    ) {
      return;
    }
    resetLesson(lesson.id);
    setAnsweredBlockIds([]);
    setBlockIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="lesson-page">
      <header className="lesson-header">
        <div className="lesson-header-top">
          <Link href={{ pathname: "/course/" }}>← Course map</Link>
          <span>{lesson.reviewStatus} draft</span>
        </div>
        <div className="lesson-progress-row">
          <div
            aria-label={`${percent}% of this lesson viewed`}
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={percent}
            className="lesson-progress-track"
            role="progressbar"
          >
            <span style={{ width: `${percent}%` }} />
          </div>
          <span>
            {blockIndex + 1}/{lesson.blocks.length}
          </span>
        </div>
      </header>

      <div className="lesson-layout">
        <article className="lesson-card">
          <div className="lesson-context">
            <span>{lesson.number}</span>
            <p>
              {lesson.estimatedMinutes} minutes · {lesson.discipline}
            </p>
          </div>

          {prerequisitesMissing.length > 0 && blockIndex === 0 ? (
            <div className="prerequisite-note">
              <strong>Previewing ahead</strong>
              <p>
                This lesson normally follows {prerequisitesMissing.length} earlier
                lesson{prerequisitesMissing.length === 1 ? "" : "s"}. You can
                continue, but the course recommends completing them first.
              </p>
            </div>
          ) : null}

          <p className="block-eyebrow">{block.eyebrow}</p>
          <h1>{notation(block.title)}</h1>
          <LessonContent
            block={block}
            lesson={lesson}
            onCheckAnswered={() =>
              setAnsweredBlockIds((current) =>
                current.includes(block.id) ? current : [...current, block.id],
              )
            }
          />

          <div className="lesson-controls">
            <button
              className="button secondary"
              disabled={blockIndex === 0}
              onClick={() => move(blockIndex - 1)}
              type="button"
            >
              Previous
            </button>
            {blockIndex === lesson.blocks.length - 1 ? (
              <button className="button primary" onClick={finish} type="button">
                Complete lesson
              </button>
            ) : (
              <button
                className="button primary"
                disabled={block.type === "check" && !checkAnswered}
                onClick={() => move(blockIndex + 1)}
                type="button"
              >
                Continue
              </button>
            )}
          </div>
          <div className="lesson-reset-row">
            <button
              className="button quiet"
              disabled={blockIndex === 0 && !progress.lessonVisits[lesson.id]}
              onClick={restart}
              type="button"
            >
              Reset this lesson
            </button>
            <Link href={{ pathname: "/progress/" }}>Reset everything</Link>
          </div>
        </article>

        <div className="lesson-rail">
          <section className="lesson-objectives">
            <span>By the end</span>
            <ul>
              {lesson.objectives.map((objective) => (
                <li key={objective}>{notation(objective)}</li>
              ))}
            </ul>
          </section>
          <LessonNotebook lesson={lesson} />
        </div>
      </div>
    </main>
  );
}

export function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const { ready, progress } = useLearner();

  if (!ready) {
    return <div className="app-loading">Resuming your lesson…</div>;
  }

  const savedIndex = progress.lessonVisits[lesson.id]?.blockIndex ?? 0;
  const initialBlockIndex =
    savedIndex >= lesson.blocks.length || savedIndex < 0 ? 0 : savedIndex;

  return (
    <ReadyLessonPlayer
      initialBlockIndex={initialBlockIndex}
      key={`${lesson.id}-${initialBlockIndex}`}
      lesson={lesson}
    />
  );
}
