import Image from "next/image"
import { FC } from "react"
import Button from './button'
import Link from 'next/link'
import { ethers } from "ethers"

type Props = {
	title: string,
	description: string,
	verified: boolean,
	status: string
	raised: string
	link: string
}

const Project: FC<Props> = ({ title, description, verified, status, raised, link }) => {
	return (
		<Link href={link ? link : ''}>
			<div className="w-96 h-152 bg-brand-cardblue flex flex-col rounded-2xl">
				<div className="relative w-96 h-1/2 rounded-2xl">
					<Image src="https://images.unsplash.com/photo-1642146389720-2561f65902c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=397&q=80" alt="" layout="fill" className="rounded-2xl" />
				</div>
				<div className="w-full h-1/2 flex flex-col justify-start items-start px-6 py-2 space-y-5">
					<div className="text-green-400 flex justify-center items-center space-x-1 mt-3">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" data-name="86977684-12db-4850-8f30-233a7c267d11" viewBox="0 0 2000 2000">
							<path d="M1000 2000c554.17 0 1000-445.83 1000-1000S1554.17 0 1000 0 0 445.83 0 1000s445.83 1000 1000 1000z" fill="#2775ca"/>
							<path d="M1275 1158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83 125-95.83c75 0 116.67 25 137.5 87.5 4.17 12.5 16.67 20.83 29.17 20.83h66.66c16.67 0 29.17-12.5 29.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67 0-29.17 12.5-33.34 33.34v95.83c-125 16.67-204.16 100-204.16 204.17 0 137.5 83.33 191.66 258.33 212.5 116.67 20.83 154.17 45.83 154.17 112.5s-58.34 112.5-137.5 112.5c-108.34 0-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66 0-29.16 12.5-29.16 29.17v4.17c16.66 104.16 83.33 179.16 220.83 200v100c0 16.66 12.5 29.16 33.33 33.33h62.5c16.67 0 29.17-12.5 33.34-33.33v-100c125-20.84 208.33-108.34 208.33-220.84z" fill="#fff"/>
							<path d="M787.5 1595.83c-325-116.66-491.67-479.16-370.83-800 62.5-175 200-308.33 370.83-370.83 16.67-8.33 25-20.83 25-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17 0-12.5 0-16.67 4.16-395.83 125-612.5 545.84-487.5 941.67 75 233.33 254.17 412.5 487.5 487.5 16.67 8.33 33.34 0 37.5-16.67 4.17-4.16 4.17-8.33 4.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17 295.83c-16.67-8.33-33.34 0-37.5 16.67-4.17 4.17-4.17 8.33-4.17 16.67v58.33c0 16.67 12.5 33.33 25 41.67 325 116.66 491.67 479.16 370.83 800-62.5 175-200 308.33-370.83 370.83-16.67 8.33-25 20.83-25 41.67V1700c0 16.67 8.33 29.17 25 33.33 4.17 0 12.5 0 16.67-4.16 395.83-125 612.5-545.84 487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z" fill="#fff"/>
						</svg>
						<p className="font-poppins font-medium text-sm">{ethers.utils.formatUnits(raised, 6)} Raised</p>
					</div>
					<div className="flex space-x-1 justify-center items-center">
						<h1 className="font-poppins text-3xl text-white font-semibold">{title}</h1>
						{status === '2' &&
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
								<path d="M12.5698 22.5801H11.5048L8.99984 20.0001H5.29484L4.49984 19.2501V15.6201L1.96484 13.0401V11.9751L4.49984 9.39506V5.75006L5.29484 5.00006H8.99984L11.5048 2.43506H12.5698L15.1498 5.00006H18.7948L19.5448 5.73506V9.39506L22.1098 11.9751V13.0401L19.4998 15.6201V19.2501L18.7498 20.0001H15.1498L12.5698 22.5801ZM10.0948 16.2201H11.1598L16.8148 10.5651L15.7498 9.50006L10.6348 14.6301L8.56484 12.5601L7.49984 13.6251L10.0948 16.2201Z" fill="#59AFFF"/>
							</svg>
						}
						{status === '`' && 
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
								<path d="M12.5698 22.5801H11.5048L8.99984 20.0001H5.29484L4.49984 19.2501V15.6201L1.96484 13.0401V11.9751L4.49984 9.39506V5.75006L5.29484 5.00006H8.99984L11.5048 2.43506H12.5698L15.1498 5.00006H18.7948L19.5448 5.73506V9.39506L22.1098 11.9751V13.0401L19.4998 15.6201V19.2501L18.7498 20.0001H15.1498L12.5698 22.5801V22.5801ZM10.0948 16.2201H11.1598L16.8148 10.5651L15.7498 9.50006L10.6348 14.6301L8.56484 12.5601L7.49984 13.6251L10.0948 16.2201Z" fill="#939393"/>
							</svg>
						}
					</div>
					<p className="text-white font-poppins font-light text-md leading-7">
						{description}
					</p>			
				</div>
			</div>
		</Link>
	)
}

export default Project;