import "../css/ProjectCard.css";
import { FaGithubSquare } from "react-icons/fa";
function ProjectCard(props) {
  return (
    <div class="projectcard">
      <h1 class="title">{props.title}</h1>
      <img src={props.image} alt={""} style={{ width: "100%" }} />
      <p>{props.method}</p>
      <a href={props.location}>
        <FaGithubSquare />
      </a>
    </div>
  );
}
export default ProjectCard;
