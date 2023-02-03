"use client";

import { StatusFilterContext } from "contexts/statusFilterContext";
import Image from "next/image";
import ArrowDown from "/assets/icon-arrow-down.svg";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./filter.module.scss";

interface IProps {
  match: boolean;
}

const Filter = ({ match }: IProps) => {
  const node = useRef<HTMLDivElement>(null!);
  const [open, setOpen] = useState(false);

  const options: string[] = ["Draft", "Pending", "Paid"];
  const [checkedState, setCheckedState] = useState(
    new Array(options.length).fill(true)
  );

  const { filters, setFilters } = useContext(StatusFilterContext);

  useEffect(() => {
    const closeOpenMenus = (e: MouseEvent) => {
      const target = e.target as HTMLInputElement;
      if (node.current && !node.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeOpenMenus);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus);
    };
  }, [open]);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    setFilters((prevState: typeof filters ) => {
      let filter = new Set(prevState.filter);
      let value = options[position].toLowerCase();
      let unchecked = checkedState[position];

      unchecked ? filter.delete(value) : filter.add(value);

      return {
        filter,
      };
    });
  };

  return (
    <div
      className={`${styles["dropdown"]} ${open ? styles["active"] : ""}`}
      ref={node}
    >
      <button className={styles.dropbtn} onClick={() => setOpen(!open)}>
        {match ? "Filter" : "Filter by status"}
        <Image src={ArrowDown} alt="" />
      </button>
      {open && (
        <ul className={styles.filter}>
          {options.map((input, index) => {
            return (
              <li key={index} className={styles.option}>
                <input
                  id={`box${index + 1}`}
                  type="checkbox"
                  value={input}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                />
                <label htmlFor={`#box${index + 1}`}>{input}</label>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Filter;