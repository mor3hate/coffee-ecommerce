import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input
} from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import { IField } from './field.interface'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
	placeHolderName,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			rules={rules}
			name={name}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<FormControl isInvalid={!!error} height={97}>
					<FormLabel>{placeHolderName}</FormLabel>
					<Input
						type='text'
						value={value}
						onChange={onChange}
						onBlur={onBlur}
						focusBorderColor='green'
						{...rest}
					/>
					<FormErrorMessage>{error && error.message}</FormErrorMessage>
				</FormControl>
			)}
		/>
	)
}

export default Field
