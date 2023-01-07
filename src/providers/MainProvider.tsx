import { PropsWithChildren } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import { persistor, store } from 'src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { theme } from '@/shared/theme'
import Layout from '@/layout/Layout'

export default function MainProvider({ children }: PropsWithChildren) {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ChakraProvider theme={theme}>
					<Layout>{children}</Layout>
				</ChakraProvider>
			</PersistGate>
		</Provider>
	)
}
