import { Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import MDIcon from '../icon/MDIcon'
import { ISearch } from './search.interface'
import styles from './Search.module.scss'

export default function Search({ onChange, value }: ISearch) {
	return (
		<InputGroup width='60'>
			<Input
				placeholder='Search'
				type='text'
				height='12'
				focusBorderColor='green'
				paddingRight='12'
				value={value}
				onChange={onChange}
			/>
			<InputRightElement
				bgColor='green'
				color='white'
				rounded='md'
				className={styles.searchButton}
			>
				<MDIcon name='MdSearch' />
			</InputRightElement>
		</InputGroup>
	)
}
