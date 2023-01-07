import { ChangeEventHandler } from 'react'

export interface ISearch {
	value: string
	onChange: ChangeEventHandler<HTMLInputElement>
}
