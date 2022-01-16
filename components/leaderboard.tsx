import { FC } from "react";

type Props = {
	title: string
}

const Leaderboard: FC<Props> = ({ title }) => {
	return (
		<div className="w-1/2 h-2/3 bg-yellow-400 flex flex-col justify-start items-center space-y-5 p-10">
			<h1 className="text-3xl font-bold">{title}</h1>

			<div className="w-full h-full bg-green-100">
				
			</div>
		</div>
	)
}

export default Leaderboard