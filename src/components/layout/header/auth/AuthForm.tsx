import Field from '@/components/ui/form/Field'
import { validateEmail } from '@/helpers/validateEmail'
import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IAuthData } from './auth.data.interface'
import ModalUI from '@/ui/modal/ModalUI'
import { IModal } from '@/components/ui/modal/modal.interface'
import styles from './Auth.module.scss'

export default function AuthForm({ isOpen, onClose }: Omit<IModal, 'title'>) {
	const [isLogin, setIsLogin] = useState(true)

	const { control, handleSubmit, reset } = useForm<IAuthData>({
		mode: 'onChange'
	})

	const authTypeText = isLogin ? 'Login' : 'Register'

	const onSubmit = (data: IAuthData) => {
		console.log(data)
		reset()
		setTimeout(onClose, 3000)
	}

	return (
		<ModalUI title={authTypeText} isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.authForm}>
				<Field
					control={control}
					name='email'
					placeHolderName='Email'
					rules={{
						required: 'Email is required',
						pattern: {
							value: validateEmail,
							message: 'Email is not valid'
						}
					}}
				/>
				<Field
					control={control}
					name='password'
					placeHolderName='Password'
					rules={{
						required: 'Password is required',
						minLength: {
							value: 8,
							message: 'Password should be 8 characters length'
						}
					}}
				/>
				<Button
					type='submit'
					variant='solid'
					boxShadow='base'
					bgColor='green'
					color='white'
					title='Auth'
					_hover={{ bg: '#019363' }}
				>
					{authTypeText}
				</Button>
				<p onClick={() => setIsLogin(!isLogin)}>
					{isLogin ? 'New to us? Register' : 'Already have an account? Login'}
				</p>
			</form>
		</ModalUI>
	)
}
