import Link from 'next/link';
const portalNodes = [
    {
        title: 'Overview',
        label: 'Introduction',
        description: 'Read up on the basics of BFshop.',
        href: '/projects/bfshop/overview',
    },
    {
        title: 'Repository',
        label: 'Project Code',
        description: 'Browse the BFshop source code.',
        href: 'https://github.com/BenPS927/BFshop',
        external: true,
    },
    {
        title: 'Specification',
        label: 'Specifications',
        description: 'Review the technical plan and scope.',
        href: '/projects/bfshop/specifications',
    },
    {
        title: 'Updates',
        label: 'Progress Reports',
        description: 'Track how the project is evolving.',
        href: '/projects/bfshop/updates',
    },
];

const logbookItems = [
    { title: 'Data Foundations', href: '/projects/bfshop/logbook/data-foundations' },
    { title: 'Vertical Slices', href: '/projects/bfshop/logbook/vertical-slices' },
    { title: 'AI', href: '/projects/bfshop/logbook/ai' },
    { title: 'Automation', href: '/projects/bfshop/logbook/automation' },
    { title: 'Development Log', href: '/projects/bfshop/logbook/development-log' },
];

export default function BFShopPortalContent() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-black px-4 py-8 text-white md:px-6 md:py-10 lg:px-8 lg:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_15%_-10%,rgba(255,255,255,0.06),transparent_60%),linear-gradient(180deg,#050505_0%,#0A0A0A_45%,#121212_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent" />

            <section className="relative mx-auto flex max-w-7xl flex-col gap-12 lg:gap-16">
                <header className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
                    <Link
                        href="/#projects"
                        className="accent-electric-blue hover-accent-electric-blue-border inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-4 py-2 text-sm font-medium transition hover:bg-zinc-800"
                    >
                        Back to Main Site
                    </Link>
                    
                    <h1 className="font-bebas text-5xl leading-none tracking-[0.12em] text-white sm:text-6xl lg:text-7xl">
                        BF<span className="text-sky-400">SHOP</span>
                    </h1>
                  
                        <p className="max-w-2xl font-inter text-sm leading-7 text-zinc-300 sm:text-base">
                        BFshop is an under construction, simulated business system. The goal is to have a simple, AI chat interface replace daunting analytics dashboards. Scroll down to the logbook for more details.</p>
                        <p className="max-w-2xl font-inter text-sm leading-7 text-sky-400 sm:text-base">
                        Current stage: Building and storing traditional business metrics for backend use</p>
                </header>

                <section className="relative mx-auto w-full max-w-6xl">
                    <div className="grid gap-5 lg:hidden">
                        <a
                            href="https://bfshop.benfosterdev.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-sky-400/30 bg-white/[0.08] p-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-sky-400/10"
                        >
                            <div className="space-y-3">
                                <span className="block font-bebas text-4xl tracking-[0.12em] text-white">
                                    Open project
                                </span>
                            </div>
                        </a>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {portalNodes.map((node) => {
                                const itemClassName = 'group mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] p-7 text-center transition duration-300 hover:border-sky-400/50';

                                const itemContent = (
                                    <div className="space-y-2">
                                        <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                                            {node.title}
                                        </p>
                                        <h2 className="font-inter text-xl font-bold leading-6 text-white">
                                            {node.label}
                                        </h2>
                                        <p className="font-inter text-sm leading-6 text-zinc-400">
                                            {node.description}
                                        </p>
                                    </div>
                                );

                                return node.external ? (
                                    <a
                                        key={node.title}
                                        href={node.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={itemClassName}
                                    >
                                        {itemContent}
                                    </a>
                                ) : (
                                    <Link key={node.title} href={node.href} className={itemClassName}>
                                        {itemContent}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative hidden h-[42rem] lg:block">
                        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/30 bg-white/[0.08] shadow-[0_0_80px_rgba(56,189,248,0.08)]" />

                        <a
                            href="https://bfshop.benfosterdev.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group absolute left-1/2 top-1/2 flex h-80 w-80 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sky-400/30 bg-white/[0.08] p-10 text-center transition duration-300 hover:scale-[1.02] hover:border-sky-400/50 hover:bg-sky-400/10"
                        >
                            <div className="space-y-4">
                                <span className="block font-bebas text-6xl tracking-[0.14em] text-white">
                                    Open project
                                </span>
                            </div>
                        </a>

                        {portalNodes.map((node, index) => {
                            const positions = [
                                'left-10 top-14',
                                'right-10 top-14',
                                'left-16 bottom-10',
                                'right-16 bottom-10',
                            ];

                            const itemClassName = `group absolute flex h-56 w-56 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] p-8 text-center transition duration-300 hover:border-sky-400/50 ${positions[index]}`;

                            const itemContent = (
                                <div className="space-y-2">
                                    <p className="font-inter text-xs font-semibold uppercase tracking-[0.14em] text-sky-400">
                                        {node.title}
                                    </p>
                                    <h2 className="font-inter text-2xl font-bold leading-7 text-white">
                                        {node.label}
                                    </h2>
                                    <p className="font-inter text-sm leading-6 text-zinc-400">
                                        {node.description}
                                    </p>
                                </div>
                            );

                            return node.external ? (
                                <a
                                    key={node.title}
                                    href={node.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={itemClassName}
                                >
                                    {itemContent}
                                </a>
                            ) : (
                                <Link key={node.title} href={node.href} className={itemClassName}>
                                    {itemContent}
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <section id="logbook" className="mx-auto flex w-full max-w-4xl flex-col gap-5">
                    <div className="flex flex-col gap-3 text-center">
                        
                        <h2 className="font-inter text-3xl font-bold tracking-tight text-white">
                            Project Logbook
                        </h2>
                        
                    </div>

                    <div className="grid gap-4">
                        {logbookItems.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="group flex items-center justify-between rounded-3xl border border-white/12 bg-white/[0.08] px-5 py-4 transition duration-300 hover:border-sky-400/50 sm:px-6"
                            >
                                <div className="flex flex-col gap-1 text-left">
                                   
                                    <span className="font-inter text-lg font-semibold text-white">
                                        {item.title}
                                    </span>
                                </div>
                                <span className="font-inter text-sm text-zinc-500 transition group-hover:text-zinc-300">
                                    Open
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    )
}