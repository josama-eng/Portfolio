import React, { useState } from "react";
import phone from "../img/phone.png";
import mail from "../img/mail.png";
import linkedin from "../img/linkedin.png";
import git from "../img/git.png";
import twitter from "../img/twitter.png";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./UseScroll";
import { fade, scrollRev } from "../Animation";
const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq variants={scrollRev} ref={element} animate={controls} initial="hidden">
      <h2>
        Get to know me <span>better</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="How do I start programming?">
          <div className="answer">
            <p>
              At the age of 15, I first encountered programming, when I went to
              a competition in the QBasic programming language. After that, I
              didn't do anything about programming for a couple of years, but
              two years ago I started learning every day, and it continues
              today.
            </p>
          </div>
        </Toggle>
        <Toggle title="Few things about me">
          <div className="answer">
            <p>
              My name is Jovana, I come from Novi Sad, Serbia. When it comes to
              my personal life I'm an open- minded person who likes a good book,
              Sci-Fi movies and spending time in nature.
            </p>
          </div>
        </Toggle>
        <Toggle title="Let's connect!">
          <Answer className="answer">
            <div className="social">
              <a href="tel:+381648521768" target="blank">
                <img src={phone} alt="" />
              </a>
            </div>
            <div className="social">
              <a href="mailto:jovana@samardzic.in.rs" target="blank">
                <img src={mail} alt="" />
              </a>
            </div>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/jovana-samardzic/"
                target="blank"
              >
                <img src={linkedin} alt="" />
              </a>
            </div>
            <div className="social">
              <a href="https://github.com/josama-eng/" target="blank">
                <img src={git} alt="" />
              </a>
            </div>
            <div className="social">
              <a href="https://twitter.com/JovanaSam94" target="blank">
                <img src={twitter} alt="" />
              </a>
            </div>
          </Answer>
        </Toggle>
      </AnimateSharedLayout>
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
const Answer = styled.div`
  display: flex;
  z-index: 9;
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
  }
`;
export default FaqSection;
