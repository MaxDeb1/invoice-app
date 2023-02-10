"use client";

import { InvoiceType } from "../../../@types/invoice";
import GoBackBtn from "components/Buttons/GoBackBtn";
import InvoicePageHeader from "components/Headers/InvoicePageHeader";
import InvoiceDetails from "components/InvoiceDetails";
import AddEdit from "components/Form/AddEdit";
import { useContext } from "react";
import { DrawerContext } from "contexts/drawerOpeningContext"
import styles from "app/page.module.scss";


const Main = ({invoice}: {invoice?: InvoiceType | null}) => {
  const { isOpen } = useContext(DrawerContext);

  return (
    <main className={`${styles["main"]} ${isOpen ? styles["unclickable"] : ""}`}>
      <GoBackBtn />
      <InvoicePageHeader invoice={invoice}/>
      <InvoiceDetails invoice={invoice}/>
      <AddEdit invoice={invoice} />
    </main>
  );
};

export default Main;