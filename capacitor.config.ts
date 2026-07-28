import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.sciprep.app",
  appName: "SciPrep",
  webDir: "apps/web/out",
  backgroundColor: "#f4f1e8",
  android: {
    backgroundColor: "#f4f1e8",
    allowMixedContent: false,
  },
};

export default config;
