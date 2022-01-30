import "./projects.css";
import Project from "./Project";
import data from "../../project/data";

const Projects = () => {
  return (
    <div>
      <div className="projects">
        <div className="projects-texts">
          <div className="projects-title">Learn 	&#38; Build </div>

          <p className="projects-description">
            Projects that I am most proud of and want to share.
          </p>
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
