import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter Tight"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        hebrew: ['"Frank Ruhl Libre"', 'serif'],
      },
      colors: {
        canvas: '#090909',
        surface: {
          1: '#141414',
          2: '#1c1c1c',
        },
        hairline: '#262626',
        'hairline-soft': '#1a1a1a',
        ink: {
          DEFAULT: '#ffffff',
          muted: '#999999',
        },
        accent: '#0099ff',
        success: '#22c55e',
        gradient: {
          magenta: '#d44df0',
          violet: '#6a4cf5',
          orange: '#ff7a3d',
          coral: '#ff5577',
        },
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        md: '10px',
        lg: '15px',
        xl: '20px',
        '2xl': '30px',
        pill: '100px',
      },
      boxShadow: {
        elev: '0 0.5px 0 rgba(255,255,255,0.10) inset, 0 10px 30px rgba(0,0,0,0.25)',
      },
      transitionTimingFunction: {
        ds: 'cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}

export default config
