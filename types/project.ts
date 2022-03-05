export interface Project {
  title: string;
  fundRaisingDeadline: number;
  goalAmount: number;
  category: string;
  img: string;
  uri: string;
  desc: string
  databaseID?: number
  creator: string
  location: string
  state: string
  team: string[]
  tagline: string
  url: string
  video: string
  twitter: string
  discord: string
}

export interface Team {
  name: string
  twitter: string
}

export type formFields = {};

// const projectSocials = {
//   websiteURL: "",
//   videoLink: "",
//   projectTwitter: "",
//   projectDiscord: "",
// };

// const projectCreator = {
//   name: "",
//   twitter: "",
//   linkedIn: "",
// };

// const teamMembers = [
//   { name: "", twitter: "", linkedIn: "" },
//   { name: "", twitter: "", linkedIn: "" },
//   { name: "", twitter: "", linkedIn: "" },
// ];

// const initialValues = {
//   title: "",
//   subtitle: "",
//   category: "",
//   profileImage: null,
//   multipleImages: [],
//   projectSocials: projectSocials,
//   campaignDuration: "",
//   fundingAmt: 0,
//   fundingGoal: "",
//   NFTImages: [],
// };

// const [formValues, setFormValues] = useState(initialValues);
