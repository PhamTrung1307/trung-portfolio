/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#111827",
        ocean: "#0f766e",
        steel: "#2563eb",
        mist: "#f8fafc"
      },
      boxShadow: {
        soft: "0 16px 45px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
