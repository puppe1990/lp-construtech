/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./index.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-grafeno': '#0B1F36',
        'laranja-operacional': '#FF6B2C',
        'concreto-urbano': '#5F6B7A',
        'verde-compliance': '#12B886',
        'amarelo-campo': '#FFC857',
        'areia-modular': '#F5F2EB',
        'azul-neblina': '#8FB4D9',
        'sucesso': '#12B886',
        'aviso': '#FFC857',
        'erro': '#E24343',
        'informacao': '#2D7BFF',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'heading': ['Space Grotesk', 'Montserrat', 'Arial', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
