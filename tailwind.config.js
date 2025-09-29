/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mb-bg': '#ffffff',
        'mb-fg': '#1e293b',
        'mb-accent': '#3b82f6',
        'mb-secondary': '#1e40af',
        'mb-gradient-start': '#3b82f6',
        'mb-gradient-end': '#8b5cf6',
        'mb-text-primary': '#1e293b',
        'mb-text-secondary': '#64748b',
        'mb-text-muted': '#94a3b8',
      },
      backgroundImage: {
        'mb-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        'mb-gradient-hover': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
