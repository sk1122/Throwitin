import { FC } from "react";
import Leaderboard from '../leaderboard'

type Props = {

}

const Third: FC<Props> = () => {
	return (
		<div className="w-full h-screen bg-gradient flex flex-col justify-center items-center">
			<div className="w-full h-20 flex flex-col justify-center items-center text-center">
				<h1 className="font-poppins text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-semipurple to-brand-lightpink">Leaderboard</h1>
			</div>

			<div className="w-full h-full flex justify-center items-start space-x-5 p-10">
				<Leaderboard title='Top Projects' />
				<Leaderboard title='Top Investors' />
			</div>
		</div>
	)
}

export default Third