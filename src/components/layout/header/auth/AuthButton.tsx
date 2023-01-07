import MDIcon from '@/components/ui/icon/MDIcon'
import { Button, useDisclosure } from '@chakra-ui/react'
import AuthForm from './AuthForm'
import styles from './Auth.module.scss'

export default function AuthButton() {
	const { isOpen, onClose, onOpen } = useDisclosure()
	return (
		<>
			<Button
				variant='ghost'
				size='sm'
				onClick={onOpen}
				title='Authorize'
				className={styles.authButton}
			>
				<MDIcon name='MdOutlineAccountCircle' />
			</Button>
			<AuthForm isOpen={isOpen} onClose={onClose} />
		</>
	)
}
