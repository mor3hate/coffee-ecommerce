import { currencyConverter } from '@/helpers/currencyConverter'
import SizeItem from './SizeItem'
import { ISizesContainer } from './sizes.interface'
import styles from './Sizes.module.scss'

import clsx from 'clsx'

export default function SizesContainer({
	onClick,
	sizes,
	size,
	activePrice,
	isMenu
}: ISizesContainer) {
	return (
		<div
			className={clsx(styles.sizesContainer, {
				[styles.sizesContainerMenu]: isMenu
			})}
		>
			{sizes.map(s => (
				<SizeItem name={s.name} key={s.name} onClick={onClick} size={size} />
			))}
			{!isMenu && <p>{currencyConverter(activePrice)}</p>}
		</div>
	)
}
