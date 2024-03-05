import React, { useRef, useEffect } from 'react';
import "./style/home.css";
import mac from "../assets/mac.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

export function Home() {
  const h1Ref = useRef(null);

  return (
    <>
      <div className="container" id='Home'>
        <div className="row">
          <div className="column">
            <img src={mac} alt="" />
          </div>
          <div className="column">
            <div className="content">
              <h1 ref={h1Ref} id='titulo'>Desenvolvedor Front-end</h1>
              <p className="textHome" id="paragHome">
                Luccas Henrique Ribeiro da Silva
              </p>
              <p className="textHome" id="paragHome">
                Engenharia da Computação
              </p>
              <div className="socials">
                <FontAwesomeIcon id="icon" icon={faGithub} />
                <a href="https://github.com/LuccasHenrique13">
                  <p>Github</p>
                </a>
                <FontAwesomeIcon id="icon" className="socialsL" icon={faLinkedin} />
                <a href="https://www.linkedin.com/in/luccas-henrique/">
                  <p>Linkedin</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};