import "./Skills.css";

import {
  FaPython,
  FaJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

import {
  SiFastapi,
  SiMysql,
  SiKubernetes,
  SiPostman,
  SiPytest,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
} from "react-icons/si";

function Skills() {

  return (

    <div className="skills">
      <div className="skills-slider">
        <div className="skills-track">

          <SiFastapi title="FastAPI" />
          <SiMysql title="MySQL" />
          <FaDocker title="Docker" />
          <SiKubernetes title="Kubernetes" />

          <FaPython title="Python" />
          <FaJs title="JavaScript" />
          <SiPytest title="Pytest" />
          <SiPostman title="Postman" />

          <FaLinux title="Linux" />
          <FaGitAlt title="Git" />
          <SiTensorflow title="TensorFlow" />
          <SiScikitlearn title="Scikit-learn" />

          <SiPandas title="Pandas" />
          <SiNumpy title="NumPy" />

        </div>

      </div>

    </div>

  )

}


export default Skills;