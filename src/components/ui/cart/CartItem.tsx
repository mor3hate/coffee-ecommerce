import { useActions } from '@/hooks/useActions'
import {
	Card,
	CardBody,
	Stack,
	Text,
	Heading,
	Button,
	Input,
	useNumberInput
} from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ICartItem } from './cart.interface'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './Cart.module.scss'

export default function CartItem({
	imagePath,
	size,
	title,
	_id,
	quantity
}: ICartItem) {
	const {
		getInputProps,
		getIncrementButtonProps,
		getDecrementButtonProps,
		valueAsNumber
	} = useNumberInput({
		step: 1,
		defaultValue: quantity,
		min: 1,
		max: 20
	})

	const [isShow, setIsShow] = useState(true)

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const { changeQuantity, removeItem } = useActions()

	const handleRemove = () => {
		setIsShow(false)

		const ts = setTimeout(() => removeItem({ _id: _id, size: size }), 700)

		return () => clearTimeout(ts)
	}

	useEffect(() => {
		changeQuantity({ _id: _id, quantity: valueAsNumber, size: size })
	}, [valueAsNumber])

	return (
		<motion.div
			className='mt-2'
			initial={{ opacity: 1, x: 0, height: 141.2 }}
			animate={
				!isShow
					? {
							opacity: 0,
							x: '-100%',
							height: 0
					  }
					: {}
			}
			transition={{ duration: 0.4 }}
		>
			<Card
				size='sm'
				direction={{ base: 'column', sm: 'row' }}
				overflow='hidden'
				variant='outline'
			>
				<div className='relative overflow-hidden w-20 h-20'>
					<Image src={imagePath} alt={title} fill sizes='5rem' />
				</div>
				<Stack>
					<CardBody>
						<Heading size='md' isTruncated width='44'>
							{title}
						</Heading>
						<Text
							py='2'
							textTransform='uppercase'
							className='text-xs opacity-50'
						>
							{size}
						</Text>
						<div className={styles.amount}>
							<Button {...dec} bgColor='transparent' fontSize='xl' size='sm'>
								-
							</Button>
							<Input
								{...input}
								focusBorderColor='gray.100'
								textAlign='center'
								size='sm'
							/>
							<Button {...inc} bgColor='transparent' fontSize='xl' size='sm'>
								+
							</Button>
						</div>
						<Button
							variant='link'
							mt='2'
							size='sm'
							color='red.500'
							fontWeight='400'
							onClick={handleRemove}
						>
							Remove
						</Button>
					</CardBody>
				</Stack>
			</Card>
		</motion.div>
	)
}
