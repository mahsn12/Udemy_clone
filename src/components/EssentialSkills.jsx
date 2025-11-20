// src/components/EssentialSkills.jsx
import React from "react";
import { careerSkills } from "../data";

const ESkills = () => {
  return (
    <section className="essential-skills">
      <div className="essential-skills-container">
        <div className="essential-skills-text">
          <h2>Learn essential career and life skills</h2>
          <p className="description">
            Udemy helps you build in-demand skills fast and advance your career in a changing job market..
          </p>
        </div>

        <div className="essential-skills-content">
          <div className="skills-grid">
            {careerSkills.map((skill) => (
              <div key={skill.id} className="skill-item">
                <div className="skill-image">
                  <img src={skill.image} alt={skill.title} />
                </div>
                <div className="skill-name">{skill.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ESkills;
