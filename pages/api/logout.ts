
import type { NextApiRequest, NextApiResponse } from 'next'

import { withIronRoute } from '../../lib/session'

const handler = async (req:NextApiRequest, res: NextApiResponse) => {
	req.session.destroy()
	res.redirect("/")
}

export default withIronRoute(handler)