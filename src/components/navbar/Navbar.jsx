import React from 'react'
import "./navbar.scss"


export default function Navbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className='logo'>JDraws</a>
            </div>  
            <div className="itemContainer">
                {/* <Person className="icon" /> */}
                <span><a href="#intro">Intro</a></span>
                <span><a href="#projectCard">Projects</a></span>
                <span><a href="#certificates">Certificates</a></span>
              
            </div>
              
            <div className="right">
              <div className="hamburger" onClick={(e)=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
              </div>
            </div>
        </div>
    </div>
  )
}

