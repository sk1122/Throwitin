import React from "react";
import Editor from '../Editor'

type Props = {};

const Finance = (props: Props) => {
  return (
    <>
		<div className="w-full flex flex-col mb-16">
			<div className="w-1/2 h-48 flex flex-col justify-start items-start space-y-3">
				<h1 className="text-3xl font-bold font-clash">Give your story</h1>
				<p className="text-sm font-light font-poppins w-2/3">Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like.</p>
			</div>
			<Editor></Editor>
		</div>
		{/* bottom navigation */}
		<div className="flex justify-between items-center w-full">
			<div className="cursor-pointer select-none">Back: Basics</div>
			<button className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer">
				Next: Governance
			</button>
		</div>
    </>
  );
};

export default Finance;
