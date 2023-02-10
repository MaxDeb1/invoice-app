"use client";

import type { Invoice } from '@prisma/client'
import { useContext } from "react";
import { DrawerContext } from "contexts/drawerOpeningContext"
import { StatusFilterContext } from "contexts/statusFilterContext"
import Header from "components/Headers/MainPageHeader";
import InvoicesList from "components/InvoicesList";
import AddEdit from "components/Form/AddEdit";
import styles from "app/page.module.scss";

const Main = ({invoices}: {invoices: Invoice[]}) => {
  const { isOpen } = useContext(DrawerContext);

  const { filters } = useContext(StatusFilterContext);
  var filtersArray = Array.from(filters.filter);

  var invoicesData = invoices!.filter(function(invoice) {
    return filtersArray.indexOf(invoice.status) > -1
  });

  const numOfItems = invoicesData.length;

  return (
    <main className={`${styles["main"]} ${isOpen ? styles["unclickable"] : ""}`}>
        <Header numOfItems={numOfItems} />
        <AddEdit />
        {/* {numOfItems === 0 ? 
              <NoInvoices/> : 
              <InvoicesList invoices={filteredInvoices}/>
            } */}
        <InvoicesList invoices={invoicesData}/>
    </main>
  );
};

export default Main;