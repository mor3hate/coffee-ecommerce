import { useActions } from '@/hooks/useActions'
import { IMenuItem } from '@/shared/types/menu.types'
import { Button, Input, useNumberInput } from '@chakra-ui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import Heading from '../heading/Heading'
import SizesContainer from '../sizes/SizesContainer'

import styles from './Menu.module.scss'

export default function MenuItem({
	_id,
	description,
	imagePath,
	title,
	sizes,
	variant
}: IMenuItem) {
	const [size, setSize] = useState<string>('Venti')

	const menuVariant = variant === 'menu'

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
		<article
			className={clsx({
				[styles.trendingItem]: !menuVariant,
				[styles.menuItem]: menuVariant
			})}
		>
			<div
				className={clsx({
					[styles.menuItemContent]: menuVariant,
					[styles.trendingItemLeft]: !menuVariant
				})}
			>
				{menuVariant ? <h3>{title}</h3> : <Heading title={title} />}
				<SizesContainer
					sizes={sizes}
					onClick={setSize}
					size={size}
					isMenu={menuVariant}
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
			<div
				className={clsx({
					[styles.menuItemImg]: menuVariant,
					[styles.trendingImg]: !menuVariant
				})}
			>
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
