import React from "react";
import teh from "../img/tehnologies.jpg";
import programming from "../img/programming.jpg";
const TehnologiesSection = () => {
  return (
    <div className="tehn">
      <div className="desc">
        <h2>Tehnologies I'm familiar with</h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={teh} alt="" />
              <h3>Html</h3>
            </div>
            <p>I have strong knowledge of HTML5.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teh} alt="" />
              <h3>CSS/SCSS</h3>
            </div>
            <p>
              Making things look nice using CSS with his compiler sass is
              probably one of my favorite parts when it comes to web
              programming.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teh} alt="" />
              <h3>JavaScript</h3>
            </div>
            <p>
              I'm still actively learning JavaScript, and I'm good at the
              dealing with challenges it brings.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teh} alt="" />
              <h3>React</h3>
            </div>
            <p>
              I am a beginner as far as React is concerned, but I am motivated
              by the fact that it is fascinating for learning and working.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teh} alt="" />
              <h3>PHP</h3>
            </div>
            <p>
              I used PHP in combination with the MySQL database for a couple of
              projects, so I'm a relative beginner here as well.
            </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teh} alt="" />
              <h3>WordPress</h3>
            </div>
            <p>
              During the 3-month internship, I used WordPress in combination
              with PHP and JavaScript.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={programming} alt="" />
      </div>
    </div>
  );
};

export default TehnologiesSection;
