"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function NativeEntryRouter() {
  const router = useRouter();

  useEffect(() => {
    const isCapacitorOrigin =
      window.location.protocol === "https:" &&
      window.location.hostname === "localhost";

    if (isCapacitorOrigin) {
      router.replace("/today");
    }
  }, [router]);

  return null;
}
