import React from 'react';
import styles from './AddNewItemBtn.module.scss';

interface NewItemProps {
    newItem: number[],
    setNewItem: React.Dispatch<React.SetStateAction<number[]>>
}

const AddNewItemBtn = ({newItem, setNewItem}: NewItemProps ) => {

    const addNewItem = () => {
        setNewItem([...newItem, parseInt(newItem.at(-1)) + 1])
    }

    return (
        <button type="button" className={styles.addBtn} onClick={addNewItem}>
            <img src="./assets/icon-plus.svg" alt=""/>
            Add New Item
        </button>
    );
};

export default AddNewItemBtn;