import "./Header.css"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"

function Header() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={scrolled ? "header scroll" : "header"}>
            <div className="logo">
                <h1>&lt; <span>sai</span> /&gt;</h1>
            </div>

            <ul className="links">
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#serv">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ul className="icons">
                <li><a href="https://github.com/Sailokesh2212" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} title="GitHub" /></a></li>
                <li><a href="https://www.codingame.com/profile/7d7c93bfeb86ed24599ec7a36e8ba1257023376" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGamepad} title="CodinGame" /></a></li>
                <li><a href="https://www.linkedin.com/in/lohithsaimv" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} title="LinkedIn" /></a></li>
            </ul>
        </header>
    )
}


export default Header