/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#04060A",
        elevated: "rgba(8,18,32,0.6)",
        accent: {
          primary: "#50F4FF",
          secondary: "#936BFF",
          hot: "#FF5C98"
        },
        text: {
          primary: "#F5F8FF",
          secondary: "#B7C2D7"
        }
      },
      fontFamily: {
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

