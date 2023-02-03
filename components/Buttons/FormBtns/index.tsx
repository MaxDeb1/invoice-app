import { DrawerContextType } from "../../../@types/drawer"; 
import styles from "./newInvoiceMenuBtns.module.scss";

const NewInvoiceMenuBtns = ({ isOpen, setIsOpen }: DrawerContextType ) => {
  const closeDrawer = () => {
    setIsOpen(!isOpen)
    const form = document.getElementById("new-invoice-form") as HTMLFormElement;
    form.reset();
    const drawer = form.parentElement
    drawer!.scrollTo(0, 0);
    document.body.style.overflow = "auto"; // Enable Page Scrolling When The Drawer is Close
  };

  return (
    <menu className={styles.menuBtns}>
      <button className={styles.discardBtn} type="button" onClick={closeDrawer}>
        Discard
      </button>

      <button className={styles.saveBtn} id="save" type="submit">
        Save as Draft
      </button>

      <button className={styles.sendBtn} id="send" type="submit">
        Save and Send
      </button>
    </menu>
  );
};

export default NewInvoiceMenuBtns;
