import "./introduction.css";
import Me from "../../img/me.png";

const Introduction = () => {
  return (
    <div className="intro">
      <div className="intro-right">
        <img src={Me} alt="" className="intro-ava" />
      </div>
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-hello">Hello my name is</h2>
          <h1 className="intro-name">Ha Nguyen</h1>
          <p className="intro-explain">
            *Call me Ha Ha sounds like you are laughing*
          </p>
          <div className="intro-title">
            <div className="intro-exp">I was a &nbsp;</div>
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Front End Developer.</div>
              <div className="intro-title-item">Media Developer.</div>
              <div className="intro-title-item">MERN Full Stack.</div>
            </div>
          </div>
          <div className="intro-description">
          I currently work as a full stack developer at CAE, and outside of coding, I dedicate a significant amount of time to cooking.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
