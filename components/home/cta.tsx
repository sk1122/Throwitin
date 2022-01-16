import Button from "../button"

interface Props {
    
}

const Cta = (props: Props) => {
    return (
        <div className="bg-black w-full h-fit py-40 flex items-center justify-center">
            <div className="flex justify-around items-center w-full mx-16 h-fit py-20 bg-green-100 bg-gradient-to-r from-purple-600 via-black to-pink-400 text-white rounded-lg">
                <div className="w-full h-full text-5xl font-bold flex items-center justify-center">
                    Be the first to know about <br/> the new listed projects
                </div>
                <div className="h-full w-full flex items-center">
                    <div className="ml-40 flex flex-col space-y-3">
                    <h3 className="text-xl font-semibold mb-4">For Weekly Updates On All Thing</h3>                    
                    <input type="email" placeholder="Email" className="rounded min-w-[400px] min-w-96 pl-4 py-4 bg-gray-500 opacity-80 border-0 outline-none text-sm"/>
                    <button className="min-w-[400px] bg-gradient-to-r from-brand-lightblue via-brand-semipurple to-brand-semipink rounded py-3 text-sm">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta
