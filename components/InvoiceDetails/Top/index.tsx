import type { Invoice } from '@prisma/client'
import styles from "../invoiceDetails.module.scss";

const Top = ({ invoice }: {invoice: Invoice}) => {
  return (
    <div className={styles.top}>
      <div className={styles.identification}>
        <div className={styles.id}>
          #<span>{invoice?.id}</span>
        </div>
        <div className={styles.description}>{invoice?.description}</div>
      </div>
      <address className={styles.senderAdress}>
        {invoice?.senderAddress_street}
        <br />
        {invoice?.senderAddress_city}
        <br />
        {invoice?.senderAddress_postCode}
        <br />
        {invoice?.senderAddress_country}
        <br />
      </address>
    </div>
  );
};

export default Top;