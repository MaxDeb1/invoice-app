"use client";

import { ItemsType } from '../../../@types/invoice';
import { formatNumber } from '../../../utils';
import useMatchMedia from "hooks/useMatchMedia";
import styles from "../invoiceDetails.module.scss";

const Bottom = ({ invoiceItems }: {invoiceItems: ItemsType[] }) => {
  const match: boolean = useMatchMedia();

  const total = invoiceItems.reduce((accumulator, currentValue) => accumulator + Number(currentValue.item_total), 0)

  return (
    <div className={styles.bottom}>
      {match ?? (
      <div
        className={`${styles["headerCells"]} ${match ? "" : styles["desktop"]}`}
      >
        <div className={styles.itemName}>Item Name</div>
        <div className={styles.quantity}>QTY</div>
        <div className={styles.price}>Price</div>
        <div className={styles.total}>Total</div>
      </div>
      )}
      {invoiceItems.map(({item_id, item_name, item_quantity, item_price, item_total}) => (
          <div key={item_id} className={styles.itemDetails}>
            <div className={styles.name}>{item_name}</div>
            {match ? (
              <div className={styles.command}>{item_quantity} x £ {item_price}</div>
            ) : (
              <>
                <div className={styles.quantity}>{item_quantity}</div>
                <div className={styles.price}>£ {item_price}</div>
              </>
            )}
            <div className={styles.total}>£ {item_total}</div>
          </div>
      ))}
        <div className={styles.grandTotal}>
          <div className={styles.grandTotal_title}>
            {match ? "Grand Total" : "Total"}
          </div>
          <div className={styles.grandTotal_price}>£ {formatNumber(total)}</div>
        </div>
    </div>
  );
};

export default Bottom;