// import Home from "./Home";
// import About from "./About";
// import Achievements from "./Achievements";
// import Project from "./Project";
// import Skill from "./Skill";
// import Resume from "./Resume";
import { Link } from "react-scroll";
import "../css/Nav.css";

function Nav() {
  return (
    <div className="nav-link">
      <div className="port">
        <h1>
          <Link activeClass="active" to="Home" spy={true} smooth={true}>
            <span style={{ color: "rgb(1, 10, 34)" }}>PORT</span>
            <span style={{ color: "rgb(11, 146, 184)" }}>FOLIO</span>
          </Link>
        </h1>
      </div>
      <div className="dropdown">
        <div className="dropbtn">
          <h1>
            <span style={{ color: "rgb(1, 10, 34)" }}>MEN</span>
            <span style={{ color: "rgb(11, 146, 184)" }}>U</span>
          </h1>
        </div>
        <div class="dropdown-content">
          <Link to="About" spy={true} smooth={true}>
            About
          </Link>
          <Link to="Project" spy={true} smooth={true}>
            Project
          </Link>
          <Link to="Skill" spy={true} smooth={true}>
            Skill
          </Link>
          <Link to="Acheivements" spy={true} smooth={true}>
            Achievements
          </Link>
          <Link to="Resume" spy={true} smooth={true}>
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
