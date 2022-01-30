import "./project.css";

const Project = ({ project }) => {
  return (
    <div className="project">
      <div className="project-left">
        <div className="project-title">{project.title}</div>
        <div className="project-tag">{project.tag}</div>
        <div className="project-logo-wrapper">
          <a
            style={{ backgroundColor: "white" }}
            href={project?.url}
            target="_blank"
            rel="noreferrer"
          >
            <img src={project.logo} alt="" className="project-logo" />
          </a>
        </div>
        {project?.url && (
          <a
            className="project-demo"
            href={project?.url}
            target="_blank"
            rel="noreferrer"
          >
            Demo
          </a>
        )}
      </div>
      <div className="project-middle">
        {project.techs.map((tech, index) => (
          <div className="project-tech" key={index}>
            #{tech}
          </div>
        ))}
      </div>
      <div className="project-right">
        <ul className="project-duty-list">
          {project.duties.map((duty) => (
            <li key={duty}>{duty}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
