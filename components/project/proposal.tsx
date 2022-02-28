import { useAccountContext } from "../../pages/_context"
import toast from 'react-hot-toast'
import { useAccount } from "wagmi"

interface Props {
	address: string
	description: string
	yes: number
	no: number
	value: string
	id: number
	proposalId: number
}

const Proposal = (props: Props) => {
	const { voteOnProposal, account } = useAccountContext()

	const submit = (vote: boolean) => {
		const promise = voteOnProposal(props.id, props.proposalId, vote)
		toast.promise(promise, 
			{
				loading: 'Loading',
				success: (data) => `Voted ${vote ? 'yes' : 'no'} to ${props.description} for ${props.value}`,
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
		<div className="w-full h-full flex flex-col justify-start items-start bg-white rounded-xl text-black p-5">
			<div className="w-full h-20 flex justify-between">
				<div className="flex justify-start items-start space-x-5">
					<div className="flex flex-col justify-center items-start space-y-3">
						<div className="flex space-x-4">
							<h1 className="text-xl">{props.value} USDC</h1>
							<div className="px-3 py-1 bg-black text-green-500 rounded-md">Active</div>
						</div>
						<p>{props.address}</p>
					</div>
				</div>
				<div className="flex h-20 space-x-5">
					<div className="flex space-x-2 cursor-pointer">
						<div onClick={() => submit(true)} className="p-5 h-5 flex justify-center items-center bg-green-500 rounded-xl space-x-2">
							<span>{props.yes}</span>
							<span>Yes</span>
						</div>
					</div>
					<div className="flex space-x-2 cursor-pointer">
						<div onClick={() => submit(false)} className="p-5 h-5 flex justify-center items-center bg-red-500 rounded-xl space-x-2">
							<span>{props.no}</span>
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
			<div className="w-full flex justify-between">
				<p className="w-11/12">{props.description}</p>
				{props.address === account && 
					<div className="cursor-pointer p-5 w-36 h-5 flex justify-center items-center bg-green-500 rounded-xl space-x-2">Claim</div>
				}
			</div>
		</div>
	)
} 

export default Proposal;