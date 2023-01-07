import { IModal } from '@/ui/modal/modal.interface'
import { IActiveTrendingItem } from '../trending/trending.interface'

export interface ICartItem
	extends Omit<IActiveTrendingItem, 'description' | 'sizes'> {
	size: string
	sizePrice: number
	quantity: number
}

export interface ICart extends Omit<IModal, 'title'> {
	cartItems: ICartItem[]
}
