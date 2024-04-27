/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "blue-400": "#20409A",
      "mw-blue-300": "#3653A4",
      "mw-blue-500": "#2F4788",
      "mw-blue-600": "#19337B",
      "white": "#FFFFFF",
      "slate-100": "#f1f5f9",
      "gray-50": "#f9fafb",
      "gray-300": "#d1d5db",
      "gray-400": "#9ca3af",
      "gray-500": "#6b7280",
      "gray-600": "#4b5563",
      "gray-900": "#111827",
    }
  },
  plugins: [],
}

