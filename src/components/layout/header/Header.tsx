import Logo from '@/ui/logo/Logo'
import HeaderNav from '@/layout/header/header-nav/HeaderNav'
import { headerMenu } from '@/layout/header/header-nav/header-nav.interface'
import Search from '@/components/ui/search/Search'
import { useSearch } from '@/hooks/useSearch'
import styles from './Header.module.scss'
import AuthButton from './auth/AuthButton'
import CartButton from './cart-button/CartButton'

export default function Header() {
	const { handleSearch, searchTerm } = useSearch()

	return (
		<header className={styles.header}>
			<Logo />
			<HeaderNav items={headerMenu.items} />
			<div className={styles.headerRight}>
				<Search onChange={handleSearch} value={searchTerm} />
				<AuthButton />
				<CartButton />
			</div>
		</header>
	)
}
