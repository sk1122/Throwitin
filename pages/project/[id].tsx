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
	const [project, setProject] = useState<Project>();
	const [section, setSection] = useState("campaign");
	const [proposals, setProposals] = useState<any>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const { query } = useRouter();

	const { getDetails, getAllProposals } = useAccountContext();

	useEffect(() => {
		(async () => {
			setLoading(true)
			setProject(await getDetails(id))
			setLoading(false)
			console.log('yo')
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

	return (
		<div className="font-poppins bg-black flex flex-col items-center justify-start min-h-screen text-white">
			<Head>
				{project?.title && <title>{project.title}</title>}
				{!project?.title && <title>Project - throwwitin</title>}
			</Head>
			<Navbar></Navbar>
			{!loading && 
				<div>
					<ProjectBar title={project?.title as string}></ProjectBar>
					<Hero
						raised={
							ethers.utils.formatUnits(project?.currentBalance, 6)
						}
						id={
							project?.projectId.toNumber()
						}
						contributors={
							project?.noOfContributors.toNumber()
						}
						deadline={
							new Date(project?.deadline.toNumber() * 1000).toDateString()
						}
						creator={project?.creator as string}
						goal={
							ethers.utils.formatUnits(project?.amountGoal.toNumber(), 6)
						}
						nft={project?.NFTaddress as string}
					></Hero>
				</div>
			}
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
				{section === "campaign" && <Campaign />}
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
						{proposals.map((value: any) => (
							<Proposal description={value.desc} address={value.receipient} yes={value.agreeVotes.toNumber()} no={value.disagreeVotes.toNumber()} value={ethers.utils.formatUnits(value.value, 6)} id={project?.projectId.toNumber()} proposalId={value.requestId.toNumber()} />
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
