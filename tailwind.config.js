/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
        extend: {
          colors: {
            hitam: "#1a1a1a",
            putih: "#ffffff",
            ungu: "#8685ef",
          },
          keyframes: {
            fadeInUp: {
              '0%': { opacity: '0', transform: 'translate3d(0,40px,0)' },
              '100%': { opacity: '1', transform: 'translate3d(0,0,0)' }
            },
            fadeInDown: {
              '0%': { opacity: '0', transform: 'translate3d(0,-40px,0)' },
              '100%': { opacity: '1', transform: 'translate3d(0,0,0)' }
            }
          },
          animation: {
            fadeInUp: 'fadeInUp 0.8s ease both',
            fadeInDown: 'fadeInDown 0.8s ease both',
          }
        }
      },
  plugins: [],
}

