import Link from "next/link"
import LoggedOutLayout from "./home/layout"

export default function Page(){

	return <LoggedOutLayout>
		<div>
			<h1 className="text-2xl	">NG-Cash</h1>
			<p>Your next gen money transfer app</p>
			<Link href="/me">meu perfil</Link>
		</div>
	</LoggedOutLayout>

}