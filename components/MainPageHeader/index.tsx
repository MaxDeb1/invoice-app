"use client";

import NewInvoiceBtn from "components/Buttons/NewInvoiceBtn";
import { useEffect, useState } from "react";
/* import Filter from '../Filter' */
import styles from "./mainPageHeader.module.scss";

interface setHeaderProps {
  numOfItems: number | undefined;
}

const Header = ({ numOfItems }: setHeaderProps) => {
  const [match, updateMatch] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = "(max-width: 960px)";
    const mediaQueryList = window.matchMedia(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      updateMatch(event.matches);
    };
    mediaQueryList.addEventListener("change", handleChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <h1>Invoices</h1>
        <p>
          {match
            ? `${numOfItems}` + " invoices"
            : "There are " + `${numOfItems}` + " total invoices"}
        </p>
      </div>
      {/* <Filter match={match}/> */}
      <NewInvoiceBtn match={match} />
    </header>
  );
};

export default Header;
