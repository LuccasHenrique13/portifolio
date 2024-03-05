import React from "react";
import "./style/navbar.css";

export function Navbar(){
  return(
    <>
    <header>
      <a href="#Sobre">Sobre</a>
      <a className="logo" href="#Home">花</a>
      <a href="#Projects">Projetos</a>
    </header>
    </>
  );
}