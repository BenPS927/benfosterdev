import type { Metadata } from 'next';
import JsonLd from '@/app/components/shared/jsonld';
import BFShopProgressReport1 from '@/app/components/blogs/bfshop-progress-report-1';
import { BackPillLink } from '../../../../components/ui/back-pill-link';

export const metadata: Metadata = {
    title: 'Progress Report 1 | BFshop Project Portal',
    description: 'First BFshop delivery report covering customer slice progress, infrastructure setup, and current blockers.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'BFshop Progress Report 1',
    name: 'BFshop Progress Report 1',
    description: 'First BFshop delivery report covering customer slice progress, infrastructure setup, and current blockers.',
    url: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports/report-1',
    datePublished: '2026-07-23',
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
    mainEntityOfPage: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports/report-1',
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
                name: 'Progress Report 1',
                item: 'https://benfosterdev.com/blog/blog-bfshop/progress-reports/report-1',
            },
        ],
    },
};

export default function BFShopProgressReport1Page() {
    return (
        <>
            <JsonLd schema={schema} />
            <main className="min-h-screen bg-subtle-dark-gradient text-white">
                <div className="mx-auto max-w-5xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
                    <section className="mb-10 md:mb-14 lg:mb-16">
                        <BackPillLink href="/blog/blog-bfshop/progress-reports" label="Back to Reports" />
                    </section>

                    <section className="page-header-stack page-header-tight text-center">
                        <h1 className="font-inter text-5xl font-bold tracking-tight">Progress Report 1</h1>
                        <p className="card-meta text-zinc-400">Ben Foster | 23 Jul 2026 | 3 min read</p>
                    </section>

                    <section className="page-section-gap">
                        <article className="surface-raised p-6 md:p-8">
                            <BFShopProgressReport1 />
                        </article>
                    </section>
                </div>
            </main>
        </>
    );
}
