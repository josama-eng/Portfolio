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

const Projects = () => {
  return (
    <Work>
      <Project>
        <h2>Watch Design</h2>
        <div className="line"></div>
        <Link>
          <img src={sajt1} alt="sajt" />
        </Link>
      </Project>
      <Project>
        <h2>Weather App</h2>
        <div className="line"></div>
        <Link>
          <img src={sajt2} alt="sajt" />
        </Link>
      </Project>
      <Project>
        <h2>Restorant</h2>
        <div className="line"></div>
        <Link>
          <img src={sajt3} alt="sajt" />
        </Link>
      </Project>
      <Project>
        <h2>Cistunac</h2>
        <div className="line"></div>
        <Link>
          <img src={sajt4} alt="sajt" />
        </Link>
      </Project>
      <Project>
        <h2>ISWork Shop</h2>
        <div className="line"></div>
        <Link>
          <img src={sajt5} alt="sajt" />
        </Link>
      </Project>
      <Project>
        <h2>Music</h2>
        <div className="line"></div>
        <Link>
          <img src={sajt6} alt="sajt" />
        </Link>
      </Project>
      <Project>
        <h2>BabyLand</h2>
        <div className="line"></div>
        <Link>
          <img src={sajt7} alt="sajt" />
        </Link>
      </Project>
      <Project>
        <h2>Hiking</h2>
        <div className="line"></div>
        <Link>
          <img src={sajt8} alt="sajt" />
        </Link>
      </Project>
    </Work>
  );
};
const Work = styled.div`
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
    background: #ccc;
    margin-bottom: 3rem;
  }
`;
export default Projects;
