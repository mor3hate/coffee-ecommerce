import { IMenuItem } from './../../../shared/types/menu.types'
import { Dispatch, SetStateAction } from 'react'

export interface ITrendingItem
	extends Omit<IMenuItem, 'description' | 'sizes' | 'variant'> {
	setActiveId: Dispatch<SetStateAction<string>>
}

export interface ITrendingContainer {
	trendingItems: IMenuItem[]
}
