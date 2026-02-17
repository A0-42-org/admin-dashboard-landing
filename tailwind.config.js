import { skeleton } from '@skeletonlabs/tw-plugin';

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
      themes: [
        { name: 'skeleton', enhancements: true },
        { name: 'wintry', enhancements: true },
        { name: 'modern', enhancements: true },
        { name: 'rocket', enhancements: true },
        { name: 'seafoam', enhancements: true },
        { name: 'vintage', enhancements: true },
        { name: 'sahara', enhancements: true },
        { name: 'hamlindigo', enhancements: true }
      ]
    })
  ],
  darkMode: 'class'
};
