"use client";

import Link from "next/link";
import styles from "./dashboardCard.module.scss";

const DashboardCard = ({ invoice }) => {
  const date = invoice.paymentDue;
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const NewDateFormat = () => {
    const [year, month, day] = date.toString().substring(0, 10).split("-");
    const mth = monthNames[parseInt(month, 10) - 1];

    return `${day} ${mth} ${year}`;
  };
  const paymentDue = NewDateFormat()

  const total = Number(invoice.total).toFixed(2);

  return (
    <Link href={"invoice/" + invoice.id}>
      <div className={styles.card}>
        <div className={styles.invoiceID}>
          <span>#</span>
          {invoice.id}
        </div>
        <div className={styles.clientName}>{invoice.clientName}</div>
        <div className={styles.paymentDue}>
          Due <span>{paymentDue}</span>
        </div>
        <div className={styles.total}>£ {total}</div>
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
        <img
          className={styles.arrowRight}
          src="./assets/icon-arrow-right.svg"
          alt=""
        />
      </div>
    </Link>
  );
};

export default DashboardCard;
