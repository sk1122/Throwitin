import { useState } from 'react'

import Bar from '../components/projects/bar'
import Navbar from "../components/Navbar"
import Project from '../components/project'
import Button from '../components/button'
import Footer from '../components/Footer'
import Head from "next/head"

const Projects = () => {

	const [projects, setProjects] = useState([])

	return (
		<div className="font-clash w-full min-h-screen bg-brand-dark">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
				<link href="http://fonts.cdnfonts.com/css/clash-display" rel="stylesheet" />
			</Head>
			<Navbar></Navbar>
			<Bar></Bar>
			<div className="flex flex-col md:flex-row justify-start items-center w-full h-20 space-x-5 px-16 text-white">
				<div className="w-40 h-10 rounded-md flex justify-center items-center space-x-1 border border-white">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
					</svg>
					<h2>Categories</h2>
				</div>
				<div className="w-48 h-10 rounded-md flex justify-center items-center space-x-1 border border-white">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
					</svg>
					<h2>Recently Added</h2>
				</div>
				<div className="w-40 h-10 rounded-md flex justify-center items-center space-x-1 border border-white">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
							<path d="M12.5698 22.5801H11.5048L8.99984 20.0001H5.29484L4.49984 19.2501V15.6201L1.96484 13.0401V11.9751L4.49984 9.39506V5.75006L5.29484 5.00006H8.99984L11.5048 2.43506H12.5698L15.1498 5.00006H18.7948L19.5448 5.73506V9.39506L22.1098 11.9751V13.0401L19.4998 15.6201V19.2501L18.7498 20.0001H15.1498L12.5698 22.5801ZM10.0948 16.2201H11.1598L16.8148 10.5651L15.7498 9.50006L10.6348 14.6301L8.56484 12.5601L7.49984 13.6251L10.0948 16.2201Z" fill="#59AFFF"/>
					</svg>
					<h2>Verified</h2>
				</div>
			</div>
			
			{projects.length === 0 && 
				<div className='w-full h-96 flex justify-start items-center px-16'>
					<div className="text-white w-full bg-white/10 h-full flex justify-center items-center rounded-xl">
						<h1 className='font-clash text-4xl font-bold'>no projects to show!</h1>
					</div>
				</div>
			}
			
			{projects.length !== 0 && 
				<div>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 px-16 pb-16 pt-5 gap-5">
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
						<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
					</div>
					<div className="w-full flex justify-center items-center pt-5 pb-16">
						<Button gradient={true}>Load More</Button>
					</div>
				</div>
			}
			<Footer></Footer>
		</div>
	)
}

export default Projects