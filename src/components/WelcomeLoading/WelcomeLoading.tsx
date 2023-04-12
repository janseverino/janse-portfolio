import { useState } from 'react';
import Logo from '../../assets/projects/Untitled-design-pink.gif'
import st from './Style.module.scss'

const WelcomeLoading = ( ) => {

  const [displayWelcome, setDisplayWelcome] = useState<boolean>(true);
  setTimeout(() => setDisplayWelcome(false), 2000);

  if(!displayWelcome) return <></>

  return (       
   <div className={st.logoConainer}>
       <img src={Logo} alt="logo"/>     
   </div>
  );
};

export default WelcomeLoading;
