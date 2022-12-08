import React, { useState } from 'react';
import { useFormContext } from "react-hook-form";
import styles from '../invoiceForm.module.scss';

const BillTo = () => {
    let dateObj = new Date()
    let year = dateObj.getFullYear()
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month: number | string = monthNames[dateObj.getMonth()]
    let day: number | string = dateObj.getDate()
    if (day < 10) day = '0' + day
    const today = `${day} ${month} ${year}`

    const [date, setDate] = useState(today);
    const onHandleChange = (e: { target: HTMLInputElement; }) => {
        let value = e.target.value;
        let arr = value.split('-').reverse();
        arr[1] = monthNames[Number(arr[1]) - 1]
        let newDate = arr.join(" ")
        setDate(newDate);
    }

    const { register } = useFormContext();

    return (
        <div className={styles.billTo}>
            <h2>Bill To</h2>
            <label className={styles.name}>
                {"Client's Name"}
                <input type="text" {...register("clientName")} />
            </label>
            <label className={styles.email}>
                {"Client's Email"}
                <input type="mail" {...register("clientEmail")} />
            </label>
            <label className={styles.street}>
                Street Address
                <input type="text" {...register("clientAddress_street")} />
            </label>
            <label className={styles.city}>
                City
                <input type="text" {...register("clientAddress_city")} />
            </label>
            <label className={styles.postCode}>
                Post Code
                <input type="text" 
                {...register("clientAddress_postCode")} />
            </label>
            <label className={styles.country}>
                Country
                <input type="text" {...register("clientAddress_country")} />
            </label>
            <div className={styles.break}></div> 
            <label>
                Invoice Date
                <div className={styles.datepickerToggle}>
                    <span className={styles.datepickerToggleButton} >{date}</span>
                    <input type="date" className={styles.datepickerInput} {...register("createdAt")}
                    onChange={onHandleChange}
                    />
                </div>
            </label>
            <label htmlFor='payment-terms' className={styles.paymentTerm}>
                Payment Terms
                <select {...register("paymentTerms")} id="payment-terms" defaultValue="Net 30 Days">
                    <option value="1">Net 1 Day</option>
                    <option value="7">Net 7 Days</option>
                    <option value="14">Net 14 Days</option>
                    <option value="30">Net 30 Days</option>
                </select>
            </label>
            <label className={styles.description}>
                Project Description
                <input type="text-area" {...register("description")} />
            </label>
        </div>
    );
};

export default BillTo;