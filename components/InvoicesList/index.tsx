"use client";

import type { Invoice } from '@prisma/client'
import InvoiceOverview from "components/InvoiceOverview";

const InvoicesList = ({invoices}: {invoices: Invoice[]}) => {

    return (
      <>
        {invoices.map((invoice) => (
          <InvoiceOverview key={invoice.id} invoice={invoice} />
        ))}
      </>
    );
};

export default InvoicesList;