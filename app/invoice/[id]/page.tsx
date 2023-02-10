import { use } from "react";

/* import { getInvoiceById, getInvoices } from "lib/invoices"; */
import { prisma } from "lib/prismadb";

import { DrawerProvider } from "contexts/drawerOpeningContext";
import styles from "app/page.module.scss";
import InvoicePage from "components/Main/InvoicePage";

type Params = {
  id: string,
  searchParams: {}
};

type Props = {
  params: Params;
};

async function getInvoices() {
  const invoices = await prisma.invoice.findMany();
  return invoices;
}

async function getInvoiceById(id: string) {
  const invoice = await prisma.invoice.findUnique({
    where: { id },
    include: {
      Items: {},
    },
  });
  return invoice;
}


const Invoice = ({ params }: Props) => {
  const { id } = params;
  const invoice = use(getInvoiceById(id));

  return (
    <div key={id} className={styles.container}>
      <DrawerProvider >
        <InvoicePage invoice={invoice} />
      </DrawerProvider>
    </div>
  );
};

export default Invoice;

export async function generateStaticParams() {
  const invoices = await getInvoices();

  return invoices?.map((invoice) => ({
    id: invoice.id,
  }));
}
