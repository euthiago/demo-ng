import { IronSessionOptions } from "iron-session"

export const ironOptions:IronSessionOptions = {
	cookieName: 'ng_user',
	password: process.env.SESSION_PASSWORD as string,
	ttl: 60*60*24, // 1 day
	cookieOptions: {
		secure: process.env.NODE_ENV === 'production'
	},
	
}