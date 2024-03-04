import React from "react";
import "./style/about.css"
import profile from "../assets/profile.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faSquareJs, faReact, } from '@fortawesome/free-brands-svg-icons'

export function About() {
  return (
    <>
        <div id="Sobre" className="containerabout">
            <div id="textAbout" className="itemAbout">
                <div  className="contentabout">
                    <h1><span className="ola">Olá</span>, Eu sou um programador front-end, apaixonado por interfaces interativas e responsivas com HTML, CSS, JS e ReactJS.</h1>
                    <div className="iconsLing">
                    <FontAwesomeIcon  id="iconsLing" icon={faHtml5} />
                    <FontAwesomeIcon  id="iconsLing" icon={faCss3} />
                    <FontAwesomeIcon  id="iconsLing" icon={faSquareJs} />
                    <FontAwesomeIcon  id="iconsLing" icon={faReact} />
                    </div>
                </div>
                <div className="contentabout">
                    <img className="profile" src={profile} alt="" />
                </div>
            </div>
        </div>
    </>
  );
}