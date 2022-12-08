import DashboardCard from "components/DashboardCard";
import NewInvoice from "components/InvoiceForm/NewInvoice";
import { DrawerProvider } from "../components/Buttons/NewInvoiceBtn";
import Header from "../components/MainPageHeader";
import { getInvoices } from "../lib/invoices";
import styles from "./page.module.scss";

export interface InvoicesData {
  invoices: {
    clientAddress_city: string;
    clientAddress_country: string;
    clientAddress_postCode: string;
    clientAddress_street: string;
    clientEmail: string;
    clientName: string;
    createdAt: Date;
    description: string;
    id: string;
    paymentDue: string;
    paymentTerms: number;
    senderAddress_city: string;
    senderAddress_country: string;
    senderAddress_postCode: string;
    senderAddress_street: string;
    status: string;
    total: number;
    Items: [
      {
        item_name: string;
        item_quantity: number;
        item_price: number;
        item_total: number;
      }
    ];
  };
}
[];

const Home = async () => {
  const { invoices } = await getInvoices();
  const numOfItems = invoices?.length;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <DrawerProvider>
          <Header numOfItems={numOfItems} />
          <NewInvoice />
          {invoices?.map((invoice) => (
            <DashboardCard key={invoice.id} invoice={invoice} />
          ))}
        </DrawerProvider>
      </main>
    </div>
  );
};

export default Home;
