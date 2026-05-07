import "./Project.css";

import img1 from "../../assets/images/carbon_engine.png";
import img2 from "../../assets/images/recommendation_engine.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";
import img4 from "../../assets/images/WordPress dashboard design concept.jpg";
import img5 from "../../assets/images/portfolio_screenshot.png";
import img6 from "../../assets/images/Task manager app.jpg";

const projects = [
  {
    title: "Workload Orchestration",
    img: img1,
    desc: "Production-grade ML-driven scheduling system using LSTM and XGBoost to predict demand and renewable energy with 92% accuracy.",
    skills: ["Python", "Kubernetes", "LSTM"]
  },
  {
    title: "Recommendation Engine",
    img: img2,
    desc: "High-performance recommendation system using hybrid filtering and TF-IDF to serve personalized content from a library of 4,700+ items.",
    skills: ["Pandas", "NumPy", "Scikit-learn"]
  },
  {
    title: "E-Commerce Website",
    img: img4,
    desc: "Modern e-commerce platform featuring advanced product filtering, a robust shopping cart system, and secure payment integration.",
    skills: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Portfolio Website",
    img: img5,
    desc: "Premium, responsive portfolio designed to showcase backend expertise through interactive components and high-quality visualizations.",
    skills: ["HTML", "CSS", "Bootstrap"]
  },
  {
    title: "Weather App",
    img: img3,
    desc: "Real-time weather monitoring dashboard integrated with meteorological APIs, featuring responsive data visualizations and forecasting.",
    skills: ["HTML", "CSS", "API"]
  },
  {
    title: "Task Manager",
    img: img6,
    desc: "Sophisticated task management application with full CRUD capabilities, focusing on productivity through minimalist UI and state management.",
    skills: ["HTML", "CSS", "JS"]
  }
];


export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href="#" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href="#" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}