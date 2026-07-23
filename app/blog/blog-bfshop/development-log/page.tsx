import Link from 'next/link';
import { prisma } from '@/app/lib/prisma';
import JsonLd from '@/app/components/shared/jsonld';
import type { Metadata } from 'next';
import type { dev_log } from '@prisma/client';

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
const devLogs: dev_log[] = await prisma.dev_log.findMany({
    orderBy: {
        published_at: "desc",
    },
});

    return <>
                        <JsonLd schema={schema} />
                        <main className="min-h-screen bg-black">
            <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
                <section className="mb-20 grid grid-cols-[auto_1fr_auto] items-center text-white md:mb-24 lg:mb-28">
                    <Link
                        href="/blog/blog-bfshop"
                        className="text-zinc-300 inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium transition hover:border-zinc-500 hover:bg-zinc-800"
                    >
                        Back
                    </Link>
                    <h1 className="text-center font-inter text-5xl font-bold tracking-tight">Development Log</h1>
                    <div aria-hidden="true" className="h-10 w-[74px]" />
                </section>
                <section className="grid grid-cols-1 gap-3 rounded-md text-white">
                   {devLogs.map(log => (
                    <div key={log.id}
                         className="flex rounded-md border border-zinc-700 bg-zinc-900 p-6">
                        <div className="w-2/3">
                            {log.content}
                        </div>

                        <div className="w-1/3 flex items-center justify-center text-center text-zinc-400">
                            {`${new Date(log.published_at).toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: '2-digit',
                                year: '2-digit',
                            })} ${new Date(log.published_at).toLocaleTimeString('en-GB', {
                                hour: '2-digit',
                                minute: '2-digit',
                            })}`}
                        </div>
                    </div>
                    ))}
                </section>
            </div>
                    </main>
                 </>
}