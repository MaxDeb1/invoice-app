import React from 'react';
import { useFormContext } from "react-hook-form";
import styles from '../invoiceForm.module.scss';

const BillFrom = ({invoicesData}) => {
    const { register } = useFormContext();

    return (
        <div className={styles.billFrom}>
            <h2>Bill From</h2>
            <label className={styles.street}>
                Street Address
                <input type="text" name="addSenderAddress_street" defaultValue={invoicesData[0] ? invoicesData[0].senderAddress_street : ""}/>
            </label>
            <label className={styles.city}>
                City
                <input type="text" name="addSenderAddress_city" defaultValue={invoicesData[0] ? invoicesData[0].senderAddress_city : ""}/>
            </label>
            <label className={styles.postCode}>
                Post Code
                <input type="text" name="addSenderAddress_postCode" defaultValue={invoicesData[0] ? invoicesData[0].senderAddress_postCode : ""}/>
            </label>
            <label className={styles.country}>
                Country
                <input type="text" name="addSenderAddress_country" defaultValue={invoicesData[0] ? invoicesData[0].senderAddress_country : ""}/>
            </label>
        </div>
    );
};

export default BillFrom;