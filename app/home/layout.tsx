
export default function LoggedOutLayout({ children, }: { children: React.ReactNode} ){
	return (
		<>
			<div className="grid place-items-center p-6 w-full h-full ">
				<div className="w-80 min-h-fit p-6 bg-white box-border rounded-xl shadow-2xl">
					{ children }
				</div>
			</div>
		</>
	);
}