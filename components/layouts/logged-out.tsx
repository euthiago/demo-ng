
import Head from 'next/head'
import Image from 'next/image'

export default function LoggedOutLayout({ children, }: { children: React.ReactNode} ){
	return (
		<>
			<Head>
				<title>NG Cash</title>
				<meta name="description" content="NG Cash - Your next gen money transfer app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={ " bg-slate-700 h-screen w-screen text-gray-700"}>
				
				<div className="grid place-items-center p-6 w-full h-full ">
					<div className="min-h-fit grid justify-items-center">
						<div className="shadow-lg relative top-10 rounded-full bg-black aspect-square w-24 p-4 ring-2 ring-white" >
							<Image className="mt-3" src="/logo-ngcash-branco.svg" width={80} height={80} alt="Logomarca NG.Cash"/>
						</div>
						<div className="w-80 min-h-fit p-6 pt-10 bg-white box-border rounded-xl shadow-2xl">
							{ children }
						</div>
					</div>
				</div>
				
			</main>
		</>
	);
}