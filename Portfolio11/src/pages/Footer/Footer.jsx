import "./Footer.css"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Lohith Sai M V</p>

        <div className="social-icons">

          <a href="https://github.com/Sailokesh2212" target="_blank" rel="noreferrer"><FaGithub/></a>
          <a href="https://www.linkedin.com/in/lohithsaimv" target="_blank" rel="noreferrer"><FaLinkedin/></a>
          <a href="#"><FaInstagram/></a>

        </div>

      </div>

    </footer>

  )

}


export default Footer;