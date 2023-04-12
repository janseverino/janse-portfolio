import React from "react";
import st from "./style.module.scss";

type LogoProps = {
  icon: string;
  top: string;
  left: string;
  topTo: string;
  leftTo: string;
  transform: string;
  seconds: number;
  revert?: boolean;
};

const LogoItemBackgroung = ({
  icon,
  top,
  left,
  topTo,
  leftTo,
  transform,
  seconds,
  revert = false,
}: LogoProps) => {
  const animateToName = `animateTo${Math.floor(Math.random() * 100)}`;
  const className = `screenSaver${Math.floor(Math.random() * 100)}`;

  const handleMovingStyle = () => {
    return `                
        .${className} {
            position: relative;                
            animation: ${animateToName} ${seconds}s linear infinite ${revert ? "reverse" : "alternate"} , rotation 10s infinite linear ;
            left: 0px;
            top: 0px; 
        }
        @keyframes ${animateToName}  {
            to{
                top: ${topTo};
                left:${leftTo};
                transform: translate(${transform})                            
              }
            }

        @keyframes rotation {
            from {
                transform: rotate(0deg);
              }
            to {
                  transform: rotate(360deg);
              }
          }
        `;
  };

  return (
  < >
      <img
        src={icon}
        style={{
          top: top,
          left: left,
        }}
        className={`${className} ${st.rotate}`} 
        alt=""
      />
      <style>{handleMovingStyle()}</style>
   </>
  );
};

export default LogoItemBackgroung;
