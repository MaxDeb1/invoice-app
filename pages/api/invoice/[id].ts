import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prismadb";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const invoiceId = req.query.id;

  switch (req.method) {
    case "DELETE":
      return handleDELETE(invoiceId, res);

    default:
      throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
      );
  }
}

// DELETE /api/invoice/:id
async function handleDELETE(invoiceId: string, res: NextApiResponse<any>) {
  const invoice = await prisma.invoice.delete({
    where: { id: invoiceId },
  });
  return res.json(invoice);
}
