/**
 * 
 * User Page
 * 
 */
import Head from 'next/head'
import Link from 'next/link'
// Reference: https://ngcash.notion.site/Processo-Seletivo-NG-TRYBE-223de32e1ed047f2aa90cc0da84754ee

const user_data = {
	name: "Fulano de Tal",
	balance: 10000,
	recent_transactions: [
		{
			date: new Date(Date.now() - 500000),
			ammount: 50,
			cash_out: true
		},
		{
			date: new Date(Date.now() - 1500000),
			ammount: 50,
			cash_out: true
		},
		{
			date: new Date(Date.now() - 2500000),
			ammount: 50,
			cash_out: false
		},
	]
}

let recent = user_data.recent_transactions.map( (transaction, index) => (
	<div key={index}>
		<div>{transaction.date.toLocaleDateString("pt-BR")}</div>
		<div>{transaction.ammount}</div>
	</div>
))
	
export default function Me() {

  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta name="description" content="NG Cash user profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
		
		<div>{user_data.name}</div>

		<div>{user_data.balance}</div>

		<div>{ recent }</div>

		<div><Link href="/me/transactions">Ver todas</Link></div>

	  </div>
    </>
  )
}
