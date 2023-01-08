/**
 * App-wide type declarations
 */
import * as IronSession from "iron-session";

import { User } from "./lib/user"

declare module "iron-session" {
	declare interface IronSessionData{
		user?: User
	}
}

declare type LoginResponse = {
	success: boolean,
	data?: {
		redirect?: string
	}
}