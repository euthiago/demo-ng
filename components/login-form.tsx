import Link from "next/link"
import { useState } from "react"
import login from "../lib/login"
import Button from "./button"

const LoginForm = () => {

	let [ { username, password, logging }, setUser ] = useState({ username:"", password:"", logging:false })

	const loginUser = async ( evt:React.FormEvent) => {
		if(logging) return
		setUser( user => ({...user, logging:true }))
		evt.preventDefault()
		let res = await login({username, password})
		if(window && res.success) document.location = "/me"
		setUser( user => ({...user, logging: false }))
	}

	const usernameChange = ( evt:React.ChangeEvent<HTMLInputElement> ) => 
		setUser( user => ({...user, username: evt.target.value }))
	
	const passwordChange = ( evt:React.ChangeEvent<HTMLInputElement> ) => 
		setUser( user => ({...user, password: evt.target.value }))
	
	return <form className="py-4" onSubmit={ loginUser }>
		<div className="mb-4">
			<label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="username">
				Username
			</label>
			<input value={username} onChange={usernameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
		</div>
		<div className="mb-4">
			<label className="block text-gray-500 text-sm font-bold mb-2" htmlFor="password">
				Password
			</label>
			<input value={password} onChange={passwordChange}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-1 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
		</div>
		<div className="flex items-center justify-between">
			<Button className="grow" type="submit" disabled={logging}>Sign-in</Button>
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

}
	

export default LoginForm