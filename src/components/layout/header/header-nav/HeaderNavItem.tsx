import Link from 'next/link'
import { IHeaderNavItem } from '@/layout/header/header-nav/header-nav.interface'
import styles from './HeaderNav.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/router'

export default function HeaderNavItem({ text, link }: IHeaderNavItem) {
	const { pathname } = useRouter()

	return (
		<li
			className={clsx(styles.headerLink, {
				[styles.active]: pathname === link
			})}
		>
			<Link href={link}>{text}</Link>
		</li>
	)
}
