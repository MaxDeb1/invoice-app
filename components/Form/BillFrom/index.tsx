"use client";

import React from 'react';
import { useFormContext } from "react-hook-form";
import styles from '../invoiceForm.module.scss';

const BillFrom = () => {
    const { register } = useFormContext();

    return (
        <fieldset className={styles.billFrom}>
            <legend>Bill From</legend>
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
        </fieldset>
    );
};

export default BillFrom;