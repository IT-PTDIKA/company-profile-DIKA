import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/module/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media', // atau 'class' jika Anda ingin mengontrol secara manual dengan class
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        grotesk: ["Neue Haas Grotesk Display Pro", 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
