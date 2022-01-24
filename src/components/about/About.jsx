import "./about.css"
import Me from "../../img/me_Working.jpg"
const About =() => {
    return (<div className="about">
        <div className="about-left">
            <div className="about-card shadow"></div>
            <div className="about-card">
                <img src={Me} alt="" className="about-img"/>
            </div>
        </div>
        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p ckassName="about-sub">
                I am looking for a job as Front End/Full Stack/Back End Developer
            </p>
            <p className="about-description">
                Some description here
            </p>
            <div className="about-wimtach">
                <a target="_blank" href="https://wimtach.centennialcollege.ca/student-profile-thi-thu-ha-nguyen/">Me at WIMTACH</a>
            </div>
        </div>
    </div>)
}

export default About;