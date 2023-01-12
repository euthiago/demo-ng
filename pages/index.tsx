'use client'

import { ReactElement } from "react"
import LoggedOutLayout from "../components/layouts/logged-out"
import { withIronSsr } from "../lib/session"
import LoginForm from "../components/login-form"
import { MaybeUser } from "../lib/user"
import Image from "next/image"
import Button from "../components/button"
import Link from "next/link"
import logout from "../lib/logout"

export default function Page( { user }:{ user:MaybeUser }){

	console.log("user from ssr on our home page", user)

	const handleLogOut = async () => {
		try {
			const res = await logout()
			if(window && res.success) document.location = "/"
		}catch(e){
			console.log(e)
		}
	}

	return <div>

		<p className="text-center font-semibold border-b-2">Your next gen money transfer app</p>
		
		{
			user 
			? <div className="w-full p-8">
				
				<div className="rounded-full shadow w-[120px] m-auto overflow-clip">
					<Image src={user.avatar} width={120} height={120} alt="Avatar image"  />
				</div>
				<div className="font-semibold text-gray-700 text-xl text-center mt-1">
					{user.username}
				</div>

				<Link href="/me" title="Profile">
					<Button className="w-full mt-6 mb-2">Continue</Button>
				</Link>
				<p className="text-center">-- or --</p>
				<Button onPointerUp={handleLogOut} className="w-full mt-2">Logout</Button>
				
			</div>
			: <LoginForm /> 
		}

	</div>
	
}

Page.getLayout = ( page:ReactElement ) =>
	<LoggedOutLayout>{ page }</LoggedOutLayout>


export const getServerSideProps = withIronSsr(({ req }) => {

	const user:MaybeUser = req.session.user || null
	return { props: { user } } 

})