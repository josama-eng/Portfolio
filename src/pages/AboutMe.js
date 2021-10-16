import React from "react";
import AboutSection from "../components/AboutSection";
import TehnologiesSection from "../components/TehnologiesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnim } from "../Animation";
import ScrollTop from "../components/Top";
const AboutMe = () => {
  return (
    <motion.div exit="exit" variants={pageAnim} initial="hidden" animate="show">
      <AboutSection />
      <TehnologiesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutMe;
