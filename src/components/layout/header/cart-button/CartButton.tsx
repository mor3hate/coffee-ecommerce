import Cart from '@/components/ui/cart/Cart'
import MDIcon from '@/components/ui/icon/MDIcon'
import { useAppSelector } from '@/hooks/reduxHooks'
import { Button, useDisclosure } from '@chakra-ui/react'

import styles from '../auth/Auth.module.scss'

export default function CartButton() {
	const { isOpen, onClose, onOpen } = useDisclosure()
	const { cartItems } = useAppSelector(state => state.cart)
	return (
		<>
			<Button
				variant='ghost'
				size='sm'
				onClick={onOpen}
				title='Cart'
				className={styles.authButton}
			>
				<li>{cartItems.length}</li>
				<MDIcon name='MdShoppingCart' />
			</Button>
			<Cart isOpen={isOpen} onClose={onClose} cartItems={cartItems} />
		</>
	)
}
