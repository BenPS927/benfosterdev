import type { Metadata } from 'next';
import JsonLd from '@/app/components/shared/jsonld';
import BFShopProgressReport2 from '@/app/components/blogs/bfshop-progress-report-2';
import { BackPillLink } from '../../../../components/ui/back-pill-link';

export const metadata: Metadata = {
    title: 'Progress Report 2 | BFshop Project Portal',
    description: 'Second BFshop delivery report covering backend cart-slice architecture and service-layer progress.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'BFshop Progress Report 2',
    name: 'BFshop Progress Report 2',
    description: 'Second BFshop delivery report covering backend cart-slice architecture and service-layer progress.',
    url: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports/report-2',
    datePublished: '2026-07-26',
    author: {
        '@type': 'Person',
        name: 'Ben Foster',
        url: 'https://benfosterdev.com',
    },
    isPartOf: {
        '@type': 'WebPage',
        name: 'BFshop Project Portal',
        url: 'https://benfosterdev.com/blog/blog-bfshop',
    },
    mainEntityOfPage: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports/report-2',
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'BFshop Project Portal',
                item: 'https://benfosterdev.com/blog/blog-bfshop',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Progress Reports',
                item: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'Progress Report 2',
                item: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports/report-2',
            },
        ],
    },
};

export default function BFShopProgressReport2Page() {
    return (
        <>
            <JsonLd schema={schema} />
            <main className="min-h-screen bg-subtle-dark-gradient text-white">
                <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
                    <section className="mb-10 md:mb-14 lg:mb-16">
                        <BackPillLink href="/blog/blog-bfshop/progress-reports" label="Back to Reports" />
                    </section>

                    <section className="page-header-stack page-header-tight text-center">
                        <h1 className="font-inter text-5xl font-bold tracking-tight">Progress Report 2</h1>
                        <p className="card-meta text-zinc-400">Ben Foster | 26 Jul 2026 | 4 min read</p>
                    </section>

                    <section className="page-section-gap">
                        <article className="surface-raised p-6 md:p-8">
                            <BFShopProgressReport2 />
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}
