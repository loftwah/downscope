import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch',
            color: 'inherit',
            lineHeight: '1.75',
            a: {
              color: 'var(--primary)',
              '&:hover': {
                color: 'var(--primary)',
              },
            },
            '[class~="lead"]': {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            'ol > li::marker': {
              color: 'inherit',
            },
            'ul > li::marker': {
              color: 'inherit',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
            blockquote: {
              color: 'inherit',
              borderLeftColor: 'inherit',
            },
            hr: {
              color: 'inherit',
            },
            code: {
              color: 'inherit',
              backgroundColor: 'var(--muted)',
              borderRadius: '0.375rem',
              padding: '0.25rem 0.5rem',
              fontWeight: '400',
              '&::before': {
                content: '""',
              },
              '&::after': {
                content: '""',
              },
            },
            'a code': {
              color: 'inherit',
            },
            pre: {
              color: 'inherit',
              backgroundColor: 'var(--card)',
              borderRadius: '0.5rem',
              border: '1px solid var(--border)',
              padding: '1.25rem 1.5rem',
              overflow: 'auto',
              fontWeight: '400',
              fontSize: '0.875rem',
              lineHeight: '1.5',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              position: 'relative',
              maxWidth: '100%',
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--border) transparent',
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'var(--border)',
                borderRadius: '4px',
              }
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderRadius: '0',
              padding: '0',
              fontWeight: '400',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
              '&::before': {
                content: 'none',
              },
              '&::after': {
                content: 'none',
              },
            },
            thead: {
              color: 'inherit',
              borderBottomColor: 'inherit',
            },
            'tbody tr': {
              borderBottomColor: 'inherit',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
} 