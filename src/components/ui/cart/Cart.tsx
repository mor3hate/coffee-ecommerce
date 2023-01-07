import { currencyConverter } from '@/helpers/currencyConverter'
import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { ICart } from './cart.interface'
import CartItem from './CartItem'

export default function Cart({ isOpen, onClose, cartItems }: ICart) {
	const totalPrice = cartItems.reduce(
		(sum, { sizePrice, quantity }) => sum + sizePrice * quantity,
		0
	)

	return (
		<Drawer isOpen={isOpen} placement='right' onClose={onClose}>
			<DrawerOverlay />
			<DrawerContent>
				<DrawerCloseButton />
				<DrawerHeader>Your cart</DrawerHeader>

				<DrawerBody>
					{cartItems.map(c => (
						<CartItem
							_id={c._id}
							imagePath={c.imagePath}
							size={c.size}
							title={c.title}
							key={`${c._id}-${c.size}`}
							quantity={c.quantity}
							sizePrice={c.sizePrice}
						/>
					))}
				</DrawerBody>

				<DrawerFooter>
					<div className='mr-auto font-bold'>
						Total: {currencyConverter(totalPrice)}
					</div>
					<Button
						variant='solid'
						boxShadow='base'
						bgColor='green'
						color='white'
						title='Buy'
						_hover={{ bg: '#019363' }}
					>
						Order
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	)
}
