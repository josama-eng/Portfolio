import React from "react";
import me from "../img/me.jpg";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Defeats are only resting places</h2>
          </div>
          <div className="hide">
            <h2>
              for future <span>victories</span>
            </h2>
          </div>
          <div className="hide">
            <h2>Michael Idvorsky Pupin</h2>
          </div>
        </div>
        <button>Contact me</button>
      </div>
      <div className="image">
        <img src={me} alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
