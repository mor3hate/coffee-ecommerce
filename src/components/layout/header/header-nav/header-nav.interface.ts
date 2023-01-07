export interface IHeaderNavItem {
	text: string
	link: string
}

export interface IHeaderNav {
	items: IHeaderNavItem[]
}

export const headerMenu: IHeaderNav = {
	items: [
		{
			text: 'Trending',
			link: '/'
		},
		{
			text: 'Menu',
			link: '/menu'
		},
		{
			text: 'Rewards',
			link: '/rewards'
		},
		{
			text: 'About',
			link: '/about'
		}
	]
}
