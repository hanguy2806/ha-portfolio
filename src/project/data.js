import Ship from "../img/ship-logo.png";
import Clinic from "../img/clinic-logo.jpeg";
import ImageProcess from "../img/img-process.png";
import DotNet from "../img/dot-net-logo.png";

const data = [
  {
    id: 1,
    title: "Company internal projects",
    tag: "Current work",
    techs: [".Net C#", "SQL", "Vue.js", "MS Azure", "CICD"],
    logo: DotNet,
    duties: [
      "Support and enhance legacy applications utilizing C# .Net.",
      "Engage in the restructuring stages of legacy monolithic applications, transitioning them to the cloud using MS Azure.",
      "Handle urgent customer issues promptly and troubleshoot performance bottlenecks.",      "Refactor code to follow best practice, design pattern, OOP principals",
      "Optimize code by adhering to best practices, implementing design patterns, and upholding OOP principles.",
      "Conduct thorough code reviews to ensure quality and maintainability.",
      "Make sure unit test in place during development process"
    ]
  },
  {
    id: 2,
    title: "Wavez",
    tag: "Co-op placement",
    techs: ["React(Next.js)", "MongoDB", "Express.js", "Node.js", "MUI"],
    logo: Ship,
    duties: [
      "Built UI based on Figma prototype.",
      "Worked with Jira to follow agile methodology",
      "Set up and created Unit test (Jest framework).",
      "Implemented favourite, listing, file upload, signin/signup/forget password, footer,listing detail, validation feature.",
      "Utilized Next.js optimization to improve front end performance (SSR) in term of routing and localization.",
    ],
  },
  {
    id: 3,
    title: "Dicentra",
    tag: "Co-op placement",
    techs: ["React(Next.js)", "MongoDB", "Express", "Node", "MUI"],
    logo: Clinic,
    duties: [
      "Created Login/Signup/Forget Password flow.",
      "Collect user's input to filter participants with specific conditions.",
      "Built stepper form separating questionaire sections to make users easily follow the form.",
      "Made admin panel to dynamically create user's questions which was going show in user's portal.",
      "Integrated Drug Bank service which helped user select existing medication, medical conditions with the help of autocomplete input.",
    ],
  },
  {
    id: 4,
    title: "Brew4You",
    tag: "Team work at school",
    techs: ["React", "MongoDB", "Express", "Node", "Boostrap"],
    logo: "https://brew4you.herokuapp.com/static/media/logo.43b7eca4.png",
    url: "https://brew4you.herokuapp.com/",
    duties: [
      "Implemented email subscription feature to let users receive mail from coffee store system (SendGrid).",
      "Displayed the list of coffee products with proper pagination.",
      "Added order progress page helping users track their orders.",
      "Created add to cart feature.",
    ],
  },
  {
    id: 5,
    title: "Image Process",
    tag: "Individual project at school",
    techs: [
      "AWS S3",
      "ASP.NET C#",
      "DynamoDB",
      "AWS Rekognition",
      "Lambda Function"
    ],
    logo: ImageProcess,
    duties: [
      "Stored images in S3 bucket.",
      "Generated tags of a photo using Rekognition service.",
      "Saved meta data about tags of the most recent uploaded image to DynamoDB table.",
      "Generated thumbnails of the most recent uploaded image and saved in other folder under S3.",
      "Deployed Lambda functions and automated state machine."
    ],
  },
];

export default data;
