import { FC, useState } from "react";
import { useAccountContext } from "../../pages/_context";
import { ImageGallary } from "./ImageGallary";
import toast, { Toaster } from 'react-hot-toast';

type Props = {
	title?: string
	summary?: string
	website?: string
	links?: string[]
	id?: string
	contributors?: string
	deadline?: string
	creator?: string
	goal?: string
	nft?: string
	raised?: string
	images: string[]
}

const Hero: FC<Props> = (props) => {
	const { contribute } = useAccountContext()
	const [amount, setAmount] = useState('')

	const submit = () => {
		const promise = contribute(props.id, amount)
		toast.promise(promise, 
			{
				loading: 'Loading',
				success: (data) => `Successfully Contribute to ${props.title}`,
				error: (err) => `This just happened: ${err.message}`,
			  },
			  {
				style: {
				  minWidth: '250px',
				},
				success: {
				  duration: 5000,
				  icon: '🔥',
				},
			  }
		);
	}

	return (
		<div className="w-full h-[34rem] flex justify-start items-center px-16 space-x-10">
			<div className="relative w-2/3 flex justify-center items-center h-full">
				<ImageGallary images={props.images}></ImageGallary>
			</div>
			<div className="w-1/3 h-full flex flex-col justify-start items-start space-y-5">
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">{props.raised} USDC Raised</h1>
					<p className="text-sm font-light">{props.goal} USDC Pledged</p>
				</div>
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">{props.contributors}</h1>
					<p className="text-sm font-light">Backers</p>
				</div>
				<div className="space-y-2">
					<h1 className="text-4xl font-bold">{props.deadline}</h1>
					<p className="text-sm font-light">Deadline</p>
				</div>
				<div className="w-full bg-gray-200 h-2 rounded-xl">
					{console.log(`20000000000000000000 * ${props.goal}`, 100)}
					<div className={`bg-green-600 h-2 rounded-xl w-[${eval(`20000000000000000000 * ${props.goal}`) % 100}%]`}></div>
				</div>
				<div className="flex flex-col w-full pt-4 space-y-5">
					<label htmlFor="amount">Amount (USDC)</label>
					<input disabled={new Date() > new Date(props.deadline as string)} value={amount} onChange={(e) => setAmount(e.target.value)} type="text" name="amount" className="w-full h-14 bg-transparent border border-white px-8 py-1" placeholder="300" />
					<div onClick={() => submit()} className='bg-gradient-to-r text-white from-brand-heropink via-brand-lightpurple to-brand-lightblue font-poppins flex justify-center items-center w-full h-12 rounded-lg cursor-pointer'>
						Fund
					</div>
					<p className="text-gray-500 text-sm">All or nothing. This project will only be funded if it reaches its goal by {props.deadline}</p>
				</div>
			</div>
		</div>
	)
}

export default Hero