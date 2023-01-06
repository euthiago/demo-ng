'use client'

import Link from "next/link"
import LoggedOutLayout from "./home/layout"
import Button from "../components/button"
import { useState } from "react"

export default function Page(){

	let [ { username, password }, setUser ] = useState({ username:"", password:"" })

	const loginUser = () => {
		console.log(username, password)
	}

	const usernameChange = ( evt:React.ChangeEvent<HTMLInputElement> ) => 
		setUser( user => ({...user, username: evt.target.value }))
	
	const passwordChange = ( evt:React.ChangeEvent<HTMLInputElement> ) => 
		setUser( user => ({...user, password: evt.target.value }))
	

	return <LoggedOutLayout>
		<div>
			<p className="text-center font-semibold border-b-2">Your next gen money transfer app</p>
			<form className="py-4" onSubmit={ loginUser }>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
						Username
					</label>
					<input value={username} onChange={usernameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
						Password
					</label>
					<input value={password} onChange={passwordChange}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
				</div>
				<div className="flex items-center justify-between">
					<Button className="grow">Sign-in</Button>
				</div>
				<p className="text-center text-sm p-2">
					-- or --
				</p>
				<div className="flex items-center justify-between">
					<Button className="grow" kind="secondary">
						<Link href="/register">
							Create an account
						</Link>
					</Button>
				</div>
			</form>
		</div>
	</LoggedOutLayout>

}