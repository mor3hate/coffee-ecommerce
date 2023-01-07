import { ITrendingContainer } from '@/components/ui/trending/trending.interface'
import TrendingContainer from '@/components/ui/trending/TrendingContainer'

const trendingItemsArr: ITrendingContainer = {
	trendingItems: [
		{
			_id: '121',
			description: '230 calories, 28g sugar, 9g fat',
			imagePath: '/hotChocolate.png',
			title: 'Peppermint Hot Chocolate',
			sizes: [
				{
					name: 'Short',
					price: 5
				},
				{
					name: 'Tall',
					price: 2
				},
				{
					name: 'Grande',
					price: 3
				},
				{
					name: 'Venti',
					price: 9
				}
			]
		},
		{
			_id: '1213',
			description: '230 calories, 28g sugar, 9g fat',
			imagePath: '/hotChocolate.png',
			title: 'Peppermint Hot Chocolateeee',
			sizes: [
				{
					name: 'Short',
					price: 1.5
				},
				{
					name: 'Tall',
					price: 2
				},
				{
					name: 'Grande',
					price: 3
				},
				{
					name: 'Venti',
					price: 10
				}
			]
		},
		{
			_id: '12154',
			description: '230 calories, 28g sugar, 9g fat',
			imagePath: '/hotChocolate.png',
			title: 'Peppermint Hot Chocolatertyu',
			sizes: [
				{
					name: 'Short',
					price: 1.5
				},
				{
					name: 'Tall',
					price: 2
				},
				{
					name: 'Grande',
					price: 3
				},
				{
					name: 'Venti',
					price: 20
				}
			]
		}
	]
}

export default function Home() {
	return <TrendingContainer trendingItems={trendingItemsArr.trendingItems} />
}
