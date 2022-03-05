import { FC, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import Navbar from "../../components/Navbar";
import ProjectBar from "../../components/project/projectBar";
import Hero from "../../components/project/hero";
import Campaign from "../../components/project/campaign";
import Fifth from "../../components/home/fifth";
import Footer from "../../components/Footer";
import Proposal from "../../components/project/proposal";
import FAQ from "../../components/project/FAQ";
import Button from "../../components/button";
import { useAccountContext } from "../_context";
import { BigNumber, BigNumberish, ethers } from "ethers";

interface Props {
	id: string;
}

interface Project {
	title: string;
	summary: string;
	website: string;
	links: string[];
	projectId: any;
	noOfContributors: any;
	deadline: any;
	creator: string;
	amountGoal: any;
	NFTaddress: string;
	currentBalance: any;
}

export async function getServerSideProps(context: any) {
	const id = context.params.id;

	return {
		props: {
			id: id,
		},
	};
}

const SingleProject = ({ id }: Props) => {
	const [projects, setProjects] = useState([1]);
	const [project, setProject] = useState<any[]>();
	const [section, setSection] = useState("campaign");
	const [proposals, setProposals] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [images, setImages] = useState<string[]>([])
	const [logo, setLogo] = useState<string>('')
	const { query } = useRouter();

	const { getDetails, getAllProposals, getImages, getImage } = useAccountContext();

	useEffect(() => {
		(async () => {
			setLoading(true)
			setProject(await getDetails(id))
			setLoading(false)
			console.log('yo', await getDetails(id))
		})();
	}, []);
	
	useEffect(() => {
		(async () => {
			if(section == 'proposals') {
				setProposals(await getAllProposals(id))
				console.log('yo')
			}
		})();
	}, [section]);

	useEffect(() => {
		(async () => {
			setImages(await getImages(id.toString()))
			console.log(id.toString())
			setLogo(await getImage(id.toString(), 'logo'))
		})()
	}, [])

	useEffect(() => console.log(project), [project])

	return (
		<div className="font-poppins bg-black flex flex-col items-center justify-start min-h-screen text-white">
			<Head>
				{project && 
					<>
						{project[0] && <title>{project[0].title}</title>}
						{!project[0] && <title>Project - throwitin</title>}
					</>
				}
			</Head>
			<Navbar></Navbar>
			{!project && 
				<div className="w-full">
					<div className="z-100 flex justify-center items-center">
						<svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
							<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg> 
					</div>
				</div>
			}
				<div className="w-full">
					{!loading && project && project[0] && project[1] &&
						<ProjectBar logo={logo} images={images} title={project[0].title as string} summary={project[1].tagline} url={project[1].url} twitter={project[1].twitter} discord={project[1].discord} video={project[1].video}></ProjectBar>
					}
					{(!loading && project && project[0] && !project[1]) ?
						<ProjectBar logo={logo} images={images} title={project[0].title as string} summary={''} url={''} twitter={''} discord={''} video={''}></ProjectBar>
						:
						<></>
					}
					{!loading && project && project[0] &&
						<Hero
							images={images}
							raised={
								ethers.utils.formatUnits(project[0].currentBalance, 6)
							}
							id={
								project[0].projectId.toNumber()
							}
							contributors={
								project[0].noOfContributors.toNumber()
							}
							deadline={
								new Date(project[0].deadline.toNumber() * 1000).toDateString()
							}
							creator={project[0].creator as string}
							goal={
								ethers.utils.formatUnits(project[0].amountGoal, 6)
							}
							nft={project[0].NFTaddress as string}
						></Hero>
					}
				</div>
			<div className="w-full h-full px-16 mt-36 space-y-5">
				<div className="flex justify-start items-center w-full h-full space-x-5">
					<div
						onClick={() => setSection("campaign")}
						className={
							(section == "campaign"
								? "bg-white/10 border-b-4 border-b-white"
								: "") +
							"cursor-pointer px-4 py-5 text-xl flex justify-center items-center font-light"
						}
					>
						Campaign
					</div>
					<div
						onClick={() => setSection("proposals")}
						className={
							(section == "proposals"
								? "bg-white/10 border-b-4 border-b-white"
								: "") +
							"cursor-pointer px-4 py-5 text-xl flex justify-center items-center font-light"
						}
					>
						Proposals
					</div>
					<div
						onClick={() => setSection("faq")}
						className={
							(section == "faq"
								? "bg-white/10 border-b-4 border-b-white"
								: "") +
							"cursor-pointer px-4 py-5 text-xl flex justify-center items-center font-light"
						}
					>
						FAQ
					</div>
				</div>
				{project && project[1] && section === "campaign" && <Campaign desc={project[1].desc} />}
				{section === "proposals" && (
					<div className="w-full h-full space-y-5">
						<div className="w-full flex justify-between">
							<div></div>
							<div className="flex space-x-3">
								<h2 className="cursor-pointer border-b-2 border-b-white">
									Active
								</h2>
								<h2 className="cursor-pointer">Accepted</h2>
								<h2 className="cursor-pointer">Rejected</h2>
							</div>
						</div>
						{console.log(proposals)}
						{project && project[0] && proposals.map((value: any) => (
							<Proposal description={value.desc} address={value.receipient} yes={value.agreeVotes.toNumber()} no={value.disagreeVotes.toNumber()} value={ethers.utils.formatUnits(value.value, 6)} id={project[0].projectId.toNumber()} proposalId={value.requestId.toNumber()} />
						))}
					</div>
				)}
				{section === "faq" && (
					<div className="w-full h-full space-x-5 flex justify-between">
						<div className="w-2/3 h-full flex flex-col justify-start items-start space-y-5">
							<FAQ />
							<FAQ />
							<FAQ />
							<FAQ />
							<FAQ />
							<FAQ />
							<FAQ />
							<FAQ />
						</div>
						<div className="w-1/3 h-full px-16 flex flex-col justify-start items-start border-l-8 border-white space-y-5">
							<h1 className="w-11/12 text-3xl font-light">
								Don't see the answer to your question? Ask the
								project creator directly.
							</h1>
							<div className="px-5 py-4 bg-white text-black rounded-xl cursor-pointer">
								Ask a Question
							</div>
						</div>
					</div>
				)}
			</div>
			<Fifth></Fifth>
			<Footer></Footer>
		</div>
	);
};

export default SingleProject;
