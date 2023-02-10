import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prismadb";

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const invoiceId = req.query.id;
  const newStatus = (JSON.parse(req.body) === 'draft') ? 'pending' : 'paid';
    
  const changeStatus = await prisma.invoice.update({
    where: { 
      id: invoiceId,
    },
    data: {
      status: newStatus
    },
  });

  res.json(changeStatus);
}