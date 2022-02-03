import { FC } from "react";

const Proposal: FC = () => {
	return (
		<div className="w-full h-full flex flex-col justify-start items-start bg-white rounded-xl text-black p-5">
			<div className="w-full h-20 flex justify-between">
				<div className="flex justify-start items-start space-x-5">
					<div className="flex flex-col justify-center items-start">
						<h1 className="text-xl">Proposal Title</h1>
						<p className="w-24 truncate">0x000000000000000000000000000000000000000000</p>
					</div>
					<div className="px-3 py-1 bg-black text-green-500 rounded-md">Active</div>
				</div>
				<div className="flex h-20 space-x-5">
					<div className="flex space-x-2 cursor-pointer">
						<div className="p-5 h-5 flex justify-center items-center bg-green-500 rounded-xl space-x-2">
							<span>23</span>
							<span>Yes</span>
						</div>
					</div>
					<div className="flex space-x-2 cursor-pointer">
						<div className="p-5 h-5 flex justify-center items-center bg-red-500 rounded-xl space-x-2">
							<span>23</span>
							<span>No</span>
						</div>
					</div>
					<div className="flex space-x-2 cursor-pointer">
						<div className="p-5 h-5 flex justify-center items-center bg-gray-500 rounded-xl space-x-2">
							<span>23</span>
							<span>Pass</span>
						</div>
					</div>
				</div>
			</div>
			<div className="w-11/12">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Felis bibendum ut tristique et egestas. Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor. Nisl nisi scelerisque eu ultrices vitae auctor Nec nam aliquam sem et tortor consequat id porta nibh. Nisl nisi scelerisque eu ultrices vitae auctor
			</div>
		</div>
	)
} 

export default Proposal;