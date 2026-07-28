import type { ReactNode } from "react";

import { AppShell } from "@/components/app-shell";
import { LearnerProvider } from "@/components/learner-provider";

export default function LearnerLayout({ children }: { children: ReactNode }) {
  return (
    <LearnerProvider>
      <AppShell>{children}</AppShell>
    </LearnerProvider>
  );
}
