import { Icon } from '@chakra-ui/react'
import * as MdIcons from 'react-icons/md'

type typeMDIcon = {
	name: keyof typeof MdIcons
}

export default function MDIcon({ name }: typeMDIcon) {
	const icon = MdIcons[name]

	return <Icon as={icon} />
}
