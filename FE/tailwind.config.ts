import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'custom-gradient': 'linear-gradient(to bottom, rgb(255, 146, 12), rgb(247, 107, 28))',
                'custom-gradient-btn': 'linear-gradient(to bottom, rgba(255, 255, 255, 0), rgb(255, 255, 255))',
              },
        },
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true }),
    ],
};
export default config;
