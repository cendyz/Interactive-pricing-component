/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Manrope', 'sans'],
			},
			fontWeight: {
				manrope600: '600',
				manrope800: '800',
			},
			fontSize: {
				base: ['1.6rem'],
			},
			backgroundImage: {
				navMenu: "url('./src/images/bg-pattern-mobile-nav.svg')",
			},
			container: {
				center: true,
			},
			colors: {
				softCyan: 'hsl(174, 77%, 80%)',
				strongCyan: 'hsl(174, 86%, 45%)',
				lightGrayishRed: 'hsl(14, 92%, 95%)',
				lightRed: 'hsl(15, 100%, 70%)',
				paleBlue: 'hsl(226, 100%, 87%)',
				white: 'hsl(0, 0%, 100%)',
				veryPaleBlue: 'hsl(230, 100%, 99%)',
				lightGrayishBlue: {
					sliderBar: 'hsl(224, 65%, 95%)',
					toggleBackground: 'hsl(223, 50%, 87%)',
				},
				grayishBlue: 'hsl(225, 20%, 60%)',
				darkDesaturatedBlue: 'hsl(227, 35%, 25%)',
			},
		},
	},
	plugins: [],
}
