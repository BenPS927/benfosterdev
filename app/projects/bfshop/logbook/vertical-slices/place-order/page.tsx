import type { Metadata } from 'next';
import JsonLd from '@/app/components/shared/jsonld';
import { BackPillLink } from '@/app/components/ui/back-pill-link';
import PlaceOrderDocument from '../place-order-document';

export const metadata: Metadata = {
    title: 'Place Order Slice | BFshop Project Portal',
    description: 'Documentation for the BFshop Place Order vertical slice.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'Place Order Slice | BFshop Project Portal',
    name: 'Place Order Slice',
    description: 'Documentation for the BFshop Place Order vertical slice.',
    url: 'https://benfosterdev.com/projects/bfshop/logbook/vertical-slices/place-order',
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
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'BFshop Project Portal',
                item: 'https://benfosterdev.com/projects/bfshop',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Vertical Slices',
                item: 'https://benfosterdev.com/projects/bfshop/logbook/vertical-slices',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Place Order Slice',
                item: 'https://benfosterdev.com/projects/bfshop/logbook/vertical-slices/place-order',
            },
        ],
    },
};

export default function PlaceOrderSlicePage() {
    return (
        <>
            <JsonLd schema={schema} />
            <main className="min-h-screen bg-subtle-dark-gradient text-white">
                <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
                    <section className="mb-10 md:mb-14 lg:mb-16">
                        <BackPillLink
                            href="/projects/bfshop/logbook/vertical-slices"
                            label="Back to Slices"
                        />
                    </section>

                    <section className="page-header-stack page-header-tight text-center">
                        <h1 className="font-inter text-5xl font-bold tracking-tight">Place Order</h1>
                        <p className="mx-auto max-w-3xl card-body text-zinc-300">
                            Documentation for the customer checkout flow and the path from submitted order to persisted data.
                        </p>
                    </section>

                    <section className="page-section-gap">
                        <article className="surface-raised p-6 md:p-8 lg:p-10">
                            <PlaceOrderDocument />
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}