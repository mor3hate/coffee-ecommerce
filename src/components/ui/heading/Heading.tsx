import styles from './Heading.module.scss'
import clsx from 'clsx'

interface IHeading {
	title: string
	className?: string
	subTitle?: string
}

export default function Heading({ subTitle, className, title }: IHeading) {
	return (
		<div>
			{subTitle && <h2 className={styles.subHeading}>{subTitle}</h2>}
			<h1 className={clsx(styles.heading, className)}>{title}</h1>
		</div>
	)
}
