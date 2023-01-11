'use client'

import Link from "next/link"
import Button from "../components/button"
import { ReactElement, useState } from "react"
import LoggedOutLayout from "../components/layouts/logged-out"
import { withIronSsr } from "../lib/session"
import LoginForm from "../components/login-form"



export default function Page({ user }){

	console.log("user from ssr on our home page", user)

	return <div>

		<p className="text-center font-semibold border-b-2">Your next gen money transfer app</p>
		
		{
			user 
			? <div>{user.username} já está logado</div>
			: <LoginForm /> 
		}

	</div>
	
}

Page.getLayout = ( page:ReactElement ) =>
	<LoggedOutLayout>{page}</LoggedOutLayout>


export const getServerSideProps = withIronSsr(({ req }) => {

	const { user=null } = req.session
	console.log(user)
	return { props: { user } } 

})