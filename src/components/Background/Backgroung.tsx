import React, { PropsWithChildren } from "react";
import ReactIcon from "../../assets/svg/react.svg";
import jsIcon from "../../assets/svg/js_icon.svg";
import nodeIcon from "../../assets/svg/node.svg";
import apolloIcon from "../../assets/svg/apollogql.svg";
import csharpIcon from "../../assets/svg/csharp.svg";
import htmlIcon from "../../assets/svg/html.svg";
import jestIcon from "../../assets/svg/jest.svg";
import reduxIcon from "../../assets/svg/redux.svg";
import sqlIcon from "../../assets/svg/sql.svg";
import LogoItemBackgroung from "./LogoItemBackgroung";
import st from "./style.module.scss";

const icons = [
  {
    top: "10%",
    left: "0%",
    topTo: "100%",
    leftTo: "70%",
    transform: "10%, -50%",
    seconds: 50,
    icon: ReactIcon,
  },
  {
    top: "-10%",
    left: "30%",
    topTo: "100%",
    leftTo: "100%",
    transform: "10%, -70%",
    seconds: 70,
    icon: apolloIcon,
  },
  {
    top: "-10%",
    left: "50%",
    topTo: "90%",
    leftTo: "-5%",
    transform: "84%, -5%",
    seconds: 90,
    icon: jsIcon,
  },
  {
    top: "80%",
    left: "0%",
    topTo: "100%",
    leftTo: "120%",
    transform: "10%, -70%",
    seconds: 60,
    icon: nodeIcon,
  },
  {
    top: "-10%",
    left: "79%",
    topTo: "99%",
    leftTo: "43%",
    transform: "84%, -5%",
    seconds: 100,
    icon: csharpIcon,
  },
  {
    top: "-10%",
    left: "50%",
    topTo: "98%",
    leftTo: "63%",
    transform: "40%, -5%",
    seconds: 70,
    icon: htmlIcon,
  },
  {
    top: "-10%",
    left: "70%",
    topTo: "98%",
    leftTo: "50%",
    transform: "84%, -5%",
    seconds: 50,
    icon: jestIcon,
    revert: true,
  },
  {
    top: "-10%",
    left: "10%",
    topTo: "98%",
    leftTo: "10%",
    transform: "84%, -5%",
    seconds: 80,
    icon: reduxIcon,
    revert: true,
  },
  {
    top: "-10%",
    left: "90%",
    topTo: "98%",
    leftTo: "70%",
    transform: "5%, -50%",
    seconds: 50,
    icon: sqlIcon,
    revert: true,
  },
];

const Background = ({ children }: PropsWithChildren) => {
  return (
    <div className={st.container}>
      {icons.map((icon) => (
        <LogoItemBackgroung key={icon.icon} {...icon} />
      ))}
      {children}
    </div>
  );
};

export default Background;
