import "../css/Home.css";
import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";
function Home() {
  // border-color: rgb(1, 10, 34);
  // box-shadow: 5px 5px 30px 15px rgba(12, 81, 170, 0.25),
  //   -5px -5px 30px 15px rgba(12, 81, 170, 0.25);
  return (
    <div className="home">
      <div className="content">
        <p>
          <span style={{ color: "rgb(1, 10, 34)" }}>Hi</span>
          <span style={{ color: "rgb(11, 146, 184)" }}>There!</span>
        </p>
        <h1>
          <span style={{ color: "rgb(1, 10, 34)" }}>I'm Vishal Kumar</span>
          <span style={{ color: "rgb(11, 146, 184)" }}>Singh</span>
        </h1>
        <p>
          <span style={{ color: "rgb(1, 10, 34)" }}>(Software Devloper </span>
          <span style={{ color: "rgb(11,146,184)" }}>Enthusiast)</span>
        </p>
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
