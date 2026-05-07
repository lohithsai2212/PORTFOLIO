import "./Footer.css"
import { FaGithub, FaLinkedin, FaGamepad } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Lohith Sai M V</p>

        <div className="social-icons">

          <a href="https://github.com/Sailokesh2212" target="_blank" rel="noreferrer" title="GitHub"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/lohithsaimv" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedin/></a>
          <a href="https://www.codingame.com/profile/7d7c93bfeb86ed24599ec7a36e8ba1257023376" target="_blank" rel="noreferrer" title="CodinGame"><FaGamepad/></a>

        </div>

      </div>

    </footer>

  )

}


export default Footer;