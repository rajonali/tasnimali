import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import AdaptiveImage from 'react-adaptive-image';



export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
            <div style={{color:'#d9534f', objectFit: 'contain', overflow: 'contain', fontFamily: 'Helvetica Neue', fontSize:'20px', backgroundColor: 'transparent', whiteSpace: 'pre-wrap', display:'flex', flex:1, flexDirection: 'column'}}>

{/* <div className="bigimage">
<img style={{ width:'100%', height:'100%', alignSelf:'center'}}
    src={require("../../assets/images/bigtasasciilogo.PNG")} 
  />
</div>
*/}

<div className="smallimage">
<img style={{ width:'100%', height:'100%', alignSelf:'center'}}
                src={require("../../assets/images/smalltasasciilogo.png")} 
              />
</div>
</div>

              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
              <img
              className="greeting-image-div-img"
                alt="man sitting on table"
                src={require("../../assets/images/myavatar.png")}
              ></img>
           
          </div>
        </div>
      </div>
    </Fade>
  );
}
