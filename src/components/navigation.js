import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <a target="_blank" href="https://twitter.com/ufukcam">Twitter</a>    
    <a target="_blank" href="https://github.com/ufukcam">Github</a>
    <a target="_blank" href="https://www.linkedin.com/in/ufukcam/">Linkedin</a>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)
