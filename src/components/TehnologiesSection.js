import React from "react";
import teh from "../img/tehnologies.png";
import programming from "../img/programming.jpg";
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";
import { useScroll } from "./UseScroll";
import { fade, scrollRev } from "../Animation";

const TehnologiesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Tehnoligies
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          <span>Tehnologies</span> I'm familiar with
        </h2>
        <Cards>
          <Card>
            <Icon>
              <img src={teh} alt="" />
              <h3>Html</h3>
            </Icon>
            <p>I have strong knowledge of HTML5.</p>
          </Card>
          <Card>
            <Icon>
              <img src={teh} alt="" />
              <h3>CSS/SCSS</h3>
            </Icon>
            <p>
              Making things look nice using CSS with his compiler sass is
              probably one of my favorite parts when it comes to web
              programming.
            </p>
          </Card>
          <Card>
            <Icon>
              <img src={teh} alt="" />
              <h3>JavaScript</h3>
            </Icon>
            <p>
              I'm still actively learning JavaScript, and I'm good at the
              dealing with challenges it brings.
            </p>
          </Card>
          <Card>
            <Icon>
              <img src={teh} alt="" />
              <h3>React</h3>
            </Icon>
            <p>
              I am a beginner as far as React is concerned, but I am motivated
              by the fact that it is fascinating for learning and working.
            </p>
          </Card>
          <Card>
            <Icon>
              <img src={teh} alt="" />
              <h3>PHP</h3>
            </Icon>
            <p>
              I used PHP in combination with the MySQL database for a couple of
              projects, so I'm a relative beginner here as well.
            </p>
          </Card>
          <Card>
            <Icon>
              <img src={teh} alt="" />
              <h3>WordPress</h3>
            </Icon>
            <p>
              During the 3-month internship, I used WordPress in combination
              with PHP and JavaScript.
            </p>
          </Card>
        </Cards>
      </Description>
    </Tehnoligies>
  );
};

const Icon = styled.div`
  img {
    width: 64px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    padding: 1rem;
    background: #fff;
    color: black;
    margin-top: 1rem;
  }
`;
const Tehnoligies = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    /* padding: 2rem 0rem 4rem 0rem; */
  }
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${programming});
  background-size: cover;
  background-attachment: fixed;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  width: 30%;
  /* height: 200px; */
  display: flex;
  align-items: center;
  margin: 1rem;
  flex-direction: column;
  border: 3px solid #23d997;
  border-radius: 10px;
  padding: 2rem 0rem;
  p {
    text-align: center;
  }
  @media (max-width: 1300px) {
    width: 40%;
  }
  @media (max-width: 600px) {
    width: 90%;
  }
`;
export default TehnologiesSection;
