import { useState } from 'react'
import { ITrendingContainer } from './trending.interface'
import TrendingItem from './TrendingItem'
import ActiveTrendingItem from './ActiveTrendingItem'
import Image from 'next/image'

import styles from './Trending.module.scss'

export default function TrendingContainer({
	trendingItems
}: ITrendingContainer) {
	const [activeId, setActiveId] = useState(trendingItems[0]._id)

	const activeElement =
		trendingItems.find(t => t._id === activeId) || trendingItems[0]

	return (
		<div className={styles.trendingContainer}>
			<Image
				src='/starbucksBG.png'
				alt=''
				fill
				sizes='20vw'
				className={styles.backImg}
			/>

			<ActiveTrendingItem
				_id={activeElement._id}
				description={activeElement.description}
				imagePath={activeElement.imagePath}
				title={activeElement.title}
				sizes={activeElement.sizes}
			/>

			<div>
				{trendingItems.map(t => (
					<TrendingItem
						key={t._id}
						_id={t._id}
						imagePath={t.imagePath}
						title={t.title}
						setActiveId={setActiveId}
					/>
				))}
			</div>
		</div>
	)
}
