import { prisma } from '@/app/lib/prisma';
import JsonLd from '@/app/components/shared/jsonld';
import type { Metadata } from 'next';
import { BackPillLink } from '../../../components/ui/back-pill-link';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
    title: 'Development Log | BFshop Blog',
    description: 'Ongoing BFshop development updates of BFshop.',
};

const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'BFshop Development Log',
    description: 'Ongoing BFshop development updates of BFshop.',
    url: 'https://benfosterdev.com/blog/blog-bfshop/development-log',
    isPartOf: {
        '@type': 'Blog',
        name: 'BFshop Blog',
        url: 'https://benfosterdev.com/blog/blog-bfshop',
    },
    author: {
        '@type': 'Person',
        name: 'Ben Foster',
        url: 'https://benfosterdev.com',
    },
};


export default async function DevelopmentLogPage() {
    const devLogs = await prisma.dev_log.findMany({
        orderBy: {
            published_at: 'desc',
        },
    });

    return <>
        <JsonLd schema={schema} />
        <main className="min-h-screen bg-subtle-dark-gradient text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
                <section className="mb-10 md:mb-14 lg:mb-16">
                    <BackPillLink href="/blog/blog-bfshop" />
                </section>

                <section className="page-header-stack page-header-tight text-center">
                    <h1 className="font-inter text-5xl font-bold tracking-tight">Development Log</h1>
                    <p className="mx-auto max-w-3xl card-body text-zinc-300">
                        Ongoing BFshop development updates, recorded as the project structure, implementation, and architecture continue to evolve.
                    </p>
                </section>

                <section className="page-section-gap">
                    <div className="grid grid-cols-1 gap-4 text-white md:gap-5">
                        {devLogs.map((log: any) => (
                            <article key={log.id} className="surface-raised p-5 md:p-6">
                                <div className="card-stack">
                                    <div className="card-stack-tight">
                                        <p className="card-eyebrow accent-electric-blue">Development Update</p>
                                        <p className="card-body text-zinc-200">{log.content}</p>
                                    </div>

                                    <p className="card-meta text-zinc-500">
                                        {`${new Date(log.published_at).toLocaleDateString('en-GB', {
                                            day: '2-digit',
                                            month: 'short',
                                            year: 'numeric',
                                        })} ${new Date(log.published_at).toLocaleTimeString('en-GB', {
                                            hour: '2-digit',
                                            minute: '2-digit',
                                        })}`}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    </>
}