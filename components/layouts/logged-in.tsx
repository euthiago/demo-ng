import Head from 'next/head'
import { withIronSsr } from '../../lib/session'
import { MaybeUser } from '../../lib/user'

export default function LoggedInLayout({ children, user }: { children: React.ReactNode, user:MaybeUser } ){
	
	return (
		<>
			<Head>
				<title>NG Cash</title>
				<meta name="description" content="NG Cash - Your next gen money transfer app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={" bg-slate-700 h-screen w-screen text-gray-700"}>
				<div>User: { user?.username }</div>
				<div className="grid place-items-center p-6 w-full h-full ">
					<div className="w-80 min-h-fit p-6 pt-10 bg-white box-border rounded-xl shadow-2xl">
						{ children }
					</div>
				</div>
			</main>
		</>
	);
}

export const getServerSideProps = withIronSsr(({ req }) => {

	const user:MaybeUser = req.session.user || null
	return { props: { user } } 

})