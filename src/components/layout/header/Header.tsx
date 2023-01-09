import Logo from '@/ui/logo/Logo'
import HeaderNav from '@/layout/header/header-nav/HeaderNav'
import { headerMenu } from '@/layout/header/header-nav/header-nav.interface'
import Search from '@/components/ui/search/Search'
import { useSearch } from '@/hooks/useSearch'
import SvgButton from '@/components/ui/svg-button/SvgButton'

import styles from './Header.module.scss'

export default function Header() {
	const { handleSearch, searchTerm } = useSearch()

	return (
		<header className={styles.header}>
			<Logo />
			<HeaderNav items={headerMenu.items} />
			<div className={styles.headerRight}>
				<Search onChange={handleSearch} value={searchTerm} />
				<SvgButton
					title='Authorize'
					name='MdOutlineAccountCircle'
					variant='login'
				/>
				<SvgButton title='Cart' name='MdShoppingCart' variant='cart' />
			</div>
		</header>
	)
}
