import st from "./style.module.scss";
import CustomizedTabs from "../../components/TabsComponent/TabsComponent";
import TabPanel from "../../components/TabsComponent/TabPane";
import { Experience } from "../../types/types";
import { useState } from "react";

const Experiences = () => {
  const [experiences] = useState<Experience[]>(experiencesInformation);

  const getExperienceInformation = (exp: Experience) => (
    <>
      <p>
        {exp.rol}
        <span> {"-->"} </span>
        <a href={exp.job.url}  rel="noreferrer"  target='_blank'>
          {exp.job.name}
        </a>
      </p>
      <p>
        {exp.periodStart.toLocaleString("default", { month: "long" })} (
        {exp.periodStart.getFullYear()}) -
        {!exp.periodEnd ? (
          <span className={st.current}>Current</span>
        ) : (
          <span>
            {exp.periodEnd.toLocaleString("default", { month: "long" })}
            {exp.periodEnd && ` ( ${exp.periodEnd.getFullYear()} )`}
          </span>
        )}
      </p>
      <p className={st.descriptionWork}> {exp.description} </p>
      Technologies used:
      <ul className={st.skillsList}>
        {exp.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <h1>Where I have worked</h1>
      <div className={st.container}>
        <CustomizedTabs
          columns={[
            "BairesDev",
            "Seguro Nacional de Salud (SeNaSa) ",
            "COSEFI",
            "Techcomm Wireless",
          ]}>
          {experiences.map((experience: Experience, idx: number) => (
            <TabPanel key={idx} value={idx} index={idx}>
              {getExperienceInformation(experience)}
            </TabPanel>
          ))}
        </CustomizedTabs>
      </div>
    </>
  );
};

export default Experiences;

const experiencesInformation: Experience[] = [
  {
    rol: "Senior React Engineer",
    periodStart: new Date("08/01/2021"),
    periodEnd: undefined,
    job: { name: "Bairesdev", url: "https://www.bairesdev.com/" },
    description: `As a Frontend developer at Bairesdev, I have worked on different projects and part of my 
    responsibilities is to develop new features, design, and make further improvements to
    existing features. Sometimes I have to do a role like Fullstack and do a redevelopment in a
    Nodejs project.`,
    skills: [
      "React",
      "Apollo Graphql",
      "Nodejs",
      "CSS",
      "Git",
      "Github",
      "Redux",
      "Other",
    ],
  },
  {
    rol: "Software Developer",
    periodStart: new Date("07/01/2017"),
    periodEnd: new Date("08/01/2021"),
    job: {
      name: "Seguro Nacional de Salud (SeNaSa)",
      url: "https://www.arssenasa.gob.do/",
    },
    description: `Responsible for design and develop new systems that arise from the needs involved in the
    National Health Insurance, together with my team we design and choose the architectural
    model to be used in the systems in order to try implement the best practices.`,
    skills: [
      "React JS",
      "AngularJS",
      "HTML",
      "CSS",
      "GIT",
      "Javascript",
      "Azure DevOps",
      "C#",
      ".NET",
      "SQL Server",
    ],
  },
  {
    rol: "Software Developer",
    periodStart: new Date("05/01/2016"),
    periodEnd: new Date("08/01/2017"),
    job: { name: "COSEFI", url: "https://www.cosefi.com/" },
    description: `Being part of the COSEFI development team, we developed the Safe 2.0 financial CORE.
    Financial software oriented to institutions such as cooperative, multiple banks and
    others.`,
    skills: [
      "Angular",
      "NodeJS",
      "Javascript",
      "C#",
      "SQL Server",
      "MongoDB",
      "HTML",
    ],
  },
  {
    rol: "Software Developer",
    periodStart: new Date("04/01/2015"),
    periodEnd: new Date("05/01/2016"),
    job: { name: "Techcomm Wireless", url: "https://techcommwireless.com/" },
    description: `Working with new developments and maintaining the SeedStock System, my
    responsibilities such as Software Developer were to analyst, develop and automate
    process based on the company needs and in its growth.`,
    skills: [
      "ASP.NET",
      "C#",
      "VB .NET",
      "Microsoft SQL Server",
      "Javascript",
      "JQuery",
      "HTML",
      "CSS",
      "Team Foundation",
    ],
  },
];
