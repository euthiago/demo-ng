/**
 * 
 * User Page
 * 
 * PS: Too many problems with the new app directory
 * and the --turbo option... 
 * Just finish the project using next 12 stuff
 * 
 */
import Head from 'next/head'
import Link from 'next/link'
import { ReactElement } from 'react'
import IconHide from '../../components/icon-hide'
import IconShow from '../../components/icon-show'
import LoggedInLayout from '../../components/layouts/logged-in'
import nookies from 'nookies'
import { withIronSsr } from '../../lib/session'
// Reference: https://ngcash.notion.site/Processo-Seletivo-NG-TRYBE-223de32e1ed047f2aa90cc0da84754ee
/**
 * 
 * Next in training:
 * React Query
 * Redux
 * Jest and testing libraries
 * Cypress
 * Microfront End (Single SPA)
 * SASS and SCSS
 * 
 * Express
 * PostgreSQL?
 * Prisma ORM?
 * 
 */
const balance_data = {
	show_balance: true,
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

let recent = balance_data.recent_transactions.map( (transaction, index) => (
	<div key={index}>
		<div>{transaction.date.toLocaleDateString("pt-BR")}</div>
		<div>{transaction.ammount}</div>
	</div>
))

const format_balance = (balance:number) => 
	new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(balance)


export default function Me({ cookies }) {
	console.log("component cookies", cookies)
  return (
    <>
      <Head>
        <title>My Profile</title>
        <meta name="description" content="NG Cash user profile" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
		<div className='grid grid-cols-[1fr_auto] font-bold text-gray-700 items-center'>
			<div className="text-3xl" >
				{Object.keys(cookies).map( (k, key) => 
					<p key={key}>{k}:{cookies[k]}</p>
				)}
				{ format_balance(balance_data.balance) }
			</div>
			<div className='cursor-pointer text-gray-500 hover:text-gray-800'>
				{ 
					balance_data.show_balance 
					? <IconHide />
					: <IconShow />
				}
			</div>
		</div>

		<div className='pt-5 pb-5'>{ recent }</div>

		<div><Link href="/me/transactions">Ver todas</Link></div>

	  </div>
    </>
  )
}

Me.getLayout = (page:ReactElement) => 
	<LoggedInLayout>{ page }</LoggedInLayout>


export const getServerSideProps = withIronSsr(({ req }) => {

	const { user } = req.session
	console.log(user)
	return { props: { user } } 

})