import { FC, useState } from "react";

import Navbar from "../components/Navbar";
import Grid from "../components/dash/grid";

const Dash: FC = () => {
	const [componentToLoad, setComponentToLoad] = useState(false);

	const handleClick = (isTrue: boolean) => {
		console.log(isTrue);
		if (isTrue === componentToLoad) {
			setComponentToLoad(isTrue);
		} else {
			setComponentToLoad(!componentToLoad);
		}
	};
	
	return (
		<div className="w-full min-h-screen bg-black">
			<Navbar />
			<div className="w-full flex justify-between px-16 mt-10">
				<div></div>
				<div className="bg-gray-100 text-black px-1 py-1 rounded-xl flex items-center">
					<button
						className={(componentToLoad ? 'bg-gray-900 text-white ' : '') + "py-2 rounded-xl px-3 cursor-pointer"}
						onClick={() => handleClick(true)}
					>
						Investors
					</button>
					<button
						className={(componentToLoad ? '' : 'bg-gray-900 text-white ') + "py-2 rounded-xl px-3 cursor-pointer"}
						onClick={() => handleClick(false)}>
						Owners
					</button>
				</div>
			</div>
			<Grid />
		</div>	
	)
}

export default Dash