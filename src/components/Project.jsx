import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function Project({task}) {
  return (
    <div>
      <img src={task.image} alt={task.title} />
      <a href={task.link} target="_blank">
        <h2>{task.title}</h2>
      </a>
      <a href={task.archive} target="_blank">
      <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </div>
  )
}