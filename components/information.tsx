import { FC } from "react";
import Button from './button'
import Image from 'next/image'

type Props = {
	left: boolean
}

const Information: FC<Props> = ({ left }) => {
	return (
		<div className="font-poppins text-white w-full h-screen flex justify-start items-center">			
			{left && 
				<div className="left w-full h-screen flex">
					<div className="w-1/2 h-full flex justify-start items-center">
						<div className="w-full mx-16 space-y-8">
							<h1 className="text-5xl font-bold w-ful">
								Creative work shows <br />
								us what’s possible. <br />
								Help fund it here.
							</h1>
							<p className="font-poppins text-sm font-light w-3/4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam.
							</p>
							<Button gradient={true}>Start Project</Button>
						</div>
					</div>
					<div className="w-1/2 h-full flex justify-center items-center">
						<div className="relative w-1/2 h-96 mx-16 space-y-8">
							<Image src={'/vercel.svg'} layout='fill'></Image>
						</div>
					</div>
				</div>
			}
			{!left && 
				<div className="left w-full h-screen flex">
					<div className="w-1/2 h-full flex justify-center items-center">
						<div className="relative w-1/2 h-96 mx-16 space-y-8">
							<Image src={'/vercel.svg'} layout='fill'></Image>
						</div>
					</div>
					<div className="w-1/2 h-full flex justify-start items-center">
						<div className="w-full mx-16 space-y-8">
							<h1 className="text-5xl font-bold w-ful">
								Creative work shows <br />
								us what’s possible. <br />
								Help fund it here.
							</h1>
							<p className="font-poppins text-sm font-light w-3/4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
								ad minim veniam.
							</p>
							<Button gradient={true}>Start Project</Button>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default Information