import st from "./style.module.scss";

const Info = () => {
  return (
    <div className={st.container}>
      <div className='fadeup-enter-done' style={{ transitionDelay: "100ms" }}>
        <h1>Hi, my name is</h1>
      </div>
      <div className='fadeup-enter-done' style={{ transitionDelay: "200ms" }}>
        <h2 className={st.bigHeading}>Jan Severino</h2>
      </div>

      <div className='fadeup-enter-done' style={{ transitionDelay: "300ms" }}>
        <h3>Software Developer</h3>
      </div>
      <div className='fadeup-enter-done' style={{ transitionDelay: "400ms" }}>
        <p>
          I’m a software engineer specializing in building exceptional digital
          experiences.
        </p>
      </div>
    </div>
  );
};

export default Info;
