
/**
 * Initiate a login request
 * and handles the result as a Promise
 */

export default async () => {

	try{
		await fetch("/api/logout", { method: "POST" })
		return { success: true }
	}catch(e){
		return { success: false }
	}

}
