import React from 'react';
import './style/projects.css';
import dlsaude from '../assets/dlsaude.webp'
import swiftbuy from '../assets/swiftbuy.png'
import adp from '../assets/adp.png'
import thecode from '../assets/thecode.webp'
import doom from '../assets/doom.webp'


export function Project() {
return(
  <> 
    <div id='Projects' className="titleprojects"><h1>PROJETOS</h1></div>
    <div className="projects">
      <div className="projects-slide">
        
        <div className='linkProjects'>
          <img src={dlsaude}/>
          <div className="overlay">
            <h1>DL Saude</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/DL-Saude")}>GitHub</button>
            <button onClick={() => window.open("https://dlsaude.netlify.app/")}>Website</button>
          </div>
        </div>

        <div className='linkProjects'>
          <img src={swiftbuy}/>
          <div className="overlay">
            <h1>SwiftBuy</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/SwiftBuy/tree/main")}>
              GitHub</button>
            <button onClick={() => window.open("https://swiftbuyjp.netlify.app/")}>Website</button>
          </div>
        </div>

        <div className='linkProjects'>
          <img src={adp}/>
          <div className="overlay">
            <h1>Adote uma Praça</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/AdoteumaPraca")}>GitHub</button>
            <button onClick={() => window.open("https://adp-backup2.vercel.app/")}>Website</button>
          </div>
        </div>

        <div className='linkProjects'>
          <img src={thecode}/>
          <div className="overlay">
            <h1>Startup TheCode</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/TheCodeStudios-React")}>GitHub</button>
            <button onClick={() => window.open("https://thecodestudiosjp.vercel.app/")}>Website</button>
          </div>
        </div>

        <div className='linkProjects'>
          <img src={doom}/>
          <div className="overlay">
            <h1>Algoritmo DOOM</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/Doom-fireAlgorithm?tab=readme-ov-file")}>GitHub</button>
            <button onClick={() => window.open("https://doomfirealgorithm.netlify.app")}>Website</button>
          </div>
        </div>

      </div>

      <div className="projects-slide">
        
        <div className='linkProjects'>
          <img src={dlsaude}/>
          <div className="overlay">
          <h1>DL Saude</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/DL-Saude")}>GitHub</button>
            <button onClick={() => window.open("https://dlsaude.netlify.app/")}>Website</button>
          </div>
        </div>

        <div className='linkProjects'>
          <img src={swiftbuy}/>
          <div className="overlay">
            <h1>SwiftBuy</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/SwiftBuy/tree/main")}>GitHub</button>
            <button onClick={() => window.open("https://swiftbuyjp.netlify.app/")}>Website</button>
          </div>
        </div>

        <div className='linkProjects'>
          <img src={adp}/>
          <div className="overlay">
            <h1>Adote uma Pra</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/AdoteumaPraca")}>GitHub</button>
            <button onClick={() => window.open("https://adp-backup2.vercel.app/")}>Website</button>
          </div>
        </div>

        <div className='linkProjects'>
          <img src={thecode}/>
          <div className="overlay">
            <h1>Startup TheCode</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/TheCodeStudios-React")}>GitHub</button>
            <button onClick={() => window.open("https://thecodestudiosjp.vercel.app/")}>Website</button>
          </div>
        </div>

        <div className='linkProjects'>
          <img src={doom}/>
          <div className="overlay">
            <h1>Algoritmo DOOM</h1>
            <button onClick={() => window.open("https://github.com/LuccasHenrique13/Doom-fireAlgorithm?tab=readme-ov-file")}>GitHub</button>
            <button onClick={() => window.open("https://doomfirealgorithm.netlify.app")}>Website</button>
          </div>
        </div>

      </div>


    </div>
  </>
  );
}