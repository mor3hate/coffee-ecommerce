import Image from 'next/image'
import { ITrendingItem } from './trending.interface'

import { motion } from 'framer-motion'
import styles from './Trending.module.scss'

export default function TrendingItem({
	_id,
	imagePath,
	title,
	setActiveId
}: ITrendingItem) {
	return (
		<motion.article
			whileHover={{ scale: 1.1 }}
			transition={{ duration: 0.22 }}
			onClick={() => setActiveId(_id)}
			className={styles.trendingItem}
			role='button'
		>
			<Image
				src='/coffeeSeedBg.jpg'
				alt=''
				fill
				sizes='10rem'
				className='image-bg opacity-10'
			/>
			<Image src={imagePath} alt={title} className={styles.img} fill />
		</motion.article>
	)
}
