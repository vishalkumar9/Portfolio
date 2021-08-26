import "../css/Home.css";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
function Home() {
  return (
    <div className="home">
      <div className="content">
        <p>Hi There!</p>
        <h1>I'm Vishal Kumar Singh</h1>
        <p>(Software Devloper Enthusiast)</p>
      </div>
      <div className="social">
        <a href="https://github.com/vishalkumar9">
          <FaGithubSquare />
        </a>
        <br></br>
        <a href="https://www.instagram.com/vishal_09kumar/">
          <FaInstagramSquare />
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/vishalkumar0912/">
          <FaLinkedin />
        </a>
        <br></br>
        <a href="https://www.facebook.com/vishal.k.129/">
          <FaFacebookSquare />
        </a>
      </div>
    </div>
  );
}
export default Home;
