/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom GitHub Dark Mode Colors
        githubBg: '#0d1117',        // Background color
        githubText: '#c9d1d9',      // Primary text color
        githubSubText: '#8b949e',   // Secondary text color
        githubGreen: '#238636',     // Accent green color
        githubHoverGreen: '#2ea043',// Hover state green color
        githubBorder: '#30363d',    // Border color for inputs and borders
        githubInputBg: '#161b22',   // Input and textarea background
      },
    },
  },
  plugins: [],
}
