import { use } from "react";

import { getInvoiceById, getInvoices } from "lib/invoices";
import { DrawerProvider } from "contexts/drawerOpeningContext";
import styles from "app/page.module.scss";
import InvoicePage from "components/Main/InvoicePage";

type Params = {
  id: string;
  clientName: string;
};

type Props = {
  params: Params;
};


const Invoice = ({ params }: Props) => {
  const { invoice } = use(getInvoiceById(params.id));

  return (
    <div key={params.id} className={styles.container}>
      <DrawerProvider >
        <InvoicePage invoice={invoice} />
      </DrawerProvider>
    </div>
  );
};

export default Invoice;

export async function generateStaticParams() {
  const { invoices } = await getInvoices();

  return invoices?.map((invoice) => ({
    id: invoice.id,
  }));
}
