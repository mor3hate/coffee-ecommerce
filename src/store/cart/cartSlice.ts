import { ICart, ICartItem } from './../../components/ui/cart/cart.interface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Pick<ICart, 'cartItems'> = {
	cartItems: []
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<ICartItem>) => {
			const inCart = state.cartItems?.some(
				item =>
					item._id === action.payload._id && item.size === action.payload.size
			)
			if (inCart) {
				state.cartItems.map(item => {
					if (item._id === action.payload._id) {
						return {
							...item,
							quantity: (item.quantity += action.payload.quantity)
						}
					}
				})
			} else {
				state.cartItems.push(action.payload)
			}
		},
		removeItem: (
			state,
			action: PayloadAction<Pick<ICartItem, '_id' | 'size'>>
		) => {
			const removeIndex = state.cartItems.findIndex(
				item =>
					item._id === action.payload._id && item.size === action.payload.size
			)
			state.cartItems = state.cartItems.filter(
				(_, index) => index !== removeIndex
			)
		},
		changeQuantity: (
			state,
			action: PayloadAction<Pick<ICartItem, '_id' | 'quantity' | 'size'>>
		) => {
			state.cartItems.map(item => {
				if (
					item._id === action.payload._id &&
					item.size === action.payload.size
				) {
					return {
						...item,
						quantity: (item.quantity = action.payload.quantity)
					}
				}
			})
		}
	}
})

export const { addItem, removeItem, changeQuantity } = cartSlice.actions

export default cartSlice.reducer
