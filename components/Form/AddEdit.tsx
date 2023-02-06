"use client";

import type { Invoice, Items } from '@prisma/client'
import { useState, useContext, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { DrawerContext } from "contexts/drawerOpeningContext";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import FormBtns from "components/Buttons/FormBtns";
import styles from "./invoiceForm.module.scss";


const AddEdit = (invoice: {invoice: Invoice & {Items: Items[]} | null | undefined }) => {
  const isAddMode = !invoice;

  const { isOpen, setIsOpen } = useContext(DrawerContext);

  // set default form values if in edit mode
/*   if (!isAddMode) {
    console.log('Edit Mode')
    const { ...defaultValues } = invoice;
    formOptions.defaultValues = defaultValues;
  } */

  /* const methods = useForm<FormSchemaType>(formOptions); */

  const date = new Date();
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const today = date.getFullYear() + "-" + (month) + "-" + (day);

  const methods = useForm({
    defaultValues: {
      createdAt: today,
      items: [
        {}
      ]
    }
  });

  const [scrollY, setScrollY] = useState<number>()

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onSubmit = (data: Invoice & {Items: Items[]}) => /* console.log(data);  */{
    
    return fetch('/api/addEditInvoice', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
          console.log("Create Success: ", data);
      })
      .catch((error) => {
          console.error("ERROR: ", error);
      })
  }

  return (
    <div className={`${styles["drawer"]} ${isOpen ? styles["open"] : ""}`} style={{top: `${scrollY}px`}}>
      <FormProvider {...methods}>
        <form
          id="new-invoice-form"
          className={styles.newInvoiceForm}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <h1>{isAddMode ? "Add Invoice" : "Edit Invoice"}</h1>
          <BillFrom />
          <BillTo />
          <ItemList />
          <FormBtns isOpen={isOpen} setIsOpen={setIsOpen} />
        </form>
      </FormProvider>
    </div>
  );
};

export default AddEdit;