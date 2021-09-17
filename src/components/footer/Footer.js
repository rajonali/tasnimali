import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p style={{padding: '10px', borderTop: 'dashed 1px #a6a6a6', fontFamily:'monospace',}} className={isDark ? "dark-mode footer-text" : "footer-text"}>
        © Copyright Tasnim Ali 2021
        </p>
      </div>
    </Fade>
  );
}
