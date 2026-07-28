import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LessonPlayer } from "@/components/lesson-player";
import { getLessonBySlug, pilotLessons } from "@/lib/course-content";

type LessonPageProps = {
  params: Promise<{ lessonId: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return pilotLessons.map((lesson) => ({ lessonId: lesson.slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { lessonId } = await params;
  const lesson = getLessonBySlug(lessonId);
  return {
    title: lesson ? `${lesson.title} — SciPrep` : "Lesson — SciPrep",
    description: lesson?.summary,
  };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { lessonId } = await params;
  const lesson = getLessonBySlug(lessonId);

  if (!lesson) {
    notFound();
  }

  return <LessonPlayer lesson={lesson} />;
}
