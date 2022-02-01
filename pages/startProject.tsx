import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Finance,
  BasicInfo,
  Governance,
  Faq,
  People,
} from "../components/startProject";

type Props = {};

const startProject = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="">
        <ul className="flex items-center justify-evenly bg-brand-dark text-white py-10">
          {["Basics", "Finance", "Governance", "Story", "FAQ", "People"].map(
            (item) => (
              <li className="cursor-pointer font-semibold">{item}</li>
            )
          )}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="text-2xl font-bold mb-2">Start with Basics</div>
        <div>Make it easy for people to learn about your project</div>
      </div>
      <div className="text-white flex flex-col items-start justify-center px-16 py-16 bg-brand-dark">
        {/* form components goes here */}
        <People />
      </div>

      <Footer />
    </>
  );
};

export default startProject;
