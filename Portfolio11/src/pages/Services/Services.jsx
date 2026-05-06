import "./Services.css"
import { FaTerminal, FaBrain, FaRocket } from "react-icons/fa";

function Experience(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Professional Experience</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaTerminal className="service-icon"/>
          <h3>Junior Software Engineer</h3>
          <h4 style={{ color: "#777", marginBottom: "10px" }}>Kloud Win Tech</h4>
          <p>Architected and shipped 5+ production REST APIs using FastAPI; optimized MySQL queries reducing response latency by 40%.</p>
        </div>

        <div className="service-card">
          <FaBrain className="service-icon"/>
          <h3>Machine Learning Engineer</h3>
          <h4 style={{ color: "#777", marginBottom: "10px" }}>Infotact Solutions (Intern)</h4>
          <p>Engineered ML pipeline using TensorFlow and XGBoost; processed 100K+ records with 92% prediction accuracy.</p>
        </div>

        <div className="service-card">
          <FaRocket className="service-icon"/>
          <h3>Backend SDE</h3>
          <h4 style={{ color: "#777", marginBottom: "10px" }}>Focus Areas</h4>
          <p>Building high-performance, fault-tolerant systems with Docker, Kubernetes, and optimized SQL databases.</p>
        </div>

      </div>

    </div>
  )

}

export default Experience;