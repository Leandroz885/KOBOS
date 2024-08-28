/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}",
      "./lessen/**/*.md",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
