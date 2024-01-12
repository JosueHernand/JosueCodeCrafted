import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Project({task}) {
  return (
    <div className="project-container ">
        <img src={task.image} alt={task.title} className="img-fluid image-curve mb-2" />
        <div className="overlay-text">
          <a href={task.link} target="_blank">
            <h2 className="project-title">{task.title}</h2>
          </a>
          <a href={task.archive} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" className="projectColor-Icon" />
          </a>
        </div>
    </div>
  )
}