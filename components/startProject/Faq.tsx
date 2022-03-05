import { useState } from "react";

type Props = {
  register?: any;
};

const Faq = ({ register }: Props) => {
  const [faq, setFaq] = useState([
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna",
    },
  ]);

  const addFaq = () => {};

  return (
    <>
      <div className="w-full flex flex-col">
        {/* single-question */}
        {faq.map((item, i) => (
          <div className="lg:mx-[160px] border border-gray-300 rounded mb-10">
            {/* question */}
            <input
              placeholder={item.question}
              className="border-b border-gray-300 px-10 py-5 w-full bg-black"
            />
            {/* answer */}
            <textarea
              className="px-10 py-5 w-full h-40 bg-black"
              placeholder={item.answer}
            ></textarea>
          </div>
        ))}

        {/* Add button */}
        <div className="mx-[160px] flex justify-end items-center pb-16">
          <button
            className="px-6 py-2 bg-black cursor-pointer rounded"
            onClick={addFaq}
          >
            Add new question +
          </button>
        </div>
      </div>
    </>
  );
};

export default Faq;
