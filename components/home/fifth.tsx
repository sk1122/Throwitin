import { useRef, useState, useEffect, Ref } from "react";
import Project from "../project";

const Fifth = () => {
	const slider: Ref<HTMLHeadingElement> = useRef<HTMLHeadingElement>(null);

	const handleOnNextClick = () => {
		slider.current.scrollLeft += 280
	};

    const handleOnPrevClick = () => {
		slider.current.scrollLeft -= 280
	};

	return (
		<div className="relative w-full h-screen bg-black">
			<div className="w-full h-1/6 flex flex-col justify-center items-start">
				<div className="mx-16 space-y-3 mt-16">
					<h1 className="font-poppins text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-semipurple to-brand-lightpink">Successfully Funded Projects</h1>
					<p className="font-poppins font-normal text-sm text-white">Projects that have successfully met their funding goal on throwitin.</p>
				</div>
			</div>
			<div ref={slider} className="w-11/12 h-5/6 mt-20 flex justify-start items-start space-x-5 ml-16 overflow-x-scroll no-scrollbar scroll-smooth">
				<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
				<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
				<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
				<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
				<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
				<Project title='Project Name' description='Yo' status='Yo' verified={false} raised='200'></Project>
			</div>
			<div className="absolute bottom-10 right-36 flex space-x-16">
				<svg onClick={handleOnPrevClick} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white text-md cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
				</svg>
				<svg onClick={handleOnNextClick} xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
				</svg>
			</div>
		</div>
	)
}

export default Fifth;