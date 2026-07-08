/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant-garamond)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        studio: {
          bg: "#FAF9F6",     // Warm linen / off-white
          dark: "#121212",   // Clean deep charcoal
          muted: "#707070",  // Slate stone grey
          light: "#F0EFEA",  // Slightly darker warm grey for panels
          border: "#E0DDD5", // Blueprint line color
          accent: "#8C7A6B", // Bronze / earth tone
        }
      },
      letterSpacing: {
        architect: "0.15em",
        blueprint: "0.25em",
      },
      gridTemplateColumns: {
        '60/40': '3fr 2fr',
        '40/60': '2fr 3fr',
      }
    },
  },
  plugins: [],
};
