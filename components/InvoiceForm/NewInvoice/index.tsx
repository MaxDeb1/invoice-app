"use client";

import NewInvoiceMenuBtns from "components/Buttons/NewInvoiceMenuBtns";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DrawerContext } from "../../Buttons/NewInvoiceBtn";
import BillFrom from "../BillFrom";
import BillTo from "../BillTo";
import styles from "../invoiceForm.module.scss";
import ItemList from "../ItemList";

const NewInvoice = (/* {invoicesData} */) => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);
  console.log("form open : " + isOpen);

  const methods = useForm({
    defaultValues: {
      quantity: "",
      price: "",
      addTotal: "0",
    },
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className={`${styles["drawer"]} ${isOpen ? styles["open"] : ""}`}>
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
          <NewInvoiceMenuBtns isOpen={isOpen} setIsOpen={setIsOpen} />
        </form>
      </FormProvider>
    </div>
  );
};

export default NewInvoice;
