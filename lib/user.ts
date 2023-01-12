export type User = {
	isLoggedIn: boolean,
	username: string,
	avatar: string
}

export type MaybeUser = User | null
