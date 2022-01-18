import { FC } from "react";
import Head from 'next/head'
import Navbar from "../components/Navbar";
import Information from "../components/information"
import Footer from '../components/Footer'

type Props = {

}

const Investor: FC<Props> = () => {
	return (
		<div className="font-poppins w-full min-h-screen bg-brand-dark">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
			</Head>
			<Navbar></Navbar>
			<Information left={true}></Information>
			<Information left={false}></Information>
			<Information left={true}></Information>

			<Footer></Footer>
		</div>
	)
}

export default Investor