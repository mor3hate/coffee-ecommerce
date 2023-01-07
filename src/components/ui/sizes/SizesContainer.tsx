import { currencyConverter } from '@/helpers/currencyConverter'
import SizeItem from './SizeItem'
import { ISizesContainer } from './sizes.interface'
import styles from './Sizes.module.scss'

export default function SizesContainer({
	onClick,
	sizes,
	size,
	activePrice
}: ISizesContainer) {
	return (
		<div className={styles.sizesContainer}>
			{sizes.map(s => (
				<SizeItem name={s.name} key={s.name} onClick={onClick} size={size} />
			))}
			<p>{currencyConverter(activePrice)}</p>
		</div>
	)
}
