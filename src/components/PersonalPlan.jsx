import React from "react";
import { Star, Brain, Award } from "lucide-react";

const PersonalPlan = () => {
  const features = [
    { icon: <Star />, text: "Unlimited access to courses" },
    { icon: <Brain />, text: "Learn at your own pace" },
    { icon: <Award />, text: "Certifications included" },
  ];

  return (
    <section className="personal-plan">
      <div className="personal-plan-card">
        <div className="personal-plan-content">
          <div className="personal-plan-text">
            <h2>Reimagine your career in the AI era</h2>
            <p className="description">
Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.            </p>
            <ul className="features-list">
              {features.map((f, idx) => (
                <li key={idx} className="feature-item">
                  <div className="feature-icon">{f.icon}</div>
                  <span className="ud-text-md">{f.text}</span>
                </li>
              ))}
            </ul>
            <div className="plan-footer">
              <button className="learn-more-btn">Learn More</button>
              <p className="price">Starting at E£204.00/month</p>
            </div>
          </div>
          <div className="personal-plan-image">
            <img src="https://frontends.udemycdn.com/staticx/udemy/images/ai-career-banner/ai-career@1x.webp" alt="Plan" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalPlan;
