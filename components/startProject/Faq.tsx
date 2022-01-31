import { useState } from "react";

type Props = {};

const Faq = (props: Props) => {
  const [faq, setFaq] = useState([
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ]);

  const addFaq = () => {};
  return (
    <>
      <div className="w-full flex flex-col">
        {/* single-question */}
        {faq.map((item) => (
          <div className="mx-[160px] border border-gray-300 rounded mb-10">
            {/* question */}
            <div className="border-b border-gray-300 px-10 py-5">
              {item.question}
            </div>
            {/* answer */}
            <div className="px-10 py-5">{item.answer}</div>
          </div>
        ))}

        {/* Add button */}
        <div className="mx-[160px] flex justify-end items-center pb-16">
          <button
            className="px-6 py-2 bg-black cursor-pointer rounded"
            onClick={addFaq}>
            Add new question +
          </button>
        </div>
      </div>

      {/* bottom navigation */}
      <div className="flex justify-between items-center w-full">
        <div className="cursor-pointer select-none">Back: Story</div>
        <button className="bg-white px-6 py-2 text-brand-dark font-semibold rounded cursor-pointer">
          Next: People
        </button>
      </div>
    </>
  );
};

export default Faq;