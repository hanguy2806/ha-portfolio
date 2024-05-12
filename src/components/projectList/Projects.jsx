import "./projects.css";
import Project from "./Project";
import data from "../../project/data";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Projects = () => {
  const favTech = [
    "React.js",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "SQL",
    ".NET",
    "C#",
    "MS Azure",
    "Agile Methodology",
  ];
  
  return (
    <div>
      <div className="projects">
        <div className="projects-texts">
          <div className="projects-title">Learn 	&#38; Build </div>

          <p className="projects-description">
            Projects that I am most proud of and want to share.
          </p>
          <div className="projects-tech-stack">
          {favTech.map((item) => (
            <div className="tech" key={item}>
               <CheckCircleIcon />&nbsp;<span>{item}</span>
            </div>
          ))}
        </div>
        </div>
        <div className="projects-list">
          {data.map((item) => (
            <Project key={item.id} project={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
