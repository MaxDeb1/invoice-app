import React from 'react';
import { useFormContext } from "react-hook-form";
import styles from '../invoiceForm.module.scss';

const BillFrom = () => {
    const { register } = useFormContext();

    return (
        <div className={styles.billFrom}>
            <h2>Bill From</h2>
            <label className={styles.street}>
                Street Address
                <input type="text"
                {...register("senderAddress_street")}/>
            </label>
            <label className={styles.city}>
                City
                <input type="text"
                {...register("senderAddress_city")}/>
            </label>
            <label className={styles.postCode}>
                Post Code
                <input type="text"
                {...register("senderAddress_postCode")}/>
            </label>
            <label className={styles.country}>
                Country
                <input type="text"
                {...register("senderAddress_country")}/>
            </label>
        </div>
    );
};

export default BillFrom;