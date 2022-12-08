import ToggleDarkMode from "../ToggleDarkMode";
import styles from "./toolbar.module.scss";

const Toolbar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/assets/logo.svg" alt="logo" />
      </div>
      <ToggleDarkMode />
      <div className={styles.profile}>
        <img src="/assets/image-avatar.jpg" alt="avatar" />
        <div className={styles.shadow}></div>
      </div>
    </div>
  );
};

export default Toolbar;
