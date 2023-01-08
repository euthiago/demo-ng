import Image from "next/image"
import { parseCookies } from 'nookies'

import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function AuthenticatedLayout({ children, }: { children: React.ReactNode} ){
	const { username } = parseCookies()
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
				<div className="w-80 min-h-fit ">
					<div className="relative top-5 grid grid-cols-[1fr_auto] p-2 pl-6 min-h-fit text-white font-bold text-lg">
						{ username }
						<Image className="rounded-full shadow-md border-2" src="/stbdif1.jpg" alt="User image" width="40" height="40"></Image>
					</div>
					<div className="p-6 bg-white box-border rounded-xl shadow-2xl">
						{ children }
					</div>
				</div>
			</div>
			</body>
		</html>
	);
}