import React from "react";
import me from "../img/me.jpg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>"Defeats are only resting places</h2>
          </Hide>
          <Hide>
            <h2>
              for future <span>victories."</span>
            </h2>
          </Hide>
          <Hide>
            <h2>Michael Idvorsky Pupin</h2>
          </Hide>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            aspernatur.
          </p>
        </div>
        <button>Contact me</button>
      </Description>
      <Image>
        <img src={me} alt="" />
      </Image>
    </About>
  );
};
//Styled components

export default AboutSection;
