module.exports = {
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(255,0,0,0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(255,0,0,1)' },
        },
      },
      animation: {
        'pulse-glow': 'glow 1.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
