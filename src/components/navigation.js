import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="https://twitter.com/ufukcam">Twitter</Link>
    <Link to="https://github.com/ufukcam">Github</Link>
    <Link to="https://www.linkedin.com/in/ufukcam/">Linkedin</Link>
    <Link to="/contact">Contact</Link>
    <ThemeChanger/>
  </nav>
  
)
