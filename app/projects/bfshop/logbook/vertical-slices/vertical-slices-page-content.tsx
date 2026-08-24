import { BackPillLink } from '../../../../components/ui/back-pill-link';
import Link from 'next/link';
import { PlaceOrderSlice } from './slice-content';

export default function VerticalSlicesPageContent() {
    const slices = [

    {
      title: 'Place Order',
      content: <PlaceOrderSlice />,
      meta: 'Status: in progress',
      href: '/projects/bfshop/logbook/vertical-slices/place-order',
    },
    {
      title: 'Manage Orders',
      body: 'The merchant-side flow for receiving, reviewing, and progressing new customer orders.',
      meta: 'Status: documented',
      href: '/projects/bfshop/logbook/vertical-slices/receive-order',
    },

    {
      title: 'Data Generation',
      body: 'The generation of business data to provide data for BFshop.',
      meta: 'Status: In progress',
      
    },
    {
      title: 'Metric Storage',
      body: 'This slice will involve calculating business metrics from the generated business data and storing it.',
      meta: 'Status: early design stage',
    },
    {
      title: 'AI analysis',
      body: 'This slice will involve feeding select data to AI for presentation to the user.',
      meta: 'Status: early design stage',
    },
  ];

    return (
        <>
      <main className="min-h-screen bg-subtle-dark-gradient text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
          <section className="mb-10 md:mb-14 lg:mb-16">
            <BackPillLink href="/projects/bfshop" />
          </section>

          <section className="page-header-stack page-header-tight text-center">
            <div className="page-header-stack page-header-tight text-center">
              <h1 className="font-inter text-5xl font-bold tracking-tight">Slices</h1>
              <p className="mx-auto max-w-3xl card-body text-zinc-300">
                Rather than building the whole frontend and then backend separately, I am building each function of the shop as a vertical slice, from where it is interacted with in the frontend to where it connects to the database. Each slice can be seen below and its details will be written in as development continues.
              </p>
            </div>
          </section>
          <section className="page-section-gap">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {slices.map((slice) => (
                <article
                  key={slice.title}
                  className="surface-raised min-h-[24rem] p-5 text-left text-white"
                >
                  <div className="card-stack h-full justify-between">
                    <div className="card-stack">
                      <h2 className="card-title text-white">{slice.title}</h2>
                      {slice.href ? (
                        <Link
                          href={slice.href}
                          className="card-body accent-electric-blue underline-offset-4 hover:underline"
                        >
                          {slice.title === 'Place Order' ? 'Read Slice 1' : 'Read Slice 2'}
                        </Link>
                      ) : null}
                      {slice.body ? <p className="card-body text-zinc-300">{slice.body}</p> : null}
                      {slice.content ? <div className="card-body text-zinc-300">{slice.content}</div> : null}
                    </div>

                    <p className="card-meta text-zinc-500">{slice.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
        </>
    );
}
