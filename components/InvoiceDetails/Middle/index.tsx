import type { Invoice } from '@prisma/client';
import { dateDDMMYYFormat } from '../../../utils';
import styles from "../invoiceDetails.module.scss";

const Middle = ({ invoice }: {invoice: Invoice}) => {

  return (
    <div className={styles.middle}>
      <div className={styles.calendar}>
        <div className={styles.invoice_date}>
          Invoice Date
          <div className={styles.date}>
            {dateDDMMYYFormat(invoice.createdAt)}
          </div>
        </div>
        <div className={styles.payment_due}>
          Payment Due
          <div className={styles.date}>
            {dateDDMMYYFormat(invoice.paymentDue)}
          </div>
        </div>
      </div>
      <div className={styles.client}>
        Bill To
        <div className={styles.clientName}>{invoice?.clientName}</div>
        <address className={styles.clientAddress}>
          {invoice?.clientAddress_street}<br />
          {invoice?.clientAddress_city}<br />
          {invoice?.clientAddress_postCode}<br />
          {invoice?.clientAddress_country}<br />
        </address>
      </div>
      <address className={styles.clientEmail}>
        Sent To
        <div className={styles.email}>{invoice?.clientEmail}</div>
      </address>
    </div>
  );
};

export default Middle;