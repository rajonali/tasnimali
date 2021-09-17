import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">

        <div style={{}}>

        <h3 className="skills-heading">Technologies</h3>

  <h3>Languages</h3>
  <ul>
    <li>Python</li>
    <li>Java</li>
    <li>Javascript</li>
    <li>Python</li>
    <li>SQL</li>
    <li>Bash, Powershell Scripting</li>
   




  </ul>


  <h3>Libraries & Frameworks</h3>
  <ul>
    <li>React and React Native + Redux</li>
    <li>Nextjs</li>
    <li>Vuejs</li>
    
    

  </ul>


  <h3>Methodologies</h3>
  <ul>
    <li>MVC</li>
    <li>REST</li>
    <li>JSON</li>
    <li>Web Hooks</li>

  </ul>

  <h3>Deployment & Databases</h3>
  <ul>
    <li>Netlify</li>
    <li>Heroku</li>
    <li>AWS</li>
    <li>Firebase</li>
  </ul>



</div>


          <div className="skills-bar">
            <h3 className="skills-heading">Proficiency</h3>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
 <div className="skills-image">
 <img
                alt="Skills"
                src={require("../../assets/images/programmer.svg")}
              />
          </div>


          </div>

          
{/**                     <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
          
*/}
        </div>
      </Fade>
    );
  }
  return null;
}
