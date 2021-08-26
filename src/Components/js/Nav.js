import Home from "./Home";
import About from "./About";
import Achievements from "./Achievements";
import Project from "./Project";
import Skill from "./Skill";
import Resume from "./Resume";
import "../css/Nav.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
function Nav() {
  return (
    <Router>
      <div className="nav-link">
        {/* <h2>PORTFOLIO</h2> */}
        <li>
          <Link to="/">
            <h2>PORTFOLIO</h2>
          </Link>
        </li>
        <ul>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <Link to="/Skill">Skill</Link>
          </li>
          <li>
            <Link to="/Achievements">Achievements</Link>
          </li>
          <li>
            <Link to="/Resume">Resume</Link>
          </li>
        </ul>
      </div>
      {/* <div className="content"> */}
      <Switch>
        <Route exact path="/Project" component={Project}></Route>
        <Route exact path="/Skill" component={Skill}></Route>
        <Route exact path="/Achievements" component={Achievements}></Route>
        <Route exact path="/Resume" component={Resume}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/" component={Home}></Route>
      </Switch>

      {/* </div> */}
    </Router>
  );
}

export default Nav;
