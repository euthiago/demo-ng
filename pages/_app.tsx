import '../styles/globals.css'

import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}
  
type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {

	const getLayout = Component.getLayout ?? ( (page:ReactElement) => page)

	return getLayout(
		<div className={inter.className}>
			<Component {...pageProps} />
		</div>
	)

}