/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "var(--bg)",
        elevated: "var(--bg-soft)",
        accent: {
          primary: "#50F4FF",
          secondary: "#936BFF",
          hot: "#FF5C98"
        },
        text: {
          primary: "var(--text)",
          secondary: "var(--text-subtle)"
        },
        border: "var(--border)"
      },
      fontFamily: {
        display: ["'Sora'", "system-ui", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

