import st from "./Style.module.scss";
import Bars from "../../assets/svg/bars_icon.svg";
import NavigationOptions from "../NavigationOption/NavigationOption";
import Logo from "../Logo/Logo";

type HeaderProps = {
  onOpenMenu: () => void
}
const Header = ({onOpenMenu}: HeaderProps) => {

  return (
       <div className={st.container} >
      <div className={st.logo}>
        <Logo />
      </div>
    <nav className={`navbar navbar-expand-lg pe-3`}> 
    
      <div>
        <NavigationOptions classname={`${st.routeList} collapse navbar-collapse`}  />
      </div>
      
      <img alt="menuBarIcon" onClick={onOpenMenu} className='navbar-toggler' src={Bars} />
    </nav>
      </div>
  );
};

export default Header;


