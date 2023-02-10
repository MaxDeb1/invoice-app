/* import { getInvoices } from "lib/invoices"; */
import { prisma } from "lib/prismadb";
import { DrawerProvider } from "contexts/drawerOpeningContext";
import { StatusFilterProvider } from "contexts/statusFilterContext";
import { Suspense } from "react";
import Loading from "./loading";
import Main from "components/Main";
import styles from "./page.module.scss";


async function getInvoices() {
  const invoices = await prisma.invoice.findMany();
  return invoices;
}

const Home = async () => {
  const invoices = await getInvoices();

  return (
    <div className={styles.container}>
      <DrawerProvider>
        <StatusFilterProvider>
          <Suspense fallback={<Loading />}>
            <Main invoices={invoices}/>
          </Suspense>
        </StatusFilterProvider>
      </DrawerProvider>
    </div>
  );
};

export default Home;