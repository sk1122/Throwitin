import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Finance,
  BasicInfo,
  Governance,
  Faq,
  People,
  Story,
} from "../components/startProject";
import { useAccountContext } from "./_context";
import { Project } from "../types/project";

type Props = {};

const startProject = (props: Props) => {
  const { createProject } = useAccountContext()
  const [formStep, setFormStep] = useState(0);

  const PageHeadings = [
    {
      title: "Start with Basics",
      subtitle: "Make it easy for people to learn about your project",
    },
    {
      title: "Let's talk about money",
      subtitle: "Plan and manage your project finances",
    },
    { title: "Governance", subtitle: "Plan and manage your project finances" },
    {
      title: "Introduce your Project",
      subtitle:
        "Tell people why they should be excited about your project. Be clear and brief",
    },
    {
      title: "Frequently asked questions",
      subtitle: "Prepare answers to some common questions beforehand",
    },
    {
      title: "Introduce yourself & your team",
      subtitle:
        "Give backers an ideas of who you are & add collaborators if you work with a team",
    },
  ];

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const submit = async () => {
    // let project: Project = {}
    // createProject()
    console.log(formStep)
  }

  return (
    <>
      <Navbar />
      <div className="">
        <ul className="flex items-center justify-evenly bg-brand-dark text-white py-10">
          {["Basics", "Finance", "Governance", "Story", "FAQ", "People"].map(
            (item, idx) =>
              idx === formStep ? (
                <li className="cursor-pointer font-semibold border-b-2 border-white">
                  {item}
                </li>
              ) : (
                <li className="cursor-pointer font-semibold">{item}</li>
              )
          )}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-3xl font-bold mb-2 font-clash">
          {PageHeadings[formStep].title}
        </div>
        <div>{PageHeadings[formStep].subtitle}</div>
      </div>
      <div className="text-white flex flex-col items-start justify-center px-16 py-16 bg-brand-dark">
        {/* form components goes here */}
        <form className="w-full">
          {formStep === 0 && <BasicInfo />}
          {formStep === 1 && <Finance />}
          {formStep === 2 && <Governance />}
          {formStep === 3 && <Story />}
          {formStep === 4 && <Faq />}
          {formStep === 5 && <People />}

          {/* next page button */}
          {formStep > 4 ? (
            <div className="w-full flex justify-end">
              <button 
                onClick={() => submit()}
                className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer"
                type="button">
                Submit
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-end">
              <button
                className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer"
                onClick={completeFormStep}
                type="button">
                Next: Finance
              </button>
            </div>
          )}
          {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </form>
      </div>

      <Footer />
    </>
  );
};

export default startProject;
