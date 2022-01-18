const Bar = () => {
	return (
		<div className="w-full h-36 text-white flex justify-center items-center">
			<div className="w-1/2 h-full flex justify-start items-center px-16">
				<h1 className="font-bold text-4xl">Explore all Projects</h1>
			</div>
			<div className="font-poppins font-light w-1/2 h-full flex justify-end items-center px-16">
				<div className="relative bg-transparent w-8/12 h-10">
					<input type="text" placeholder="Project Name, Category and Ids" className="w-full h-full rounded-md text-lg p-3 bg-brand-dark border border-white" />
					<svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1 right-2 h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
					</svg>
				</div>
			</div>
		</div>
	)
}

export default Bar