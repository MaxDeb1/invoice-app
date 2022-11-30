import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prismadb";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const invoiceId = req.query.id;

  if (req.method === "GET") {
    handleGET(invoiceId, res);
  } else if (req.method === "DELETE") {
    handleDELETE(invoiceId, res);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}

// GET /api/invoice/:id
async function handleGET(invoiceId, res) {
  const invoice = await prisma.invoice.findUnique({
    where: {
      id: invoiceId,
    },
  });
  res.json(invoice);
}

// DELETE /api/invoice/:id
async function handleDELETE(invoiceId, res) {
  const invoice = await prisma.invoice.delete({
    where: {
      id: invoiceId,
    },
  });
  res.json(invoice);
}
