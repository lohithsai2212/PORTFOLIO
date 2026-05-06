import { useState } from "react";
import "./About.css";
import Skills from "./Skills";
import profilePhoto from "../../assets/Photo.png";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src={profilePhoto} alt="Lohith Sai M V" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src={profilePhoto} alt="Lohith Sai M V" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Hi, I'm Lohith Sai M V, a production-focused Backend Engineer with 6+ months of hands-on experience designing, deploying, and optimizing scalable REST APIs and microservices. 
            I have proven expertise in full-stack API development using FastAPI, MySQL, Docker, and Kubernetes.
            I've successfully shipped 5+ production APIs and reduced response latency by 40% through database optimization.
            Currently, I am seeking a Backend SDE role to architect high-performance, fault-tolerant systems.
          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}


export default About;