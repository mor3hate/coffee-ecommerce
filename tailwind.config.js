const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors: {
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			gray: {
				500: '#202020'
			},
			green: {
				DEFAULT: '#00704A'
			},
			biege: {
				DEFAULT: '#F5F5DC'
			},
			orange: {
				500: '#FF7F50',
				400: '#FFD580'
			},
			pink: {
				DEFAULT: '#e75480'
			}
		},
		extend: {
			transitionDuration: {
				DEFAULT: '300ms'
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
				4: '4'
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				}
			},
			animation: {
				fade: 'fade .5s ease-in-out'
			}
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.text-shadow': {
					textShadow: '1px 1px rgba(0, 0, 0, 0.4)'
				},
				'.image-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none'
				}
			})
		})
	]
}
