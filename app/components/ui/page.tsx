import Link from 'next/link';

export default function UiSurfaceTiersPage() {
  return (
    <main className="bg-subtle-dark-gradient min-h-screen text-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20">
        <header className="mb-10 md:mb-14">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-zinc-400">UI Surface System</p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Three Reusable Surface Tiers</h1>
          <p className="max-w-3xl text-zinc-300">
            Use these utilities to keep panel styling consistent across pages while allowing each page layout to stay unique.
          </p>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="surface-base p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-400">Tier 1</p>
            <h2 className="mb-3 text-2xl font-semibold">Base Surface</h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              Use for standard text content panels where readability matters more than attention.
            </p>
            <p className="mt-4 text-xs text-zinc-400">Utility: surface-base</p>
          </article>

          <article className="surface-raised p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-300">Tier 2</p>
            <h2 className="mb-3 text-2xl font-semibold">Raised Surface</h2>
            <p className="text-sm leading-relaxed text-zinc-200">
              Use for highlighted information cards that should pop above normal content blocks.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-zinc-100">
              Featured
            </div>
            <p className="mt-4 text-xs text-zinc-300">Utility: surface-raised</p>
          </article>

          <Link href="/projects/bfshop" className="surface-interactive block p-6">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-zinc-300">Tier 3</p>
            <h2 className="mb-3 text-2xl font-semibold">Interactive Surface</h2>
            <p className="text-sm leading-relaxed text-zinc-200">
              Use for clickable panels. Hover adds lift and stronger contrast to signal interaction.
            </p>
            <p className="mt-6 text-sm font-medium text-zinc-100">Open BFshop Portal -&gt;</p>
            <p className="mt-4 text-xs text-zinc-300">Utility: surface-interactive</p>
          </Link>
        </section>

        <section className="surface-base mt-8 p-6 text-sm text-zinc-300">
          <p className="mb-3 font-medium text-zinc-100">Quick use guide</p>
          <p className="mb-2">Page background utility: bg-subtle-dark-gradient</p>
          <p className="mb-2">Panel utility for normal content: surface-base</p>
          <p className="mb-2">Panel utility for highlights: surface-raised</p>
          <p>Panel utility for links and clickable cards: surface-interactive</p>
        </section>
      </div>
    </main>
  );
}
