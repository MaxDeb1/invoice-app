import { prisma } from "../lib/prismadb";

export async function getInvoices() {
  try {
    const invoices = await prisma.invoice.findMany();
    return { invoices };
  } catch (error) {
    return { error };
  }
}

export async function createInvoice(invoice) {
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
    });
    return { invoice };
  } catch (error) {
    return { error };
  }
}
