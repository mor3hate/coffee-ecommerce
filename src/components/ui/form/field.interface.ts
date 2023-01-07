import {
	Control,
	FieldPath,
	RegisterOptions,
	FieldValues
} from 'react-hook-form'
import { InputProps } from '@chakra-ui/react'

export interface IField<T extends FieldValues>
	extends Omit<InputProps, 'onChange' | 'value'> {
	placeHolderName: string
	control: Control<T>
	name: FieldPath<T>
	rules?: Omit<
		RegisterOptions<T, FieldPath<T>>,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	>
}
