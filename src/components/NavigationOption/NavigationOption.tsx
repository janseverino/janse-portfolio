import usePaths from "../../routes/Paths";
import commoun from "../../styles/commun.module.scss";

type NavigationOptionsProps = {
  classname? : string
}

const NavigationOptions = ({classname}:NavigationOptionsProps ) => {
  const { routesPaths } = usePaths();

  return (    
    <ul className={classname}>
    {routesPaths.map((route) => (
      <li
        key={route.label}
        className={commoun.liLink}
        onClick={() => document.getElementById(route.to)?.scrollIntoView()}>
        {route.label}
      </li>
    ))}</ul>
  );
};

export default NavigationOptions;
