import { InvoiceType } from "../../@types/invoice";
import Top from "./Top";
import Middle from "./Middle";
import Bottom from "./Bottom";
import styles from "./invoiceDetails.module.scss";

const InvoiceDetails = ({invoice}: {invoice?: InvoiceType | null }) => {
  return (
    <div className={styles.invoice_details}>
      <Top invoice= {invoice}/>
      <Middle invoice= {invoice}/>
      <Bottom invoiceItems= {invoice!.Items}/>
    </div>
  );
};

export default InvoiceDetails;
