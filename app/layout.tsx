
import '../styles/globals.css'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children, }: { children: React.ReactNode} ){
	return (
		<html lang="en">
			<head>
				<title>NG Cash</title>
				<meta name="description" content="NG Cash - Your next gen money transfer app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={inter.className + " bg-slate-700 h-screen w-screen"}>
				{ children }
			</body>
		</html>
	);
}