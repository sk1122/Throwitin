import { FC } from "react";

const ProjectBar: FC = () => {
	return (
		<div className="w-full h-72 flex justify-between">
			<div className="w-1/2 h-full flex justify-start items-center px-16 space-x-5">
				<div className="w-40 h-40 bg-gray-500 rounded-xl shrink-0"></div>
				<div className="flex flex-col justify-center items-start space-y-2">
					<h1 className="font-clash text-4xl font-bold">Project Name</h1>		
					<p className="w-4/5">Short summary - Write a clear, brief title and subtitle to help people quickly understand your project. Both will appear on your project and pre-launch pages.</p>
				</div>
			</div>
			<div className="w-1/2 h-full flex flex-col justify-center items-end px-16">
				<h2 className="text-xl">throwitin.xyz</h2>
				<div className="space-x-5 text-xl text-white">
					<a href="https://twitter.com/sk1122_" target='_blank'>
						<i className="fab fa-twitter"></i>
					</a>
					<a href="https://github.com/sk1122" target='_blank'>
						<i className="fab fa-github"></i>
					</a>
					<a href="https://linkedin.com/in/satyam-kulkarni" target='_blank'>
						<i className="fab fa-linkedin"></i>
					</a>
					<a href="https://medium.com/satyam-kulkarni" target='_blank'>
						<i className="fab fa-medium"></i>
					</a>
					<a href="https://www.youtube.com/channel/UCRaIw4VcaKrxOCo2CaFHdyw" target='_blank'>
						<i className="fab fa-youtube"></i>
					</a>
					<a href="" target='_blank'>
						<i className="fab fa-discord"></i>
					</a>
				</div>
			</div>
		</div>
	)
}

export default ProjectBar