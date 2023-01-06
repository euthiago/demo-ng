import Image from "next/image"

export default function RootLayout({ children, }: { children: React.ReactNode} ){
	const user_data = {
		name: "Fulano de Tal",
	}
	return (
		<>
			<div className="grid place-items-center p-6 w-full h-full ">
				<div className="w-80 min-h-fit ">
					<div className="relative top-5 grid grid-cols-[1fr_auto] p-2 pl-6 min-h-fit text-white font-bold text-lg">
						{ user_data.name }
						<Image className="rounded-full shadow-md border-2" src="/stbdif1.jpg" alt="User image" width="40" height="40"></Image>
					</div>
					<div className="p-6 bg-white box-border rounded-xl shadow-2xl">
						{ children }
					</div>
				</div>
			</div>
		</>
	);
}