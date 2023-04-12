
import st from "./style.module.scss";
import Microblog from "../../assets/projects/Microcrm.png";
import Portfolio from "../../assets/projects/portfolio.png";
import Github from "../../assets/svg/github.svg";

interface Project {
  name: string;
  img: string;
  description: string;
  longDescription: string;
  skills: string[];
  link:string
}

const projects: Project[] = [
  {
    name: "MicroCRM",
    img: Microblog,
    description: "Minimal blog, made by me",
    longDescription:
      "A blog where you can write, read, find out and share news or any type of information. A place where you can stay updated.",
    skills: ["Reactjs", "Typescript", "SASS", "CSS"],
    link:'https://github.com/janseverino/blog'
  },
  {
    name: "Jan Severino's Portfolio",
    img: Portfolio,
    description: "",
    longDescription:
      "My Portfolio, a minimal compilation of academic and professional's experiences, where you add skills, experiences about about you carrier.",
    skills: ["Reactjs", "Typescript", "SASS", "Styled Components"],
    link:'https://github.com/janseverino/blog'
  },
];

const Work = () => {
  const projectCont = (project: Project) => (
    <div key={project.name} className={st.container}>
      <div className={st.flex}>
        <div className={st.imageContainer}>
          <img alt={project.name} className={st.imageBox} src={project.img} />
        </div>
        <div className={st.projectContainer}>
          <h2>{project.name}</h2>
          <h3>{project.description}</h3>
          <div className={st.descriptionContainer}>
            <p>{project.longDescription}</p>
          </div>
        </div>
      </div>
      <div className={st.flex}>        
      <a href={project.link} target="_blank"  rel="noreferrer" >         
      <img alt={project.name} src={Github} style={{width: '57px'}} />      
      </a>
      <ul className={st.skillsList}>
        {project.skills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>       
      </div>
    </div>
  );
  return (
    <>
      <h1>WORK</h1>
      {projects.map((pr) => (
        projectCont(pr)
      ))}
    </>
  );
};

export default Work;
