"use client";

import { useState, useContext, useEffect } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { DrawerContext } from "contexts/drawerOpeningContext";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import ItemList from "./ItemList";
import FormBtns from "components/Buttons/FormBtns";
import styles from "./invoiceForm.module.scss";


const AddEdit = (props) => {
  const invoice = props;
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
      clientName: "John Doe",
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

  const onSubmit = (data) => console.log(data);

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