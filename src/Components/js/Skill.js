import "../css/Skill.css";
import js from "../../img/JavaScript.png";
import re from "../../img/React.png";
import ht from "../../img/HTML.png";
import cs from "../../img/CSS.jpg";
import cp from "../../img/C++.png";
import gt from "../../img/Git.png";
import gh from "../../img/Github.jpg";
import li from "../../img/Linux.jpg";
import fb from "../../img/firebase.png";
import nd from "../../img/nodejs.png";
import mdb from "../../img/mongodb.png";
function Skill() {
  return (
    <div className="skill">
      <div class="card 1">
        <img src={re} alt={""} />
      </div>
      <div class="card 2">
        <img src={js} alt={""} />
      </div>
      <div class="card 3">
        <img src={ht} alt={""} />
      </div>
      <div class="card 4">
        <img src={cs} alt={""} />
      </div>
      <div class="card 9">
        <img src={nd} alt={""} />
      </div>
      <div class="card 9">
        <img src={mdb} alt={""} />
      </div>
      <div class="card 5">
        <img src={cp} alt={""} />
      </div>
      <div class="card 6">
        <img src={gt} alt={""} />
      </div>
      <div class="card 7">
        <img src={gh} alt={""} />
      </div>
      <div class="card 8">
        <img src={li} alt={""} />
      </div>
      <div class="card 9">
        <img src={fb} alt={""} />
      </div>
    </div>
  );
}
export default Skill;
