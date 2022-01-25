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
              <div className="intro-title-item">Full Stack.</div>
            </div>
          </div>
          <div className="intro-description">
            I am a new grad from Software Engineering program at Centennial
            college. This year, I am so excited to join tech industry as
            full-time role of Frontend/Backend Developer.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
