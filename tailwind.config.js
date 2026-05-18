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
        soft: "0 20px 70px rgba(0, 0, 0, 0.28)",
        cyan: "0 16px 45px rgba(34, 211, 238, 0.18)"
      }
    }
  },
  plugins: []
};
