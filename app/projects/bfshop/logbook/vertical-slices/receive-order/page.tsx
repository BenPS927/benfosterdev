import type { Metadata } from 'next';
import JsonLd from '@/app/components/shared/jsonld';
import { BackPillLink } from '@/app/components/ui/back-pill-link';
import ReceiveOrderDocument from '../receive-order-document';

export const metadata: Metadata = {
    title: 'Slice 2 | BFshop Project Portal',
    description: 'Documentation for the BFshop Receive Order vertical slice.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Slice 2 | BFshop Project Portal',
    name: 'Slice 2',
    description: 'Documentation for the BFshop Receive Order vertical slice.',
    url: 'https://benfosterdev.com/projects/bfshop/logbook/vertical-slices/receive-order',
    author: {
        '@type': 'Person',
        name: 'Ben Foster',
        url: 'https://benfosterdev.com',
    },
    isPartOf: {
        '@type': 'WebPage',
        name: 'BFshop Building Method',
        url: 'https://benfosterdev.com/projects/bfshop/logbook/vertical-slices',
    },
};

export default function ReceiveOrderSlicePage() {
    return (
        <>
            <JsonLd schema={schema} />
            <main className="min-h-screen bg-subtle-dark-gradient text-white">
                <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
                    <section className="mb-10 md:mb-14 lg:mb-16">
                        <BackPillLink href="/projects/bfshop/logbook/vertical-slices" label="Back to Slices" />
                    </section>

                    <section className="page-header-stack page-header-tight text-center">
                        <h1 className="font-inter text-5xl font-bold tracking-tight">Slice 2</h1>
                        <p className="mx-auto max-w-3xl card-body text-zinc-300">
                            Documentation for the merchant-side Receive Order flow and order status progression.
                        </p>
                    </section>

                    <section className="page-section-gap">
                        <article className="surface-raised p-6 md:p-8 lg:p-10">
                            <ReceiveOrderDocument />
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}