import { useState } from "react";
import Investor from "./investor";
import Owner from "./owner";

type Props = {};

const Second = (props: Props) => {
  const [componentToLoad, setComponentToLoad] = useState(true);

  const handleClick = (isTrue: boolean) => {
    console.log(isTrue);
    if (isTrue === componentToLoad) {
      setComponentToLoad(isTrue);
    } else {
      setComponentToLoad(!componentToLoad);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-black px-16 text-white justify-center">
      {/* part #1 */}
      <div className="w-full flex justify-between mb-20">
        <span className="text-3xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-brand-lightblue via-brand-purple to-brand-semipink">
          What we have for project owners?
        </span>
        <div className="bg-gray-100 text-black px-1 py-1 rounded-xl flex items-center">
          <button
            className="bg-gray-900 py-2 rounded-xl text-white px-3 cursor-pointer"
            onClick={() => handleClick(true)}>
            Investors
          </button>
          <button
            className="px-2 cursor-pointer"
            onClick={() => handleClick(false)}>
            Owners
          </button>
        </div>
      </div>
      {/* part #2  */}
      {componentToLoad && <Investor />}
      {!componentToLoad && <Owner />}
    </div>
  );
};

export default Second;
