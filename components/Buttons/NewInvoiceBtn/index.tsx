"use client";

import Image from "next/image";
import { createContext, ReactNode, useContext, useState } from "react";
import styles from "./newInvoiceBtn.module.scss";

export const DrawerContext = createContext(
  {} as [boolean, React.Dispatch<React.SetStateAction<boolean>>]
);

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log("isOpen = " + isOpen);
  return (
    <DrawerContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerContextProvider");
  }
  return context;
}

const NewInvoiceBtn = ({ match }: { match: boolean }) => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  return (
    <div className={styles.newInvoiceBtn} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.iconPlus}>
        <Image
          src="/assets/icon-plus.svg"
          alt="plus icon"
          width={11}
          height={11}
        />
      </div>
      {match ? "New" : "New invoice"}
    </div>
  );
};

export default NewInvoiceBtn;
