import AuthForm from '@/components/layout/header/auth/AuthForm'
import MDIcon from '@/components/ui/icon/MDIcon'
import { useAppSelector } from '@/hooks/reduxHooks'
import { Button, useDisclosure } from '@chakra-ui/react'
import Cart from '../cart/Cart'
import { ISvgButton } from './svg-button.interface'

import styles from './SvgButton.module.scss'

export default function SvgButton({ title, variant, name }: ISvgButton) {
	const { cartItems } = useAppSelector(state => state.cart)
	const { isOpen, onClose, onOpen } = useDisclosure()
	return (
		<>
			<Button
				variant='ghost'
				size='sm'
				onClick={onOpen}
				title={title}
				className={styles.svgButton}
			>
				{variant === 'cart' && (
					<li>
						<span>{cartItems.length > 10 ? '9+' : cartItems.length}</span>
					</li>
				)}
				<MDIcon name={name} />
			</Button>
			{variant === 'cart' ? (
				<Cart isOpen={isOpen} onClose={onClose} cartItems={cartItems} />
			) : (
				<AuthForm isOpen={isOpen} onClose={onClose} />
			)}
		</>
	)
}
