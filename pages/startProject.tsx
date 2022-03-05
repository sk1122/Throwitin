import { useState } from "react";

import { useForm, Controller } from "react-hook-form";

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
import toast from "react-hot-toast";

type Props = {};

const startProject = (props: Props) => {
  const { createProject } = useAccountContext();
  const [formStep, setFormStep] = useState(0);

  const[editorText, setEditorText] = useState('')
  const[images, setImages] = useState<File[]>()
  const[logo, setLogo] = useState<File>()

  const { register, handleSubmit, watch, control } = useForm();

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

  const getSteps = () => {
    return ["Basic", "Finance", "Governance", "Story", "FAQ", "People"];
  };

  const onSubmit = async (data: any) => {
    let project: Project = {} as Project;
    project.fundRaisingDeadline = parseInt((data.project_duration.getTime() / 1000).toFixed(0))
    project.goalAmount = data.funding_amt
    project.title = data.title
    project.uri = ''
    project.desc = editorText
    project.category = data.category
    project.twitter = data.twitter
    project.discord = data.discord
    project.tagline = data.tagline
    project.video = data.video
    project.url = data.url
    project.multiple_images = images as File[]
    project.logo = logo
    console.log(project, editorText)
    let promise = createProject(project);
    toast.promise(promise, 
			{
				loading: 'Loading',
				success: (data) => `Successfully Created`,
				error: (err) => `This just happened: ${err.message}`,
			  },
			  {
				style: {
				  minWidth: '250px',
				},
				success: {
				  duration: 5000,
				  icon: '🔥',
				},
			  }
		);
    console.log(data);
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <BasicInfo
            register={register}
            control={control}
            Controller={Controller}
            setLogo={setLogo}
            setImages={setImages}
          />
        );
      case 1:
        return <Finance register={register} />;
      case 2:
        return <Governance register={register} />;
      case 3:
        return <Story setEditorText={setEditorText} />;
      case 4:
        return <Faq />;
      case 5:
        return <People register={register} />;
    }
  };

  const handleNext = () => {
    setFormStep((cur) => cur + 1);
  };

  const handleBack = () => {
    setFormStep((cur) => cur - 1);
  };

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
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          {getStepContent(formStep)}

          {/* next page button */}
          {formStep === 5 ? (
            <div className="w-full flex justify-between">
              <button
                className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer"
                onClick={handleBack}
                type="button"
              >
                Back: {getSteps()[formStep - 1]}
              </button>
              <button
                className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer"
                type="submit"
              >
                Submit
              </button>
            </div>
          ) : (
            <>
              {formStep === 0 ? (
                <div className="w-full flex justify-end">
                  {/* back */}
                  {formStep !== 0 && (
                    <button
                      className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer"
                      onClick={handleBack}
                      type="button"
                      disabled={formStep === 0}
                    >
                      Back: {getSteps()[formStep - 1]}
                    </button>
                  )}

                  {/* next */}
                  <button
                    className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer"
                    onClick={handleNext}
                    type="button"
                  >
                    Next: {getSteps()[formStep + 1].toString()}
                  </button>
                </div>
              ) : (
                <div className="w-full flex justify-between">
                  {/* back */}
                  {
                    <button
                      className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer"
                      onClick={handleBack}
                      type="button"
                      disabled={formStep === 0}
                    >
                      Back: {getSteps()[formStep - 1]}
                    </button>
                  }

                  {/* next */}
                  <button
                    className="bg-white px-6 py-2 text-black font-semibold rounded cursor-pointer"
                    onClick={handleNext}
                    type="button"
                  >
                    Next: {getSteps()[formStep + 1].toString()}
                  </button>
                </div>
              )}
            </>
          )}
        </form>
        {/* uncomment string below to see the result on the page */}
        <pre>{JSON.stringify(watch(), null, 2)}</pre> 
      </div>
      <Footer />
    </>
  );
};

export default startProject;
