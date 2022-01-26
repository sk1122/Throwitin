import SmallCard from "../SmallCard";

type Props = {};

const Investor = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col w-1/2">
        <span className="text-3xl font-bold mb-8">Why invest with us?</span>
        <p className="text-lg max-w-xl mb-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione id
          est molestias porro dolores eos architecto omnis nostrum iusto
          exercitationem suscipit, numquam soluta quisquam! Qui quod nam, totam
          molestias soluta maiores quae odit, veritatis aperiam adipisci, ullam
          sit architecto quibusdam dicta deserunt. Obcaecati cupiditate aliquam
          voluptate harum accusantium inventore eveniet!
        </p>
        <button className="bg-gray-100 py-2 px-4 rounded-md text-black max-w-fit">
          Why invest with us?
        </button>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center px-20 ">
        <div className="w-full h-full relative">
          <div className="absolute top-0 left-36">
            <SmallCard title="Total Amount Raised" />
          </div>
          <div className="absolute top-36 left-80">
            <SmallCard title="Total Projects Funded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
