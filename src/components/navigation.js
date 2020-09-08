import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    
    <Link to="/contact">Contact</Link>
    <a target="_blank" href="https://linktr.ee/ufukcam">Linktree</a>
    <ThemeChanger/>
  </nav>
  
)
