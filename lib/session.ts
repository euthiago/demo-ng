import { ironOptions } from "./iron-options"

import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next'
import { GetServerSidePropsContext, NextApiHandler, GetServerSidePropsResult } from "next"

export const withIronRoute = (handler:NextApiHandler) => 
	withIronSessionApiRoute(handler, ironOptions)

// InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export const withIronSsr = <
	P extends { [key: string]: unknown } = { [key: string]: unknown },
>( 
	handler: ( context:GetServerSidePropsContext ) => 
		GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>
) => 
	withIronSessionSsr(handler, ironOptions)
