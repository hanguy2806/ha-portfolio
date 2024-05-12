import "./about.css";
import Me from "../../img/me_Working.jpg";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const About = () => {
  return (
    <div className="about">     
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="about-sub">
          Web developer with hands-on experiences from industry.
        </p>
        <p className="about-description">
        During college, I completed three Co-op placements at Cya.Live, WIMTACH, and Pearson Canada Inc., 
        acquiring diverse experiences and responsibilities. I maintained a high GPA of 4.26/4.50 while 
        continuously expanding my programming skills, particularly focusing on web development. 
        Recognized as a fast learner and team player by my peers, I aspire to pursue a career in web development in the future.
        </p>
        <p className="about-description">
        As a full-stack developer at CAE, I work with .Net, Vue.js, and Azure stack. 
        Daily challenges contribute significantly to my growth, enhancing not just my technical skills 
        but also fostering a more thoughtful approach in everything I do.
        </p>
        <div className="about-wimtach">          
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wimtach.centennialcollege.ca/student-profile-thi-thu-ha-nguyen/"
          >
            Me at WIMTACH <OpenInNewIcon style={{fontSize: 18}}/>
          </a>
        </div>
      </div>
      <div className="about-left">
        <div className="about-card shadow"></div>
        <div className="about-card">
          <img src={Me} alt="" className="about-img" />
        </div>
      </div>
    </div>
  );
};

export default About;