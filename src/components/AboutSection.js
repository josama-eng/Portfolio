import React from "react";
import me from "../img/me.jpg";
import styled from "styled-components";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Defeats are only resting places</h2>
          </Hide>
          <Hide>
            <h2>
              for future <span>victories</span>
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

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #ffffff;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const Image = styled.div`
  img {
    width: 400px;
    height: 80vh;
    object-fit: cover;
  }
  flex: 1;
  overflow: hidden;
`;

const Hide = styled.div`
  overflow: hidden;
`;
export default AboutSection;
