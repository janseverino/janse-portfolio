import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { SocialIcon } from "../../types/types";
import st from "./style.module.scss";

const urlIcons: SocialIcon[] = [
  { name: "github", icon: <Github />, url: process.env.REACT_APP_GITHUBT_URL },
  {
    name: "linkedin",
    icon: <Linkedin />,
    url: process.env.REACT_APP_LINKEDIN_URL,
  },
  {
    name: "instagram",
    icon: <Instagram />,
    url: process.env.REACT_APP_INSTAGRAM_URL,
  },
];

const SocialList = () => {
  return (
    <ul className={st.ulList}>
      {urlIcons.map((icon) => (
        <li key={icon.name}>
          <a href={icon.url} target={"_blank"} rel="noreferrer">
            {icon.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialList;
