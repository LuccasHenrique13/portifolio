import React from "react";
import "./style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <>
      <div className="conteinerfooter">
        <div className="footerText">
          <h1>© 2024 Luccas Henrique Ribeiro da Silva. All rights reserved.</h1>
        </div>
        <div className="socials">
          <a href="https://github.com/LuccasHenrique13">
            <FontAwesomeIcon id="icon" icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/luccas-henrique/">
            <FontAwesomeIcon id="icon" className="socialsL" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </>
  );
}