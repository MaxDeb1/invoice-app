"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import ArrowLeft from "/assets/icon-arrow-left.svg";
import styles from "./goBackBtn.module.scss";

const GoBackBtn = () => {
  const router = useRouter();
  return (
    <button className={styles.GoBackBtn} onClick={() => router.back()}>
      <Image className={styles.arrowLeft} src={ArrowLeft} alt="" />
      Go back
    </button>
  );
};

export default GoBackBtn;