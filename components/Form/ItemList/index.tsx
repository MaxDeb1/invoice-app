"use client";

import { useFormContext, useFieldArray } from "react-hook-form";
import AddNewItemBtn from '../../Buttons/AddNewItemBtn';
import styles from '../invoiceForm.module.scss';
import NewItem from './NewItem';

const ItemList = () => {
    const { control } = useFormContext();

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
    });

    return (
        <fieldset className={styles.itemList}>
            <legend>Item List</legend>
            <label className={styles.itemName}>
                Item Name
            </label>
            <label className={styles.quantity}>
                Qty.
            </label>
            <label className={styles.price}>
                Price
            </label>
            <label className={styles.total}>
                Total
            </label>
            <div className={styles.ghost} ></div>

            {fields.map((field, index) => (
                <NewItem 
                    key={field.id}
                    index={index}
                    remove={remove}
                />
            ))}

            <AddNewItemBtn append={append} />

        </fieldset>
    );
};

export default ItemList;