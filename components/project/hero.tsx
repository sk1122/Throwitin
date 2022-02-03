import { FC } from "react";
import Button from "../button";

const Hero: FC = () => {
	return (
		<div className="w-full h-[34rem] flex justify-start items-center px-16 space-x-10">
			<div className="relative w-2/3 flex justify-center items-center h-full">
				<div className="w-full h-full bg-gray-600 shrink-0"></div>
				<i className="absolute left-5 top-1/2 translate -transform-x-1/2 text-3xl fas fa-arrow-circle-left"></i>
				<i className="absolute top-1/2 translate -transform-x-1/2 right-5 text-3xl fas fa-arrow-circle-right"></i>
			</div>
			<div className="w-1/3 h-full flex flex-col justify-start items-start space-y-5">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">500000 USDC Raised</h1>
					<p className="text-sm font-light">1000000 USDC Pledged</p>
				</div>
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">1234</h1>
					<p className="text-sm font-light">Backers</p>
				</div>
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">12</h1>
					<p className="text-sm font-light">Days to go</p>
				</div>
				<div className="w-full bg-gray-200 h-2 rounded-xl">
					<div className="bg-green-600 h-2 rounded-xl w-[55%]"></div>
				</div>
				<div className="flex flex-col w-full pt-4 space-y-5">
					<label htmlFor="amount">Amount (USDC)</label>
					<input type="text" name="amount" className="w-full h-14 bg-transparent border border-white px-8 py-1" placeholder="300" />
					<div className='bg-gradient-to-r text-white from-brand-heropink via-brand-lightpurple to-brand-lightblue font-poppins flex justify-center items-center w-full h-12 rounded-lg cursor-pointer'>
						Fund
					</div>
					<p className="text-gray-500 text-sm">All or nothing. This project will only be funded if it reaches its goal by Monday, 30 January  7:30 AM </p>
				</div>
			</div>
		</div>
	)
}

export default Hero