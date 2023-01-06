import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type ButtonKind = "primary" | "secondary" 

export default function Button({
		children,
		className='',
		containerClassName='',
		kind="primary"
	}:{
		children:ReactNode,
		className?:string,
		containerClassName?:string,
		kind?:ButtonKind
	}){

	return (
		<button type="button" className={
			twMerge(
				kind === "primary" ? "bg-black  text-white" : "border-gray-700 border-2",
				"hover:shadow-md hover:bg-slate-900 hover:text-white font-bold rounded focus:outline-none focus:shadow-outline", 
				className
			)} >
			<div className={twMerge("py-2 px-4", containerClassName)} >
				{children}
			</div>
		</button>
	)
}