import st from './style.module.scss'

const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <div>
        <p className={st.gradient}>I am Jan Severino and i am a fullstack web developer with around of 6 years of experience. Since that I have been developing web applications for different companies, working with Git flow, DevOps in SCRUM, and AGILE methodologies. My main skill set are: Javascript, ReactJS, C#, Javascript, ASP.NET and SQL server but I also work with other languages and frameworks like NodeJS, AngularJS. Also, I have to mention “I really love learning new skills”. </p>
      
        <ul className={st.skillList}>
          <li>❖ Javascript</li>
          <li>❖ ReactJS</li>
          <li>❖ Graphql</li>
          <li>❖ React Native</li>
          <li>❖ NodeJS</li>
          <li>❖ C#</li>
          <li>❖ .NET</li>
          <li>❖ HTML</li>
          <li>❖ CSS</li>
          <li>❖ MSSQL</li>
          <li>❖ Mongodb</li>
          <li>❖ Redux</li>
          <li>❖ Jest</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
