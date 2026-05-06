import "./Hero.css";
import profilePhoto from "../../assets/Photo.png";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero-grid">
        {/* Left Side: Main Branding */}
        <div className="hero-left">
          <div className="hero-header-tag">FULL-STACK • SOFTWARE ENGINEER</div>
          <p className="hero-prefix">the portfolio of</p>
          <h1 className="hero-name">Lohith Sai</h1>
          <h2 className="hero-suffix">M V.</h2>
          
          <div className="hero-buttons">
            <a href="#contact" className="hero-btn">Contact Me</a>
            <a href="#about" className="hero-btn">About Me</a>
            <a href="/resume.pdf" className="hero-btn resume-btn">
              <i className="fas fa-download"></i> Resume
            </a>
          </div>
        </div>
        
        {/* Right Side: Photo & Info */}
        <div className="hero-right">
          <div className="hero-photo-wrapper">
            <div className="photo-space">
              {/* This is where your profile photo goes */}
              <div className="photo-img-container">
                <img src={profilePhoto} alt="Lohith Sai" className="hero-photo" />
              </div>
            </div>
          </div>
          
          <div className="hero-info-blocks">
            <div className="info-block">
              <label>BASED IN</label>
              <p>Bengaluru, India</p>
            </div>
            
            <div className="info-block">
              <label>SPECIALISING IN</label>
              <p>React • Node.js<br/>TypeScript • Python</p>
            </div>
            
            <div className="info-block">
              <label>STATUS</label>
              <p className="status">
                <span className="status-dot"></span> Open to work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}