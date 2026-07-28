"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import { completionPercentage } from "@/lib/progress";
import { pilotLessons } from "@/lib/course-content";

import { useLearner } from "./learner-provider";

const navigation = [
  { href: "/today/", path: "/today", label: "Today", short: "Today" },
  { href: "/course/", path: "/course", label: "Course", short: "Course" },
  { href: "/review/", path: "/review", label: "Review", short: "Review" },
  { href: "/notebook/", path: "/notebook", label: "Notebook", short: "Notes" },
  { href: "/progress/", path: "/progress", label: "Progress", short: "Progress" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { progress } = useLearner();
  const percent = completionPercentage(progress, pilotLessons.length);

  return (
    <div className="learner-shell">
      <aside className="learner-sidebar">
        <Link className="brand learner-brand" href="/" aria-label="SciPrep home">
          <span aria-hidden="true">SP</span>
          SciPrep
        </Link>
        <nav aria-label="Learner navigation">
          {navigation.map((item, index) => {
            const active =
              pathname === item.path || pathname.startsWith(`${item.path}/`);
            return (
              <Link
                className={active ? "active" : ""}
                href={{ pathname: item.href }}
                key={item.href}
              >
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="sidebar-progress">
          <div>
            <span>Private pilot</span>
            <strong>{percent}% complete</strong>
          </div>
          <div
            aria-label={`${percent}% of the pilot complete`}
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={percent}
            className="mini-progress"
            role="progressbar"
          >
            <span style={{ width: `${percent}%` }} />
          </div>
          <p>Draft lessons are clearly marked and saved locally on this device.</p>
        </div>
      </aside>

      <div className="learner-main">
        <header className="mobile-app-header">
          <Link className="brand" href="/" aria-label="SciPrep home">
            <span aria-hidden="true">SP</span>
            SciPrep
          </Link>
          <span className="pilot-pill">Private pilot</span>
        </header>
        {children}
      </div>

      <nav className="mobile-bottom-nav" aria-label="Mobile learner navigation">
        {navigation.map((item) => {
          const active =
            pathname === item.path || pathname.startsWith(`${item.path}/`);
          return (
            <Link
              className={active ? "active" : ""}
              href={{ pathname: item.href }}
              key={item.href}
            >
              <span aria-hidden="true" />
              {item.short}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
