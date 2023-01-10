
import type { NextApiRequest, NextApiResponse } from 'next'

import Cors from 'cors'

import { withIronRoute } from '../../lib/session'

const cors = Cors({
	methods:"POST",
	origin: process.env.NODE_ENV === "development" ? "*" : false
})

const corsMiddleware = (req:NextApiRequest, res: NextApiResponse) =>  
	new Promise((resolve, reject) => {
			cors(req, res, (result: any) => {
			if (result instanceof Error) 
				return reject(result)
			return resolve(result)
		})
	})

const N_AVATARS = 2
const handler = async (req: NextApiRequest, res: NextApiResponse) => {

	await corsMiddleware(req, res)

	// __TODO__ get user session based on login info
	const avatar_id = Math.floor(Math.random()*1000) % N_AVATARS

	req.session.user = {
		isLoggedIn: true,
		username: "Authenticated User",
		avatar: `/stbdif${ avatar_id }.jpg`
	}

	await req.session.save()

	res.status(200).json({
		success:true,
		data: {
			redirect: "/me"
		}
	})
}

export default withIronRoute(handler)
