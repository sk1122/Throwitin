import React from "react";

type Props = {
  register: any;
};

const Finance = ({ register }: Props) => {
  return (
    <>
      {/* section 1 */}
      <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 mb-16">
        <div className="w-full">
          <div className="font-semibold text-xl mb-4">Funding Goal</div>
          <p className="text-sm md:w-7/12">
            Set an achievable goal that covers what you need to complete your
            project.
            <br />
            Funding is all-or-nothing. If you don’t meet your goal, you won’t
            receive any money.
          </p>
        </div>
        <div className="w-full flex items-center flex-col">
          <div className="md:w-3/5">
            <label htmlFor="goal_amount" className="font-semibold">
              Goal Amount
            </label>
            <div className="flex border border-white rounded w-full mt-3">
              <div className="text-black bg-white px-4 py-2 text-sm select-none">
                USDC
              </div>
              <input
                type="number"
                className="bg-transparent w-full px-2 border-none outline-none"
                {...register("funding_amt")}
              />
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="w-full flex mb-16 flex-col md:flex-row space-y-4 md:space-y-0">
        <div className="w-full">
          <div className="font-semibold text-xl mb-4">Funding Goal</div>
          <p className="text-sm md:w-7/12">
            Set an achievable goal that covers what you need to complete your
            project.
            <br />
            Funding is all-or-nothing. If you don’t meet your goal, you won’t
            receive any money.
          </p>
        </div>
        <div className="w-full flex items-center flex-col">
          <div className="md:w-3/5">
            <label htmlFor="goal_amount" className="font-semibold">
              Why you need funding for ?
            </label>
            <div className="flex border border-white rounded w-full mt-3">
              <input
                type="text"
                className="bg-transparent w-full px-2  py-2 border-none outline-none"
                {...register("funding_reason")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
