import { BackPillLink } from '../../../../components/ui/back-pill-link';
import Link from 'next/link';
import { PlaceOrderSlice } from './slice-content';

export default function VerticalSlicesPageContent() {
    const slices = [

    {
      eyebrow: 'Commerce Slice',
      title: 'Place Order',
      content: <PlaceOrderSlice />,
      meta: 'Status: in progress',
    },
    {
      eyebrow: 'Operations Slice',
      title: 'Receive Order',
      body: 'This slice will cover the merchant-side flow for receiving, reviewing, and progressing new customer orders.',
      meta: 'Status: early design stage',
    },

    {
      eyebrow: 'Support Slice',
      title: 'Customer service AI',
      body: 'This slice will define how AI supports customer questions, order lookups, and issue handling using live business data.',
      meta: 'Status: early design stage',
    },
    {
      eyebrow: 'Assistant Slice',
      title: 'AI assistant',
      body: 'This slice will focus on the merchant-facing assistant layer that helps with tasks, decisions, and operational visibility.',
      meta: 'Status: early design stage',
    },
    {
      eyebrow: 'Oversight Slice',
      title: 'AI Overwatch',
      body: 'This slice will document the oversight layer used to monitor AI behaviour, capabilities, and safe system usage.',
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
                                            <p className="card-eyebrow accent-electric-blue">{slice.eyebrow}</p>
                      <h2 className="card-title text-white">{slice.title}</h2>
                      {slice.body ? <p className="card-body text-zinc-300">{slice.body}</p> : null}
                      {slice.content ? (
                        <Link
                          href="/projects/bfshop/logbook/vertical-slices/place-order"
                          className="card-body accent-electric-blue underline-offset-4 hover:underline"
                        >
                          {slice.content}
                        </Link>
                      ) : null}
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
