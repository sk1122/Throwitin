import { FC } from "react";

const Proposal: FC = () => {
	return (
		<div className="w-full h-full bg-brand-dark rounded-xl p-8">
			<div className="space-y-4 border-b-2 pb-5">
				<h1 className="font-bold text-lg">Name of the Project</h1>
				<h1 className="font-normal text-lg">Proposal Title</h1>
				<p className="font-light text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu tempor incididu.....</p>
			</div>
			<div className="flex justify-center items-center pt-3 -mb-5 cursor-pointer">
				vote
			</div>
		</div>
	)
}

export default Proposal