import React from "react";
import phone from "../img/phone.png";
import mail from "../img/mail.png";
import linkedin from "../img/linkedin.png";
import git from "../img/git.png";
import twitter from "../img/twitter.png";
import styled from "styled-components";
import { About } from "../styles";
const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Get to know me <span>better</span>
      </h2>
      <div className="question">
        <h4>How do I start programming?</h4>
        <div className="answer">
          <p>
            At the age of 15, I first encountered programming, when I went to a
            competition in the QBasic programming language. After that, I didn't
            do anything about programming for a couple of years, but two years
            ago I started learning every day, and it continues today.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Few things about me</h4>
        <div className="answer">
          <p>
            My name is Jovana, I come from Novi Sad, Serbia. When it comes to my
            personal life I'm an open- minded person who likes a good book,
            Sci-Fi movies and spending time in nature.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Let's connect!</h4>
        <div className="answer">
          <div className="social">
            <img src={phone} alt="" />
            <a href="tel:+381648521768">+381-64-8521-768</a>
          </div>
          <div className="social">
            <img src={mail} alt="" />
            <a href="mailto:jovana@samardzic.in.rs">jovana@samardzic.in.rs</a>
          </div>
          <div className="social">
            <img src={linkedin} alt="" />
            <a href="tel:+381648521768">+381-64-8521-768</a>
          </div>
          <div className="social">
            <img src={git} alt="" />
            <a href="tel:+381648521768">+381-64-8521-768</a>
          </div>
          <div className="social">
            <img src={twitter} alt="" />
            <a href="tel:+381648521768">+381-64-8521-768</a>
          </div>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
