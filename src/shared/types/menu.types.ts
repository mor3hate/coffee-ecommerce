export interface ISize {
	name: string
	price: number
}

export interface IMenuItem {
	_id: string
	imagePath: string
	title: string
	description: string
	variant: 'menu' | 'trending'
	type?: string
	sizes: ISize[]
}
