import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({addComponents} : PluginAPI) {
      addComponents({
        '.btn-hover': {
          '@apply bg-blue-400 rounded-md py-3 px-4 drop-shadow-sm': {},
          '&:hover': {
            '@apply bg-blue-600 text-white drop-shadow-md' : {},
          },
        },
      });
    },
  ],
} satisfies Config;
