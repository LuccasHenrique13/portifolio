import React from "react";
import "./style/navbar.css";

export function Navbar(){
  return(
    <>
    <header>
      <a href="#Sobre">Sobre</a>
      <a href="#Projects">Projetos</a>
      <a className="logo" href="">花</a>
      <a href="">Novidades</a>
      <a href="">Contato</a>
    </header>
    </>
  );
}