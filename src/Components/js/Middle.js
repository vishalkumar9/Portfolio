import Home from "../js/Home";
import About from "../js/About";
import Achievements from "../js/Achievements";
import Project from "../js/Project";
import Skill from "../js/Skill";
import Resume from "../js/Resume";
import "../css/Middle.css";
function Middle() {
  return (
    <>
      <div id="Home" className="section">
        <Home />
      </div>
      <div id="About" className="section">
        <About />
      </div>
      <div id="Project" className="section">
        <Project />
      </div>
      <div id="Skill" className="section">
        <Skill />
      </div>
      <div id="Acheivements" className="section">
        <Achievements />
      </div>
      <div id="Resume" className="section">
        <Resume />
      </div>
    </>
  );
}
export default Middle;
