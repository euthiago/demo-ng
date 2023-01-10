import { useEffect, useState } from "react"

export type User = {
	isLoggedIn: boolean,
	username: string,
	avatar: string
}

export const useUser = () => {

	const [{ username, avatar, isLoggedIn }, mutateUser] = useState({
		isLoggedIn: false,
		username: "",
		avatar: ""
	})

	return { username, avatar, isLoggedIn }
	
}
