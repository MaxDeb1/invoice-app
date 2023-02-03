"use client";

import FormBtns from "components/Buttons/FormBtns";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DrawerContext } from "contexts/drawerOpeningContext";
import BillFrom from "../BillFrom";
import BillTo from "../BillTo";
import styles from "../invoiceForm.module.scss";
import ItemList from "../ItemList";


const NewInvoice = (/* {invoicesData} */) => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);

  const date = new Date();
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const today = date.getFullYear() + "-" + (month) + "-" + (day);

  const methods = useForm({
    defaultValues: {
      clientName: "John Doe",
      createdAt: today,
      items: [
        {}
      ]
    }
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className={`${styles["drawer"]} ${isOpen ? styles["open"] : ""}`} style={{top: `${window.scrollY}px`}}>
      <FormProvider {...methods}>
        <form
          id="new-invoice-form"
          className={styles.newInvoiceForm}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <h1>New Invoice</h1>
          <BillFrom />
          <BillTo />
          <ItemList />
          <FormBtns isOpen={isOpen} setIsOpen={setIsOpen} />
        </form>
      </FormProvider>
    </div>
  );
};

export default NewInvoice;
