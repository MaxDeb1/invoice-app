import React, { useState } from 'react';
import AddNewItemBtn from '../../Buttons/AddNewItemBtn';
import styles from '../invoiceForm.module.scss';
import NewItem from './NewItem';

const ItemList = () => {
    const [ newItem, setNewItem ] = useState([1]);

    return (
        <div className={styles.itemList}>
            <h2>Item List</h2>
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

            {newItem.map((i, index) => ( 
                <NewItem 
                    key={i} 
                    index={index} 
                    newItem={newItem} 
                    setNewItem={setNewItem}
                /> 
            ))} 

            <AddNewItemBtn newItem={newItem} setNewItem={setNewItem} />
        </div>
    );
};

export default ItemList;