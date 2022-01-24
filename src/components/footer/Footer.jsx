import "./footer.css";
import Linkedin from "../../img/linkedin-logo.png";
import Github from "../../img/github-logo.png";

const Footer = () => {
  const contacts = [
    { type: "Address", value: "3484 Fleming Street, Vancouver, BC, V5N 3V8" },
    { type: "Phone", value: "+1 (416) 995 4492" },
    { type: "Email", value: "hanghenguyen@gmail.com" },
  ];

  const socials = [
    { logo: Linkedin, url: "https://www.linkedin.com/in/nguyen-ha-034b2a150/"},
    { logo: Github, url: "https://github.com/hanguy2806"},
  ];
  return (
    <>
    <div className="footer">
      <h1 className="footer-title">Let's Get In Touch!</h1>
      <div className="footer-body">
        <div className="footer-left">
          <div className="footer-section-title">Contact me</div>
          {contacts.map((item) => (
            <div className="footer-contact-item" key={item.type}>
              {item.type} : {item.value}
            </div>
          ))}
        </div>
        <div className="footer-right">
          <div className="footer-section-title">Reach me on Social</div>
          {socials.map((item) => (
            <div className="footer-social-item" key={item.url}>
              <img src={item.logo} className="footer-logo" alt=""/>
              <a
                style={{
                  background: "transparent",
                  color: "#fff8dc",
                  cursor: "pointer",
                }}
                target="_blank"
                href={item.url}
                rel="noreferrer"
              >
                {item.url}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
      <div className="copyright"> Copyright by Ha Nguyen 2022</div></>
  );
};

export default Footer;
