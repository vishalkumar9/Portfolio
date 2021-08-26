import "../css/Achievements.css";
import Certificate from "./Certificate";
import codejam from "../../img/googleCodeJam.PNG";
import kickstart from "../../img/googleKickStart.PNG";
function Achievements() {
  return (
    <div className="achievements">
      <Certificate image={codejam} />
      <Certificate image={kickstart} />
      <div className="static">hi</div>
    </div>
  );
}
export default Achievements;
