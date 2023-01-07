import {
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay
} from '@chakra-ui/modal'
import { IModal } from '@/ui/modal/modal.interface'
import { PropsWithChildren } from 'react'

export default function ModalUI({
	onClose,
	isOpen,
	title,
	children
}: PropsWithChildren<IModal>) {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset='scale'>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>
			</ModalContent>
		</Modal>
	)
}
