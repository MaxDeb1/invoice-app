"use client";

import React from "react";
import styles from "../HeadersBtns/headersBtns.module.scss";

type Props = {
  match?: boolean,
  content: string,
  id?: string, 
  status?: string
  setStatus: React.Dispatch<React.SetStateAction<string>>
};


const MarkAsBtn = ({ content, id, status, setStatus }: Props) => {

  const changeStatus = async ( id: string, status: string ) => {
    const response = await fetch(`/api/changeStatus/${id}`, {
      method: 'PUT',
      body: JSON.stringify(status)
    });
    const updatedData = await response.json()
    setStatus(updatedData.status);
  }

  return (
    <button 
      className={`${styles.defaultBtn} ${styles[content]}`} 
      onClick={() => changeStatus(id!, status!)}
    >
      Mark as {status === "draft" ? "Pending" : "Paid"}
    </button>
  )
};

export default MarkAsBtn;