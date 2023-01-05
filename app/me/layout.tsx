
export default function RootLayout({ children, }: { children: React.ReactNode} ){
	return (
		<>
			<head>
				<title>NG Cash - My Profile</title>
				<meta name="description" content="NG Cash - Personal Profile" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<div className="grid place-items-center p-6 w-full h-full ">
				<div className="w-80 min-h-fit p-6 bg-white box-border rounded-xl shadow-2xl">
					{ children }
				</div>
			</div>
		</>
	);
}