import React, { useState } from 'react';
import { useFormContext } from "react-hook-form";
import styles from '../../invoiceForm.module.scss';

interface NewItemProps {
    index: number,
    newItem: number[],
    setNewItem: React.Dispatch<React.SetStateAction<number[]>>
}

const NewItem = ({ index, newItem, setNewItem}: NewItemProps) => {
    const { register, setValue, getValues } = useFormContext();

    const deleteItem = (index: number) => () => {
        setNewItem((newItem) => newItem.filter((_, i) => i !== index)
        );
    }

    return (
        <div className={styles.newItem}>
            <input type="text" {...register("item_name")}/>
            <input
                type= "number"
                min= "0"
                {...register("item_quantity", {
                    valueAsNumber: true
                })} 
            />
            <input
                type= "number"
                min= "0"
                step="any"
                {...register("item_price", {
                    valueAsNumber: true,
                    onChange: (evt) => {
                        const [quantity] = getValues(['item_quantity'])
                        const ml =
                        (parseFloat(quantity) * parseFloat(evt.target.value))
                        if (!isNaN(ml)) {
                            setValue('item_total', ml.toFixed(2))
                        }
                    }
                })} 
            />
            <input
                {...register("item_total", {
                    valueAsNumber: true
                })} 
            />
            <div className={styles.delete} onClick={deleteItem(index)}>
                <img src="./assets/icon-delete.svg" alt="" />
            </div>
        </div>
    );
};

export default NewItem;