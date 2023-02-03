"use client";

import Image from "next/image";
import trashIcon from "/assets/icon-delete.svg";
import { UseFieldArrayRemove, useFormContext } from "react-hook-form";
import styles from "../../invoiceForm.module.scss";

interface NewItemProps {
  index: number;
  remove: UseFieldArrayRemove;
}

const NewItem = ({ index, remove }: NewItemProps) => {
  const { register, setValue, getValues } = useFormContext();

  const removeItem = (index: number) => () => {
    remove(index);
  };

  return (
    <div className={styles.newItem}>
      <input type="text" {...register(`items[${index}].item_name` as const)} />
      <input
        type="number"
        min="0"
        {...register(`items[${index}].item_quantity` as const, {
          valueAsNumber: true,
        })}
      />
      <input
        type="number"
        min="0"
        step="any"
        {...register(`items[${index}].item_price` as const, {
          valueAsNumber: true,
          onChange: (evt) => {
            const [quantity] = getValues([`items[${index}].item_quantity`]);
            const ml = parseFloat(quantity) * parseFloat(evt.target.value);
            if (!isNaN(ml)) {
              setValue(`items[${index}].item_total`, ml.toFixed(2));
            }
          },
        })}
      />
      <input
        type="number"
        {...register(`items[${index}].item_total` as const, {
          valueAsNumber: true,
        })}
      />
      <div className={styles.delete} onClick={removeItem(index)}>
        <Image alt="trash" src={trashIcon} />
      </div>
    </div>
  );
};

export default NewItem;
