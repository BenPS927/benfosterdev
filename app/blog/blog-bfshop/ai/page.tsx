import { BackPillLink } from '../../../components/ui/back-pill-link';

export default function AiPage() {
  return (
    <main className="min-h-screen bg-subtle-dark-gradient text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16 lg:py-20">
        <section className="mb-10 md:mb-14 lg:mb-16">
          <BackPillLink href="/blog/blog-bfshop" />
        </section>

        <section className="page-header-stack page-header-tight text-center">
          <h1 className="font-inter text-5xl font-bold tracking-tight">AI</h1>
          <p className="mx-auto max-w-3xl card-body text-zinc-300">
            The AI features planned for this part of BFshop have not yet been built. This page will document them as that work begins.
          </p>
        </section>
      </div>
    </main>
  );
}
