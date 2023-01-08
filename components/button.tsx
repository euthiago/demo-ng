import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ButtonKind = "primary" | "secondary" 

export default function Button({
		children,
		className='',
		containerClassName='',
		kind="primary",
		disabled=false,
		type="button"
	}:{
		children:ReactNode,
		className?:string,
		containerClassName?:string,
		kind?:ButtonKind,
		disabled?:boolean,
		type?:"button" | "submit" | "reset" | undefined
	}){

	return (
		<button disabled={disabled} type={type} className={
			twMerge(
				kind === "primary" ? "bg-black  text-white" : "border-gray-700 border-2",
				"hover:shadow-md hover:bg-slate-900 hover:text-white font-bold rounded focus:outline-none focus:shadow-outline", 
				disabled ? "opacity-50" : "",
				className
			)} >
			<div className={twMerge("py-2 px-4", containerClassName)} >
				{children}
			</div>
		</button>
	)
}