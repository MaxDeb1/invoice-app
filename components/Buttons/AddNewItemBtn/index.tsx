"use client";

import Image from "next/image";
import IconPlus from "/assets/icon-plus.svg";
import { FieldValues, UseFieldArrayAppend } from "react-hook-form/dist/types";
import styles from "./AddNewItemBtn.module.scss";

type AddProps = {
  append: UseFieldArrayAppend<FieldValues, "items">;
};

const AddNewItemBtn = ({ append }: AddProps) => {
  const addNewItem = () => {
    append({});
  };

  return (
    <button type="button" className={styles.addBtn} onClick={addNewItem}>
      <Image src={IconPlus} alt="" />
      Add New Item
    </button>
  );
};

export default AddNewItemBtn;