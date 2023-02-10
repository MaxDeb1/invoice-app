import type { Invoice, Items } from '@prisma/client';

export type InvoiceType = {
  id: string
  createdAt: Date
  paymentDue: Date
  description: string | null
  paymentTerms: number
  clientName: string
  clientEmail: string | null
  status: string
  senderAddress_street: string | null
  senderAddress_city: string | null
  senderAddress_postCode: string | null
  senderAddress_country: string | null
  clientAddress_street: string | null
  clientAddress_city: string | null
  clientAddress_postCode: string | null
  clientAddress_country: string | null
  total: Prisma.Decimal
  Items: Items[]
}

export type ItemsType = {
  item_id: number
  invoice_id: string
  item_name: string | null
  item_quantity: number | null
  item_price: Prisma.Decimal | null
  item_total: Prisma.Decimal
}