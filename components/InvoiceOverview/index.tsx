"use client";

import type { Invoice } from '@prisma/client'
import { dateDDMMYYFormat } from '../../utils';
import { formatNumber } from '../../utils';
import Link from "next/link";
import Image from "next/image";
import ArrowRight from "/assets/icon-arrow-right.svg";
import styles from "./invoiceOverview.module.scss";


const InvoiceOverview = ({ invoice }: {invoice: Invoice}) => {

  return (
    <Link href={"invoice/" + invoice.id}>
      <div className={styles.card}>
        <div className={styles.invoiceID}>
          <span>#</span>
          {invoice.id}
        </div>
        <div className={styles.clientName}>{invoice.clientName}</div>
        <div className={styles.paymentDue}>
          Due <span>{dateDDMMYYFormat(invoice.paymentDue)}</span>
        </div>
        <div className={styles.total}>£ {formatNumber(invoice.total)}</div>
        <div
          className={
            `${styles.status}
                ` + styles[invoice.status]
          }
        >
          <div className={styles.statusBox}>
            <div className={styles.dot}></div>
            {invoice.status}
          </div>
        </div>
        <Image
          className={styles.arrowRight}
          src={ArrowRight}
          alt=""
        />
      </div>
    </Link>
  );
};

export default InvoiceOverview;