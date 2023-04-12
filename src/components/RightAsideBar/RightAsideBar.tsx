import st from "./style.module.scss";
import NavigationOptions from "../NavigationOption/NavigationOption";
import { useEffect, useRef } from "react";

type RightAsideBarProps = {
  open: boolean;
  onClose: () => void;
};

const RightAsideBar = ({ open, onClose }: RightAsideBarProps) => {
  const containerRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        containerRef.current &&
        !containerRef.current?.contains(event.target)
      ) {
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      className={`${st.container} ${open ? st.visible : st.notVisible}`}>
      <div className={st.close}>
        <span onClick={onClose} className={st.btn}>
          X
        </span>
      </div>
      <NavigationOptions />
    </div>
  );
};

export default RightAsideBar;
