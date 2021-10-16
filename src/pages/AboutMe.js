import React from "react";
import AboutSection from "../components/AboutSection";
import TehnologiesSection from "../components/TehnologiesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnim } from "../Animation";
const AboutMe = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <AboutSection />
      <TehnologiesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutMe;
