"use client";

import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../../app/theme-provider";
import styles from "../Toolbar/toolbar.module.scss";

const ToggleDarkMode = () => {
  let { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleOnClick = () => {
    toggleDarkMode!();
  };

  return (
    <div className={styles.toggleDarkMode} onClick={handleOnClick}>
      {darkMode ? (
        <Image
          src="/assets/icon-sun.svg"
          alt="moon icon"
          width={20}
          height={20}
        />
      ) : (
        <Image
          src="/assets/icon-moon.svg"
          alt="sun icon"
          width={20}
          height={20}
        />
      )}
    </div>
  );
};

export default ToggleDarkMode;