
/**
 * Initiate a login request
 * and handles the result as a Promise
 */

export default async ({ username, password }: {username:string, password:string }) => {

	let body = new FormData()
	body.set("username", username)
	body.set("password", password)

	try{
		let res = await fetch("/api/login", { body, method:"POST" })
		return res.json()
	}catch(e){
		return { success: false }
	}

}
