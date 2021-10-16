import React from "react";
import me from "../img/jovana2(1).jpg";

import { motion } from "framer-motion";
import { About, Description, Image, Hide } from "../styles";
import { titleAnim, fade, photoAnim } from "../Animation";
import Wave from "./Wave";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>
              &#8221;Defeats are only resting places
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              for future <span>victories.&#8221;</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>Michael Idvorsky Pupin</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            aspernatur.
          </motion.p>
        </motion.div>
        <motion.button variants={fade}>Contact me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={me} alt="" />
      </Image>
      <Wave />
    </About>
  );
};
//Styled components

export default AboutSection;
