import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../lib/prismadb";

const existingIDs = ["AA1111", "XY1234"];
const getRandomLetters = (length = 1) =>
  Array(length)
    .fill()
    .map((e) => String.fromCharCode(Math.floor(Math.random() * 26) + 65))
    .join("");
const getRandomDigits = (length = 1) =>
  Array(length)
    .fill()
    .map((e) => Math.floor(Math.random() * 10))
    .join("");
const generateUniqueID = () => {
  let id = getRandomLetters(2) + getRandomDigits(4);
  while (existingIDs.includes(id))
    id = getRandomLetters(2) + getRandomDigits(4);
  return id;
};
const newID = generateUniqueID();

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    clientAddress_city,
    clientAddress_country,
    clientAddress_postCode,
    clientAddress_street,
    clientEmail,
    clientName,
    createdAt,
    description,
    items: [
      {
        item_name,
        item_price,
        item_quantity,
        item_total,
      }
    ],
    paymentTerms,
    senderAddress_city,
    senderAddress_country,
    senderAddress_postCode,
    senderAddress_street,
  } = req.body;

  const getCreatedAt = new Date(createdAt);
  const addPaymentDue = getCreatedAt.setDate(
    getCreatedAt.getDate() + Number(paymentTerms)
  );

  const saveInvoice = await prisma.invoice.create({
    data: {
      id: newID,
      createdAt: new Date(createdAt),
      paymentDue: new Date(addPaymentDue),
      description,
      paymentTerms: Number(paymentTerms),
      clientName,
      clientEmail,
      status: "draft",
      senderAddress_street,
      senderAddress_city,
      senderAddress_postCode,
      senderAddress_country,
      clientAddress_street,
      clientAddress_city,
      clientAddress_postCode,
      clientAddress_country,
      total: item_total,
      Items: {
        create: [
          {
            item_name,
            item_quantity,
            item_price,
            item_total,
          },
        ],
      },
    },
  });
  res.json(saveInvoice);
}
