import { extendTheme, StyleFunctionProps } from '@chakra-ui/react'

export const theme = extendTheme({
	colors: {
		gray: {
			500: '#202020'
		},
		green: '#00704A'
	},
	styles: {
		global: (props: StyleFunctionProps) => ({
			body: {
				color: 'default',
				bg: '#fff'
			}
		})
	},
	fonts: {
		heading: `'Rubik', sans-serif`,
		body: `'Rubik', sans-serif`
	}
})
