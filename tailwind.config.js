/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust the paths based on your project structure
  theme: {
    extend: {
      colors: {
        limeGreen: "#E1F396", // Define a name for the custom color
      },
    },
  },
  plugins: [],
};
