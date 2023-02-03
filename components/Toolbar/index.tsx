import Image from "next/image";
import Logo from "/assets/logo.svg";
/* import Avatar from "/assets/image-avatar.jpg"; */
import ToggleDarkMode from "../ToggleDarkMode";
import styles from "./toolbar.module.scss";

const Toolbar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Image src={Logo} alt="logo" />
      </div>
      <ToggleDarkMode />
      <div className={styles.profile}>
        <img src="/assets/image-avatar.jpg" alt="avatar" />
        {/* <Image src={Avatar} alt="avatar" /> */}
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
};

export default Toolbar;
