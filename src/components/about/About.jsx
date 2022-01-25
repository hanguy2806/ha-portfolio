import "./about.css";
import Me from "../../img/me_Working.jpg";
const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card shadow"></div>
        <div className="about-card">
          <img src={Me} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p ckassName="about-sub">
          Graduted student with hands-on experiences from industry.
        </p>
        <p className="about-description">
          While at Centennial College, I was lucky to join 3 Co-op placements at
          start-up and midsize team at Cya.Live, WIMTACH and Pearson Canada Inc
          respectively, gaining plenty of experiences through different
          responsibilities. Always, I discipline myself to get good score at
          college (GPA 4.26/4.50) as well as expand my horizon at programming
          whenever I have time. My friends think I am a fast learner and team
          player. I feel myself more intuitive on web development and want to
          pursue this career path in future.
        </p>
        <div className="about-wimtach">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wimtach.centennialcollege.ca/student-profile-thi-thu-ha-nguyen/"
          >
            Me at WIMTACH
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
