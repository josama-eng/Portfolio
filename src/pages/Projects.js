import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import sajt1 from "../img/sajt1.png";
import sajt2 from "../img/sajt2.png";
import sajt3 from "../img/sajt3.png";
import sajt4 from "../img/sajt4.png";
import sajt5 from "../img/sajt5.png";
import sajt6 from "../img/sajt6.png";
import sajt7 from "../img/sajt7.png";
import sajt8 from "../img/sajt8.png";
//Animations
import { motion } from "framer-motion";
import { pageAnim, fade, photoAnim, Line, slider } from "../Animation";

const Projects = () => {
  return (
    <Work
      variants={pageAnim}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>

      <Project>
        <motion.h2 variants={fade}>Watch Design</motion.h2>
        <motion.div className="line" variants={Line}></motion.div>
        <a href="https://www.samardzic.in.rs/Watch-design/">
          <Hide>
            <motion.img variants={photoAnim} src={sajt1} alt="sajt" />
          </Hide>
        </a>
      </Project>
      <Project>
        <h2>Weather App</h2>
        <div className="line"></div>
        <a href="https://www.samardzic.in.rs/Vremenska-prognoza/">
          <img src={sajt2} alt="sajt" />
        </a>
      </Project>
      <Project>
        <h2>Restorant</h2>
        <div className="line"></div>
        <a href="https://www.samardzic.in.rs/Restourant-Site/">
          <img src={sajt3} alt="sajt" />
        </a>
      </Project>
      <Project>
        <h2>Cistunac</h2>
        <div className="line"></div>
        <a href="http://cistunac.iswdesign.com/">
          <img src={sajt4} alt="sajt" />
        </a>
      </Project>
      <Project>
        <h2>ISWork Shop</h2>
        <div className="line"></div>
        <a href="http://www.isworkshop.net/">
          <img src={sajt5} alt="sajt" />
        </a>
      </Project>
      <Project>
        <h2>Music</h2>
        <div className="line"></div>
        <a href="https://www.samardzic.in.rs/Music/">
          <img src={sajt6} alt="sajt" />
        </a>
      </Project>
      <Project>
        <h2>BabyLand</h2>
        <div className="line"></div>
        <a href="https://www.samardzic.in.rs/Baby-Store/">
          <img src={sajt7} alt="sajt" />
        </a>
      </Project>
      <Project>
        <h2>Hiking</h2>
        <div className="line"></div>
        <a href="https://www.samardzic.in.rs/planinarenje/">
          <img src={sajt8} alt="sajt" />
        </a>
      </Project>
    </Work>
  );
};
const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;
  img {
    width: 100%;
    /* height: 70vh; */
    object-fit: cover;
  }
  .line {
    height: 0.3rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  height: 100vh;
  width: 100%;
  z-index: 2;
  background: #fffebf;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default Projects;
