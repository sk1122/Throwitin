import { FC } from "react";
import Leaderboard from '../leaderboard'


const testArray = [
	{
		rank: 1,
		projectName: "Project #1",
		fundRaised: 100
	},
	{
		rank: 2,
		projectName: "Project #1",
		fundRaised: 200
	},
	{
		rank: 2,
		projectName: "Project #1",
		fundRaised: 200
	},
	{
		rank: 2,
		projectName: "Project #1",
		fundRaised: 200
	},
	{
		rank: 2,
		projectName: "Project #1",
		fundRaised: 200
	}
]

type Props = {

}

const Third: FC<Props> = () => {
	return (
		<div className="w-full h-screen bg-gradient flex flex-col justify-center items-center">
			<div className="w-full h-1/4 flex flex-col justify-center items-center text-center">
				<h1 className="font-poppins text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-semipurple to-brand-lightpink">Leaderboard</h1>
			</div>

			<div className="w-full h-full flex justify-center items-start space-x-5 p-10">
				<Leaderboard title='Top Projects' testArray={testArray}/>
				<Leaderboard title='Top Investors' testArray={testArray}/>
			</div>
		</div>
	)
}

export default Third