import { FC } from "react";
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';
import Proposal from "../Proposal";
import ProjectDashboard from "../ProjectDashboard";

const data = {
	labels: [
		'Red',
		'Yellow',
		'Green'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		],
		hoverBackgroundColor: [
			'#FF6384',
			'#36A2EB',
			'#FFCE56'
		]
	}],
	options: {
		legend: {
			display: false
		},
		tooltips: {
			callbacks: {
			   label: function(tooltipItem: any) {
					  return tooltipItem.yLabel;
			   }
			}
		}
	}
  };

const Grid: FC = () => {
	return (
		<div className="w-full h-full flex justify-center items-start px-16 space-x-5 mt-10 font-poppins">
			{/* Two Blocks */}
			<div className="w-2/3 flex flex-col w-full space-y-10">
				<div className="w-full h-full flex space-x-5">
					<div className="w-1/2 h-96 flex flex-col space-y-5 justify-center items-center bg-brand-lightdark text-white rounded-xl">
						<h1 className="text-3xl font-bold">Total Amount Invested</h1>
						<h1 className="text-3xl font-bold">30k</h1>
					</div>
					<div className="w-1/2 h-96 flex flex-col justify-start items-center text-white rounded-xl px-8 py-5 bg-brand-lightdark">
						<h1 className="font-bold">Portfolio Composition</h1>
						<div className="w-96 h-20 -m-5">
							<Doughnut
								data={data}
								width={100}
								height={100}
								options={{plugins: {legend: {position: 'right', align: 'center', fullSize: true}}}}
							/>
						</div>
					</div>
				</div>

				<ProjectDashboard></ProjectDashboard>
			</div>
			
			{/* Side Bar */}
			<div className="w-1/3 h-full bg-brand-lightdark text-white rounded-xl px-5 py-10 space-y-10">
				<div className="flex justify-between items-center px-5">
					<h3 className="font-bold text-lg">Proposals</h3>
					<div className="flex space-x-5">
						<p className="font-normal text-md border-b-2 cursor-pointer">Recent</p>
						<p className="font-normal text-md cursor-pointer">All</p>
					</div>
				</div>
				<div className="w-full h-screen overflow-scroll no-scrollbar flex flex-col justify-center items-center px-5 my-10 space-y-5">
					<Proposal></Proposal>
					<Proposal></Proposal>
					<Proposal></Proposal>
					<Proposal></Proposal>
					<Proposal></Proposal>
					<Proposal></Proposal>
				</div>
			</div>
		</div>
	)
}

export default Grid