
import '../styles/globals.css'

import { Inter } from '@next/font/google'
import Image from 'next/image'
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
			<body className={inter.className + " bg-slate-700 h-screen w-screen text-gray-700"}>
				
				<div className="grid place-items-center p-6 w-full h-full ">
					<div className="min-h-fit grid justify-items-center">
						<div className="shadow-lg relative top-10 rounded-full bg-black aspect-square w-24 p-4 ring-2 ring-white" >
							<Image className="mt-3" src="/logo-ngcash-branco.svg" width={80} height={80} alt="Logomarca NG.Cash"/>
						</div>
						<div>
							{ children }
						</div>
					</div>
				</div>
				
			</body>
		</html>
	);
}