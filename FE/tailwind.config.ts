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
                'custom-gradient': 'linear-gradient(#29251c, #2c2306)',
              },
        },
      
    },
    plugins: [],
};
export default config;
