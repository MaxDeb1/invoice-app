export const dateDDMMYYFormat = (date: Date | string) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [year, month, day] = date.toString().substring(0, 10).split("-");
  const mth = monthNames[parseInt(month, 10) - 1];
  /* const [month, day, year] = date.toString().substring(4, 15).split(" "); */
  return `${day} ${mth} ${year}`;
}


import { Decimal } from "@prisma/client/runtime";

export const formatNumber = (total: Decimal| number) => (
  Number(total).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ",")
)
