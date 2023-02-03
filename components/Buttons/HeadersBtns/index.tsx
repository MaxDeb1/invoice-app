"use client";

import Image from "next/image";
import IconPlus from "/assets/icon-plus.svg";
import { useContext } from "react";
import { DrawerContext } from "contexts/drawerOpeningContext";
import styles from "./headersBtns.module.scss";

type Props = {
  content: string,
  match?: boolean,
};


const HeadersBtns = ({ match, content }: Props) => {
  const { isOpen, setIsOpen } = useContext(DrawerContext) ;

  const handleClick = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = "hidden" //Prevent Page Scrolling When the Drawer is Open
  }

  switch(content) {
    case 'New Invoice':
      return(
        <div className={styles.newInvoiceBtn} onClick={handleClick} >
          <div className={styles.iconPlus}>
            <Image src={IconPlus} alt="" />
          </div>
          {match ? "New" : "New invoice"}
        </div>
      )
      break;
    case 'Edit':
      return (
        <button 
          className={`${styles.defaultBtn} ${styles[content]}`} 
          onClick={handleClick}
        >
            {content}
        </button>
      )
      break;
    default:
      return (
        <button className={`${styles.defaultBtn}
        ` + (styles[content] !== undefined ? styles[content] : "")}>
            {content}
        </button>
      )
  }
};

export default HeadersBtns;