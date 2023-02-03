"use client";

import NewInvoiceMenuBtns from "components/Buttons/FormBtns";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DrawerContext } from "../../Buttons/NewInvoiceBtn";
import BillFrom from "../BillFrom";
import BillTo from "../BillTo";
import styles from "../invoiceForm.module.scss";
import ItemList from "../ItemList";

const EditForm = () => {
  const { isOpen, setIsOpen } = useContext(DrawerContext);
  const methods = useForm();

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

export default EditForm;
