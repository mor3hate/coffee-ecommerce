import { ISize } from './../../../shared/types/menu.types'
import { Dispatch, SetStateAction } from 'react'

export interface ISizeItem extends Pick<ISize, 'name'> {
	size: string
	onClick: Dispatch<SetStateAction<string>>
}

export interface ISizesContainer extends Omit<ISizeItem, 'name'> {
	isMenu: boolean
	sizes: Pick<ISizeItem, 'name'>[]
	activePrice: number
}
