/* import { InvoiceDataType } from "../@types/invoice"; */
import type { Invoice } from '@prisma/client'
import { prisma } from "../lib/prismadb";

export async function getInvoices() {
  try {
    const invoices: Invoice[] = await prisma.invoice.findMany();
    return { invoices };
  } catch (error) {
    return { error };
  }
}

export async function createInvoice(invoice: Invoice) {
  try {
    const newInvoice = await prisma.invoice.create({
      data: invoice,
    });
    return { invoice: newInvoice };
  } catch (error) {
    return { error };
  }
}

export async function getInvoiceById(id: string) {
  try {
    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: {
        Items: {},
      },
    }
    );
    return { invoice };
  } catch (error) {
    return { error };
  }
}
