/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["html/*.**"],
  theme: {
    extend: {
      boxShadow: {
        // Reset all shadows to have a 0 offset
        DEFAULT: '0 0 10px rgba(0, 0, 0, 0.1)', // Example shadow
        sm: '0 0 5px rgba(0, 0, 0, 0.1)',    // Example small shadow
        md: '0 0 15px rgba(0, 0, 0, 0.2)',   // Example medium shadow
        lg: '0 0 20px rgba(0, 0, 0, 0.25)',  // Example large shadow
        xl: '0 0 25px rgba(0, 0, 0, 0.3)',   // Example extra large shadow
        '2xl': '0 0 30px rgba(0, 0, 0, 0.35)', // Example 2xl shadow
        'inner': '0 0 5px rgba(0, 0, 0, 0.1)', // Inner shadow
        'outline': '0 0 0 3px rgba(0, 0, 0, 0.1)', // Outline shadow
        'none': '0 0 transparent',            // No shadow
        
      },
      backgroundImage: {
        'hero-pattern': "url('../img/bg.png')"
      }
    },
  },
  plugins: [],
}

