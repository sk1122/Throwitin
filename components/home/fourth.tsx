import { FC } from "react"
import BigCard from '../bigcard'

type Props = {

}

const Fourth: FC<Props> = () => {
	return (
		<div className="relative w-full h-screen bg-fourth-gradient">
			<div className="w-full h-1/6 flex flex-col justify-center items-center text-center">
				<div className="mx-16 space-y-3 mt-16">
					<h1 className="font-poppins text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-semipurple to-brand-lightpink">Features</h1>
				</div>
			</div>

			<div className="flex justify-center items-center gap-10 px-24 mt-10">
				<BigCard></BigCard>
				<BigCard></BigCard>
				<BigCard></BigCard>
			</div>
		</div>
	)
}

export default Fourth;