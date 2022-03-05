import { FC } from "react";

type Props = {
	title: string
	summary?: string
	website?: string
	links?: string[]
	id?: string
	contributors?: string
	deadline?: string
	creator?: string
	goal?: string
	nft?: string
	url: string
	twitter: string
	discord: string
	video: string
}

const ProjectBar: FC<Props> = ({ title, summary, url, twitter, discord, video }) => {
	return (
		<div className="w-full h-72 flex justify-between">
			<div className="w-1/2 h-full flex justify-start items-center px-16 space-x-5">
				<div className="w-40 h-40 bg-gray-500 rounded-xl shrink-0"></div>
				<div className="flex flex-col justify-center items-start space-y-2">
					<h1 className="font-clash text-4xl font-bold">{title}</h1>		
					<p className="w-4/5">{summary}</p>
				</div>
			</div>
			<div className="w-1/2 h-full flex flex-col justify-center items-end px-16">
				<h2 className="text-xl">{url}</h2>
				<div className="space-x-5 text-xl text-white">
					<a href={twitter} target='_blank'>
						<i className="fab fa-twitter"></i>
					</a>
					<a href={video} target='_blank'>
						<i className="fab fa-youtube"></i>
					</a>
					<a href={discord} target='_blank'>
						<i className="fab fa-discord"></i>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectBar