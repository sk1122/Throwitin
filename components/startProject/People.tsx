import React from "react";

type Props = {};

const commonClasses = {
  commonLabel: "font-semibold mb-3",
  commonInput: "bg-transparent border border-white py-2 px-2 mb-4 rounded",
};

const People = (props: Props) => {
  return (
    <>
      {/* section 1 */}
      <div className="flex w-full mb-16">
        {/* left side */}
        <div className="w-full">
          <div className="font-semibold text-xl mb-4">Project Creator</div>
          <p className="text-sm w-7/12">
            Set an achievable goal that covers what you need to complete your
            project.
            <br />
            <br />
            Funding is all-or-nothing. If you don’t meet your goal, you won’t
            receive any money.
          </p>
        </div>
        {/* right side */}
        <div className="w-full flex flex-col">
          {/* name */}
          <label htmlFor="name" className={`${commonClasses.commonLabel}`}>
            Name
          </label>
          <input type="text" className={`${commonClasses.commonInput}`} />
          {/* twitter */}
          <label htmlFor="twitter" className={`${commonClasses.commonLabel}`}>
            Twitter
          </label>
          <input type="text" className={`${commonClasses.commonInput}`} />
          {/* LinkedIn */}
          <label htmlFor="linkedin" className={`${commonClasses.commonLabel}`}>
            LinkedIn
          </label>
          <input type="text" className={`${commonClasses.commonInput}`} />
        </div>
      </div>
      {/* section 2 */}
      <div className="w-full flex mb-10">
        {/* left side */}
        <div className="w-full">
          <div className="font-semibold text-xl mb-4">Team</div>
          <p className="text-sm w-7/12">
            If you're working with others, you can grant them permission to edit
            this project, communicate with backers, and coordinate reward
            fulfillment
          </p>
        </div>
        {/* right side */}
        <div className="w-full flex flex-col">
          <label
            htmlFor="team-member-name"
            className={`${commonClasses.commonLabel}`}>
            Name
          </label>
          <input type="text" className={`${commonClasses.commonInput}`} />
          <div className="flex space-x-8 justify-center items-center">
            <div className="flex flex-col w-full">
              <label
                htmlFor="team-member-twitter"
                className={`${commonClasses.commonLabel}`}>
                Twitter
              </label>
              <input type="text" className={`${commonClasses.commonInput}`} />
            </div>
            <div className="flex flex-col w-full">
              <label
                htmlFor="team-member-twitter"
                className={`${commonClasses.commonLabel}`}>
                LinkedIn
              </label>
              <input type="text" className={`${commonClasses.commonInput}`} />
            </div>
          </div>
        </div>
      </div>

      {/* Add button */}
      <div className="w-full flex justify-end mb-16">
        <button className="px-6 py-2 bg-black cursor-pointer rounded">
          Add team Member +
        </button>
      </div>

      {/* bottom navigation */}
      <div className="flex justify-between items-center w-full">
        <div className="cursor-pointer select-none">Back: FAQ</div>
        <button className="bg-white px-6 py-2 text-brand-dark font-semibold rounded cursor-pointer">
          Submit for review
        </button>
      </div>
    </>
  );
};

export default People;
