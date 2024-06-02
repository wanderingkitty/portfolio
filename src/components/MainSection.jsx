import linkedinIcon from '../assets/linkedin.png'
import githubIcon from '../assets/github.png'
import './Main.css'
import { NavLink } from "react-router-dom"
import DarkModeSwitch from './DarkModeSwitch.jsx'
import AboutMe from './About.jsx'

function MainSection() {
    return (
        <>
        <header>
        <div className='header-links'>    
        <h1>LOGO</h1>
        <NavLink to='/Projects'>Projects</NavLink>
        <NavLink to='/Skills'>Skills</NavLink>
        </div>
        <div className='links'>
        <a href="https://www.linkedin.com/in/alina-ericson-50549b273/">
        <img className='logo' src={linkedinIcon} alt="LinkedIn Logo" />
        </a>
        <a href="https://github.com/wanderingkitty">
        <img className='logo' src={githubIcon} alt="GitHub Logo" />
        </a>
        </div>
        </header>
        <DarkModeSwitch/>
        <AboutMe/>
        </>
        )
    }
    
    export default MainSection;
    