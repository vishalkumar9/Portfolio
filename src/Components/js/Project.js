import "../css/Project.css";
import WA from "../../img/WA.png";
import CR from "../../img/CR.png";
import DG from "../../img/DG.png";
import SA from "../../img/SA.png";
import PF from "../../img/portfolio.PNG";
import RM from "../../img/RM.png";
import LS from "../../img/LS.png";
import ProjectCard from "./ProjectCard.js";

function Project() {
  const ProjectData = [
    {
      title: "Weather Forecast Web Application",
      method:
        "Here we can check weather of different places in the World Using OpenWeather API",
      location: "https://github.com/vishalkumar9/WeatherApp",
      image: WA,
    },
    {
      title: "Recipe Web Application",
      method:
        "A CoolRecipe is a web application where we can find many cooking recipes for your special days. We use Forkify API to get  data.Features - Upload your recipe, bookmark your favorite recipe",
      short: "CR",
      location: "https://github.com/vishalkumar9/COOL-RECIPE",
      image: CR,
    },
    {
      title: "Dice Game Web Application",
      method:
        "Simple two players dice game where you have to maximize your final score more than opponents",
      short: "DG",
      location: "https://github.com/vishalkumar9/DiceGame",
      image: DG,
    },
    {
      title: "Social media sentiment analysis using twitterdataset",
      method:
        "Sentimental analysis studies the subjective information in an expression, that is the opinion, emotions or attitude towards topic",
      short: "SA",
      location:
        "https://github.com/vishalkumar9/Social-media-sentiment-analysis-using-twitter-dataset",
      image: SA,
    },
    {
      title: "Portfolio",
      method:
        " Portfolio Website to display some of my skills in a beautiful manner",
      short: "PF",
      location: "https://github.com/vishalkumar9/Portfolio",
      image: PF,
    },
    {
      title: "Result Management System",
      method:
        "Full Stack Project Using Reactjs as Frontend and Firebase As backend.",
      location: "https://github.com/vishalkumar9/StudentResultManagementSystem",
      image: RM,
    },
    {
      title: "Lets'Share",
      method:
        "Full Stack Project Using Reactjs as Frontend and Nodejs and Expressjs As backend and MongoDb as Storage.",
      location: "https://github.com/vishalkumar9/Lets-Share",
      image: LS,
    },
  ];

  return (
    <div className="project">
      <div className="project_content">
        {ProjectData.map((ele) => (
          <ProjectCard
            title={ele.title}
            image={ele.image}
            location={ele.location}
            method={ele.method}
          />
        ))}
      </div>
    </div>
  );
}
export default Project;
