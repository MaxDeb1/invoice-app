"use client";

import Image from "next/image";
import IconPlus from "/assets/icon-plus.svg";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { DrawerContext } from "contexts/drawerOpeningContext";
import styles from "./headersBtns.module.scss";

type Props = {
  content: string,
  match?: boolean,
  id?: string
};


const HeadersBtns = ({ match, content, id }: Props) => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = "hidden" //Prevent Page Scrolling When the Drawer is Open
  }

  async function deleteInvoice(id: string): Promise<void> {
    if (window.confirm("Do you want to delete this invoice?")) {
      await fetch(`/api/invoice/${id}`, {
        method: 'DELETE',
      })
      router.push('/')
    }
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
    case 'Delete':
      return (
        <button 
          className={`${styles.defaultBtn} ${styles[content]}`} 
          onClick={() => deleteInvoice(id!)}
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