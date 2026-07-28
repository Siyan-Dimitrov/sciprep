import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SciPrep Chemistry and Physics Foundations",
    short_name: "SciPrep",
    description:
      "A structured chemistry and physics foundation course for non-science learners.",
    start_url: "/today/",
    display: "standalone",
    background_color: "#f4f1e8",
    theme_color: "#15372c",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
