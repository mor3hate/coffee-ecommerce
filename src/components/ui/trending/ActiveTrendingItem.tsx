import { useActions } from '@/hooks/useActions'
import { Button, Input, useNumberInput } from '@chakra-ui/react'
import Image from 'next/image'
import { useState } from 'react'
import Heading from '../heading/Heading'
import SizesContainer from '../sizes/SizesContainer'
import { IActiveTrendingItem } from './trending.interface'

import styles from './Trending.module.scss'

export default function ActiveTrendingItem({
	_id,
	description,
	imagePath,
	title,
	sizes
}: IActiveTrendingItem) {
	const [size, setSize] = useState<string>('Venti')

	const {
		getInputProps,
		getIncrementButtonProps,
		getDecrementButtonProps,
		valueAsNumber
	} = useNumberInput({
		step: 1,
		defaultValue: 1,
		min: 1,
		max: 20
	})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	const activeSizePrice = sizes.find(s => s.name === size)?.price || 2

	const activePrice = activeSizePrice * valueAsNumber

	const { addItem } = useActions()

	return (
		<article className={styles.activeTrendingItem}>
			<div className={styles.activeTrendingItemLeft}>
				<Heading title={title} />
				<SizesContainer
					sizes={sizes}
					onClick={setSize}
					size={size}
					activePrice={activePrice}
				/>
				<p>{description}</p>
				<div className={styles.amountWrapper}>
					<div>
						<Button {...dec} bgColor='transparent' fontSize='2xl'>
							-
						</Button>
						<Input {...input} focusBorderColor='black' textAlign='center' />
						<Button {...inc} bgColor='transparent' fontSize='2xl'>
							+
						</Button>
					</div>
					<Button
						variant='solid'
						boxShadow='md'
						height='48px'
						bgColor='green'
						textTransform='uppercase'
						color='white'
						title='Add to cart'
						_hover={{ bg: '#019363' }}
						onClick={() =>
							addItem({
								_id: _id,
								imagePath: imagePath,
								size: size,
								title: title,
								sizePrice: activeSizePrice,
								quantity: valueAsNumber
							})
						}
					>
						Add to cart
					</Button>
				</div>
			</div>
			<div className={styles.activeTrendingImg}>
				<Image
					src='/coffeeSeedBg.jpg'
					alt=''
					fill
					sizes='10rem'
					className='image-bg opacity-10'
				/>
				<Image src={imagePath} alt={title} fill className={styles.img} />
			</div>
		</article>
	)
}
