import { PropsWithChildren } from 'react'
import Header from '@/layout/header/Header'
import styles from './Layout.module.scss'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	)
}
