import { prisma } from "../lib/prismadb";

async function main() {
  const invoice1 = await prisma.invoice.upsert({
    where: { id: "RT3080" },
    update: {},
    create: {
      id: "RT3080",
      createdAt: new Date("2021-08-18"),
      paymentDue: new Date("2021-08-19"),
      description: "Re-branding",
      paymentTerms: 1,
      clientName: "Jensen Huang",
      clientEmail: "jensenh@mail.com",
      status: "paid",
      senderAddress_street: "19 Union Terrace",
      senderAddress_city: "London",
      senderAddress_postCode: "E1 3EZ",
      senderAddress_country: "United Kingdom",
      clientAddress_street: "106 Kendell Street",
      clientAddress_city: "Sharrington",
      clientAddress_postCode: "NR24 5WQ",
      clientAddress_country: "United Kingdom",
      total: 1800.9,
      Items: {
        create: [
          {
            item_name: "Brand Guidelines",
            item_quantity: 1,
            item_price: 1800.9,
            item_total: 1800.9,
          },
        ],
      },
    },
  });

  const invoice2 = await prisma.invoice.upsert({
    where: { id: "XM9141" },
    update: {},
    create: {
      id: "XM9141",
      createdAt: new Date("2021-08-21"),
      paymentDue: new Date("2021-09-20"),
      description: "Graphic Design",
      paymentTerms: 1,
      clientName: "Alex Grim",
      clientEmail: "alexgrim@mail.com",
      status: "pending",
      senderAddress_street: "19 Union Terrace",
      senderAddress_city: "London",
      senderAddress_postCode: "E1 3EZ",
      senderAddress_country: "United Kingdom",
      clientAddress_street: "84 Church Way",
      clientAddress_city: "Bradford",
      clientAddress_postCode: "BD1 9PB",
      clientAddress_country: "United Kingdom",
      total: 556,
      Items: {
        create: [
          {
            item_name: "Banner Design",
            item_quantity: 1,
            item_price: 156,
            item_total: 156,
          },
          {
            item_name: "Email design",
            item_quantity: 2,
            item_price: 200,
            item_total: 400,
          },
        ],
      },
    },
  });

  const invoice3 = await prisma.invoice.upsert({
    where: { id: "RG0314" },
    update: {},
    create: {
      id: "RG0314",
      createdAt: new Date("2021-09-24"),
      paymentDue: new Date("2021-10-01"),
      description: "Website Redesign",
      paymentTerms: 7,
      clientName: "John Morrison",
      clientEmail: "jm@myco.com",
      status: "paid",
      senderAddress_street: "19 Union Terrace",
      senderAddress_city: "London",
      senderAddress_postCode: "E1 3EZ",
      senderAddress_country: "United Kingdom",
      clientAddress_street: "79 Dover Road",
      clientAddress_city: "Westhall",
      clientAddress_postCode: "IP19 3PF",
      clientAddress_country: "United Kingdom",
      total: 14002.33,
      Items: {
        create: [
          {
            item_name: "Website Redesign",
            item_quantity: 1,
            item_price: 14002.33,
            item_total: 14002.33,
          },
        ],
      },
    },
  });

  const invoice4 = await prisma.invoice.upsert({
    where: { id: "RT2080" },
    update: {},
    create: {
      id: "RT2080",
      createdAt: new Date("2021-10-11"),
      paymentDue: new Date("2021-10-12"),
      description: "Logo Concept",
      paymentTerms: 1,
      clientName: "Alyssa Werner",
      clientEmail: "alyssa@email.co.uk",
      status: "pending",
      senderAddress_street: "19 Union Terrace",
      senderAddress_city: "London",
      senderAddress_postCode: "E1 3EZ",
      senderAddress_country: "United Kingdom",
      clientAddress_street: "63 Warwick Road",
      clientAddress_city: "Carlisle",
      clientAddress_postCode: "CA20 2TG",
      clientAddress_country: "United Kingdom",
      total: 102.04,
      Items: {
        create: [
          {
            item_name: "Logo Sketches",
            item_quantity: 1,
            item_price: 102.04,
            item_total: 102.04,
          },
        ],
      },
    },
  });

  const invoice5 = await prisma.invoice.upsert({
    where: { id: "AA1449" },
    update: {},
    create: {
      id: "AA1449",
      createdAt: new Date("2021-10-07"),
      paymentDue: new Date("2021-10-14"),
      description: "Re-branding",
      paymentTerms: 7,
      clientName: "Mellisa Clarke",
      clientEmail: "mellisa.clarke@example.com",
      status: "pending",
      senderAddress_street: "19 Union Terrace",
      senderAddress_city: "London",
      senderAddress_postCode: "E1 3EZ",
      senderAddress_country: "United Kingdom",
      clientAddress_street: "46 Abbey Row",
      clientAddress_city: "Cambridge",
      clientAddress_postCode: "CB5 6EG",
      clientAddress_country: "United Kingdom",
      total: 4032.33,
      Items: {
        create: [
          {
            item_name: "New Logo",
            item_quantity: 1,
            item_price: 1532.33,
            item_total: 1532.33,
          },
          {
            item_name: "Brand Guidelines",
            item_quantity: 1,
            item_price: 2500,
            item_total: 2500,
          },
        ],
      },
    },
  });

  const invoice6 = await prisma.invoice.upsert({
    where: { id: "TY9141" },
    update: {},
    create: {
      id: "TY9141",
      createdAt: new Date("2021-10-01"),
      paymentDue: new Date("2021-10-31"),
      description: "Landing Page Design",
      paymentTerms: 30,
      clientName: "Thomas Wayne",
      clientEmail: "homas@dc.com",
      status: "pending",
      senderAddress_street: "19 Union Terrace",
      senderAddress_city: "London",
      senderAddress_postCode: "E1 3EZ",
      senderAddress_country: "United Kingdom",
      clientAddress_street: "3964 Queens Lane",
      clientAddress_city: "Gotham",
      clientAddress_postCode: "60457",
      clientAddress_country: "United States of America",
      total: 6155.91,
      Items: {
        create: [
          {
            item_name: "Web Design",
            item_quantity: 1,
            item_price: 6155.91,
            item_total: 6155.91,
          },
        ],
      },
    },
  });

  const invoice7 = await prisma.invoice.upsert({
    where: { id: "FV2353" },
    update: {},
    create: {
      id: "FV2353",
      createdAt: new Date("2021-11-05"),
      paymentDue: new Date("2021-11-12"),
      description: "Logo Re-design",
      paymentTerms: 1,
      clientName: "Anita Wainwright",
      clientEmail: "",
      status: "draft",
      senderAddress_street: "19 Union Terrace",
      senderAddress_city: "London",
      senderAddress_postCode: "E1 3EZ",
      senderAddress_country: "United Kingdom",
      clientAddress_street: "",
      clientAddress_city: "",
      clientAddress_postCode: "",
      clientAddress_country: "",
      total: 3102.04,
      Items: {
        create: [
          {
            item_name: "Logo Re-design",
            item_quantity: 1,
            item_price: 3102.04,
            item_total: 3102.04,
          },
        ],
      },
    },
  });

  console.log({ invoice1, invoice2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
