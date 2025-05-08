import type { Config } from "tailwindcss";
import { colors } from "./src/lib/data";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        jhBackground: colors[0].jhBackground,
        jhTopBar: colors[0].jhTopBar,
        jhSecondary01: colors[0].jhSecondary01,
        jhSecondary02: colors[0].jhSecondary02,
        jhSecondary03: colors[0].jhSecondary03,
        jhWhite: colors[0].jhWhite,
        jhPrimary01: colors[0].jhPrimary01,
        jhPrimary02: colors[0].jhPrimary02,
        jhGreen: colors[0].jhGreen,
        jhYellow: colors[0].jhYellow,
      },
    },
  },
  plugins: [],
};
export default config;
