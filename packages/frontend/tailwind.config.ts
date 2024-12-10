import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
<<<<<<< HEAD
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "letter-grey": "#8D8D8B",
        "stroke-line": "#8B8484",
        "yellow-cta": "#F6C114",
        "black-text": '1E1E1E',
        'nav-bg': '#1E1E1E',
        'nav-bg-hover': '#8D8D8B'
      },
      fontFamily: {
        "bebas-neue": ['Bebas Neue', 'sans-serif'],
        "montserrat": ['Montserrat', 'sans-serif'],
        "inter": ['Inter', 'sans-serif']
      },
      boxShadow: {
        'text-custom': '0 4px 4px rgba(0, 0, 0, 0.25)', 
      },
    },
=======
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'letter-grey': '#8D8D8B',
  			'stroke-line': '#8B8484',
  			'yellow-cta': '#F6C114',
  			'black-text': '#1E1E1E',
  			'nav-bg': '#1E1E1E',
  			'nav-bg-hover': '#8D8D8B'
  		},
  		fontFamily: {
  			'bebas-neue': [
  				'Bebas Neue',
  				'sans-serif'
  			],
  			'montserrat': [
  				'Montserrat',
  				'sans-serif'
  			],
  			'inter': [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		boxShadow: {
  			'text-custom': '0 4px 4px rgba(0, 0, 0, 0.25)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
>>>>>>> 7694e5d (fix: update config to point to app router structure)
  },
} satisfies Config;
