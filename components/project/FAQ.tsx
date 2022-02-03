import { FC, useState } from "react";

const FAQ: FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer w-full h-28 bg-white text-black flex justify-center items-center">
				<div className="w-full h-full flex justify-between">
					<div className="px-10 flex justify-center items-center">
						<h1 className="text-2xl font-bold">New to Throwitin?</h1>
					</div>
					<div className="px-10 flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
							<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
						</svg>
					</div>
				</div>
			</div>
				<div className={(isOpen ? '' : 'hidden ') + "w-full h-full bg-yellow-300"}>dsadsadsasa</div>
		</>
	)
}

export default FAQ