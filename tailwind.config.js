import skeleton from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/@skeletonlabs/skeleton/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    skeleton({
      themes: {
        preset: [
          {
            name: 'wintry',
            enhancements: true,
          },
          {
            name: 'modern',
            enhancements: true,
          },
          {
            name: 'crimson',
            enhancements: true,
          },
          {
            name: 'gold-nouveau',
            enhancements: true,
          },
          {
            name: 'hamlindigo',
            enhancements: true,
          },
          {
            name: 'violet',
            enhancements: true,
          },
          {
            name: 'sahara',
            enhancements: true,
          },
          {
            name: 'rocket',
            enhancements: true,
          }
        ]
      }
    }),
    forms
  ],
  darkMode: 'class',
}
