import "./projects.css"; 
import Project from "./Project";

const Projects = () => {
    return (<div>
        <div className="projects">
            <div className="project-texts">
                <div className="project-title">Build and Learn</div>
                <p className="project-description">Ha ha ha</p>
            </div>
            <div className="project-list">
                {[1,2,3,4,5].map(item => <Project key={item}/>)}
            </div>
        </div>
    </div>)
}

export default Projects;