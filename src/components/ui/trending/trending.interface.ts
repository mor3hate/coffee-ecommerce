import { Dispatch, SetStateAction } from 'react'

export interface ISize {
	name: string
	price: number
}

export interface IActiveTrendingItem {
	_id: string
	imagePath: string
	title: string
	description: string
	sizes: ISize[]
}

export interface ITrendingItem
	extends Omit<IActiveTrendingItem, 'description' | 'sizes'> {
	setActiveId: Dispatch<SetStateAction<string>>
}

export interface ITrendingContainer {
	trendingItems: IActiveTrendingItem[]
}
