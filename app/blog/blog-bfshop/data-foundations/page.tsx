import { BackPillLink } from '../../../components/ui/back-pill-link';

export default function DataFoundationsPage() {
  const entities = [
    {
      eyebrow: 'Core Entity',
      title: 'Customer',
      body: 'Stores the identity and contact details of the person placing orders and interacting with the storefront.',
      meta: 'Properties to document: name, email, phone, account status',
    },
    {
      eyebrow: 'Commerce Entity',
      title: 'Product',
      body: 'Defines the items being sold, including their pricing, stock position, and how they should appear in the storefront.',
      meta: 'Properties to document: title, price, stock, SKU, description',
    },
    {
      eyebrow: 'Transaction Entity',
      title: 'Order',
      body: 'Captures the final purchase record, connecting customers, products, totals, and the current order lifecycle state.',
      meta: 'Properties to document: order total, status, timestamps, payment reference',
    },
    {
      eyebrow: 'Line Item Entity',
      title: 'OrderItem',
      body: 'Represents each individual product entry inside an order, linking the order record to the purchased product and quantity.',
      meta: 'Properties to document: quantity, unit price, order id, product id',
    },
    {
      eyebrow: 'Monitoring Entity',
      title: 'AI Log',
      body: 'Records AI actions, decisions, and outputs so the system can track behaviour, support oversight, and enable review.',
      meta: 'Properties to document: action type, timestamp, model output, linked context',
    },
  ];

  return (
    <main className="min-h-screen bg-subtle-dark-gradient text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
        <section className="mb-10 md:mb-14 lg:mb-16">
          <BackPillLink href="/blog/blog-bfshop" />
        </section>

        <section className="page-header-stack page-header-tight text-center">
          <h1 className="font-inter text-5xl font-bold tracking-tight">Data Foundations</h1>
          <p className="mx-auto max-w-3xl card-body text-zinc-300">
            BFshop is founded on data entities. These are the entities and their properties. The database used for these is Neon, with prisma linking it to the project.
          </p>
        </section>

        <section className="page-section-gap">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {entities.map((entity) => (
              <article key={entity.title} className="surface-raised min-h-[22rem] p-5 text-left text-white">
                <div className="card-stack h-full justify-between">
                  <div className="card-stack">
                    <p className="card-eyebrow accent-electric-blue">{entity.eyebrow}</p>
                    <h2 className="card-title text-white">{entity.title}</h2>
                    <p className="card-body text-zinc-300">{entity.body}</p>
                  </div>

                  <p className="card-meta text-zinc-500">{entity.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}