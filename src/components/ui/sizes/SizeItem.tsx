import { ISizeItem } from './sizes.interface'
import { motion } from 'framer-motion'
import styles from './Sizes.module.scss'
import clsx from 'clsx'

export default function SizeItem({ name, onClick, size }: ISizeItem) {
	return (
		<motion.button
			className={clsx(styles.sizeButton, {
				[styles.active]: name === size
			})}
			animate={name === size ? { scale: 1.1 } : {}}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			onClick={() => onClick(name)}
		>
			{name}
		</motion.button>
	)
}
