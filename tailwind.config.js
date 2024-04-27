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
      "mw-blue": "#2F4DA0",
      "mw-blue-300": "#3653A4",
      "mw-blue-500": "#2F4788",
      "mw-blue-600": "#19337B",
      "mw-blue-700": "#1d4ed8",
      "white": "#FFFFFF",
      "slate-100": "#f1f5f9",
      "slate-500": "#64748b",
      "slate-950": "#020617",
      "gray-50": "#f9fafb",
      "gray-100": "#f3f4f6",
      "gray-200": "#e5e7eb",
      "gray-300": "#d1d5db",
      "gray-400": "#9ca3af",
      "gray-500": "#6b7280",
      "gray-600": "#4b5563",
      "gray-900": "#111827",
    }
  },
  plugins: [],
}

