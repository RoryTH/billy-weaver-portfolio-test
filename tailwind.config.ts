import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            maxWidth: {
                'screen-3xl': '1792px', // Example width for 3xl
                'screen-4xl': '2048px', // Example width for 4xl
                'screen-5xl': '2560px' // Example width for 5xl
            }
        },
        letterSpacing: {
            extraWide: '.25em'
        }
    },
    plugins: []
};
export default config;
