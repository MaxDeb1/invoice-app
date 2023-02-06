"use client";

import type { Invoice, Items } from '@prisma/client'
import Button from "components/Buttons/HeadersBtns";
import styles2 from "../../InvoiceOverview/invoiceOverview.module.scss";
import styles from "./invoicePageHeader.module.scss";

const InvoicePageHeader = ({invoice}: {invoice: Invoice & {Items: Items[]} | null | undefined }) => {
  return (
    <header className={styles.invoicePageHeader}>
      <span>Status</span>
      <div className={`${styles2.status} ` + styles2[invoice!.status]}>
        <div className={styles2.statusBox}>
          <div className={styles2.dot}></div>
          {invoice!.status}
        </div>
      </div>
      <Button content="Edit" />
      <Button content="Delete" />
      {invoice!.status !== "paid" && (
        <Button
          match={true}
          content={`Mark as ${invoice!.status === "draft" ? "Pending" : "Paid"}`}
        />
      )}
    </header>
  );
};

export default InvoicePageHeader;