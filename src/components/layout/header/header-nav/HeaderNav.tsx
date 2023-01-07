import { IHeaderNav } from '@/layout/header/header-nav/header-nav.interface'
import HeaderNavItem from '@/layout/header/header-nav/HeaderNavItem'

import styles from './HeaderNav.module.scss'

export default function HeaderNav({ items }: IHeaderNav) {
	return (
		<nav>
			<ul className={styles.headerNav}>
				{items.map(i => (
					<HeaderNavItem text={i.text} link={i.link} key={i.link} />
				))}
			</ul>
		</nav>
	)
}
