import Image from 'next/image'
import Link from 'next/link'
import styles from './Logo.module.scss'

export default function Logo() {
	return (
		<Link href='/' className={styles.logo}>
			<Image src='/starbucks.svg' alt='starbucks' width={70} height={70} />
			<span>starbucks</span>
		</Link>
	)
}
