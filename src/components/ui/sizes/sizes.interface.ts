import { Dispatch, SetStateAction } from 'react'
import { ISize } from '../trending/trending.interface'

export interface ISizeItem extends Pick<ISize, 'name'> {
	size: string
	onClick: Dispatch<SetStateAction<string>>
}

export interface ISizesContainer extends Omit<ISizeItem, 'name'> {
	sizes: Pick<ISizeItem, 'name'>[]
	activePrice: number
}
