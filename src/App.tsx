import React, { useState } from "react";
import st from "./App.module.scss";
import Background from "./components/Background/Backgroung";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import SocialList from "./components/SocialList/SocialList";
import RightAsideBar from "./components/RightAsideBar/RightAsideBar";
import WelcomeLoading from "./components/WelcomeLoading/WelcomeLoading";

function App() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <div className='App'>
      <WelcomeLoading />
      <React.StrictMode>
        <BrowserRouter>
          <Background />
          <Header onOpenMenu={() => setOpenDrawer(true)} />
          <div className={st.socialListContent}></div>
          <SocialList />
          <RightAsideBar
            onClose={() => setOpenDrawer(false)}
            open={openDrawer}
          />
          <Main />
        </BrowserRouter>
      </React.StrictMode>
    </div>
  );
}

export default App;
