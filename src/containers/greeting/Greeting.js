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
            <div style={{color:'#d9534f', fontFamily: 'Helvetica Neue', fontSize:'20px', backgroundColor: 'transparent', whiteSpace: 'pre-wrap', display:'flex', flex:1, flexDirection: 'column'}}>

<img style={{ flex:1, display:'flex', maxWidth:'100%', alignSelf:'center'}}
                src={require("../../assets/images/tasasciilogo.PNG")}
              ></img>

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
