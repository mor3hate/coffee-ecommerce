export const currencyConverter = (price: number) => {
	const en = new Intl.NumberFormat('en', {
		style: 'currency',
		currency: 'USD'
	}).format(price)

	return en
}
