import Link from 'next/link';
import { BackPillLink } from '../../../components/ui/back-pill-link';

const reports = [
    {
        eyebrow: 'Report 02',
        title: 'Progress Report 2',
        body: 'Backend cart-slice architecture progress, service-layer planning, and project portal refinements.',
        meta: '26 Jul 2026 | 4 min read',
        href: '/blog/blog-bfshop/progress-reports/report-2',
    },
    {
        eyebrow: 'Report 01',
        title: 'Progress Report 1',
        body: 'Current status of the customer-facing slice, cart/backend bridge planning, and infrastructure setup decisions.',
        meta: '23 Jul 2026 | 3 min read',
        href: '/blog/blog-bfshop/progress-reports/report-1',
    },
];

export default function ProgressReportsPageContent() {
    return (
        <main className="min-h-screen bg-subtle-dark-gradient text-white">
            <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
                <section className="mb-10 md:mb-14 lg:mb-16">
                    <BackPillLink href="/blog/blog-bfshop" label="Back to Portal" />
                </section>

                <section className="page-header-stack page-header-tight text-center">
                    <h1 className="font-inter text-5xl font-bold tracking-tight">Progress Reports</h1>
                    <p className="mx-auto max-w-3xl card-body text-zinc-300">
                        Chronological BFshop updates covering feature delivery, blockers, architecture choices, and implementation progress.
                    </p>
                </section>

                <section className="page-section-gap">
                    <div className="grid grid-cols-1 gap-4 md:gap-5">
                        {reports.map((report) => (
                            <Link
                                key={report.title}
                                href={report.href}
                                className="group surface-raised is-interactive p-5 text-left text-white md:p-6"
                            >
                                <div className="card-stack">
                                    <div className="card-stack-tight">
                                        <p className="card-eyebrow accent-electric-blue">{report.eyebrow}</p>
                                        <h2 className="card-title text-white">{report.title}</h2>
                                        <p className="card-body text-zinc-300">{report.body}</p>
                                    </div>

                                    <div className="flex items-center justify-between gap-4">
                                        <p className="card-meta text-zinc-500">{report.meta}</p>
                                        <p className="card-meta accent-electric-blue transition group-hover:text-sky-300">Open report</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
