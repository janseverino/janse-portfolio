import usePaths from "../routes/Paths";
import Info from "./Info/Info";
import st from "./style.module.scss";

const Main = () => {
  const { routesPaths } = usePaths();

  return (
    <main>
      <section className={`${st.sectionContainer} ${st.infoContainer}`}>
        <Info />
      </section>
      {routesPaths.map((item) => (
        <section key={item.label} id={item.to} className={st.sectionContainer}>
          {item.element}
        </section>
      ))}
    </main>
  );
};

export default Main;
