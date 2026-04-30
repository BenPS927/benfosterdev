import Link from "next/link";

export default function PlaygroundPageTwo() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
          Playground section two
        </p>
        <h1 className="mb-6 text-4xl font-semibold tracking-tight sm:text-5xl">
          Second page sandbox
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-neutral-300">
          Use this page as a separate area for alternate layout or logic tests.
        </p>

        <Link
          href="/playground"
          className="w-fit rounded-full border border-white/20 px-6 py-3 text-sm uppercase tracking-[0.2em] text-neutral-200 transition hover:border-white/40 hover:text-white"
        >
          Back to gateway
        </Link>
      </section>
    </main>
  );
}