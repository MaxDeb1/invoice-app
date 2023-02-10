"use client";

import { useState } from "react";
import { InvoiceType } from "../../../@types/invoice";
import Button from "components/Buttons/HeadersBtns";
import styles2 from "../../InvoiceOverview/invoiceOverview.module.scss";
import styles from "./invoicePageHeader.module.scss";
import MarkAsBtn from "components/Buttons/MarkAsBtn";

const InvoicePageHeader = ({invoice}: {invoice?: InvoiceType | null}) => {

  const [status, setStatus] = useState(invoice!.status)

  return (
    <header className={styles.invoicePageHeader}>
      <span>Status</span>
      <div className={`${styles2.status} ` + styles2[status]}>
        <div className={styles2.statusBox}>
          <div className={styles2.dot}></div>
          {status}
        </div>
      </div>
      <Button content="Edit" />
      <Button content="Delete" id={invoice!.id} />
      {status !== "paid" && (
        <MarkAsBtn 
          match={true}
          content="Mark as"
          id={invoice!.id}
          status={status}
          setStatus={setStatus}   
        />
      )}
    </header>
  );
};

export default InvoicePageHeader;