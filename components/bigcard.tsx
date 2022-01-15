import { FC } from "react";

const BigCard = () => {
	return (
		<div className="w-3/4 h-card bigcard text-white flex flex-col justify-start items-start space-y-40 px-10 py-16">
			<h1 className="text-5xl text-gray-700 font-extrabold">01.</h1>
			<div className="space-y-8">
				<h2 className="text-3xl font-bold">Lorem ipsum dolor sit amet</h2>
				<p className="text-xl leading-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		</div>
	)
}

export default BigCard