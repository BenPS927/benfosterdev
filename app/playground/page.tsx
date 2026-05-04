import Link from "next/link";

export default function GatewayPage() {
  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-6 text-neutral-950 md:px-6 md:py-8 lg:px-8 lg:py-12">
      <section className="mx-auto flex max-w-7xl flex-col items-center space-y-6 text-center md:space-y-8 lg:space-y-12">
        <div className="max-w-2xl">
          <h1 className="mb-4 font-bebas text-4xl leading-tight tracking-wide md:mb-6 md:text-5xl lg:text-6xl">
            Design <span className="text-[orange]">Playground</span>
          </h1>

          <p className="font-inter text-base leading-relaxed text-gray-600 md:text-lg">
            This page is your draft space for design and layout experiments. Use the cards below to open sandbox pages and iterate quickly.
          </p>
        </div>

        <div className="grid w-full gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          <Link
            href="/playground/page-one"
            className="group rounded-2xl border border-neutral-900/15 bg-neutral-900/[0.03] p-4 transition hover:bg-neutral-900/[0.06] md:p-6"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
               

                <h3 className="mb-3 font-inter text-xl font-semibold leading-snug text-[orange] md:mb-4 md:text-2xl lg:text-3xl">
                  Draft One
                </h3>

                <p className="font-inter text-sm leading-relaxed text-gray-500 md:text-base">
                  Open your first draft page for testing components and layout ideas.
                </p>
              </div>

              <span className="mt-4 font-inter text-sm font-medium text-gray-500 transition group-hover:text-neutral-950 md:text-base">
                Open -&gt;
              </span>
            </div>
          </Link>

          <Link
            href="/playground/page-two"
            className="group rounded-2xl border border-neutral-900/15 bg-neutral-900/[0.03] p-4 transition hover:bg-neutral-900/[0.06] md:p-6"
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                

                <h3 className="mb-3 font-inter text-xl font-semibold leading-snug text-[orange] md:mb-4 md:text-2xl lg:text-3xl">
                  Draft Two
                </h3>

                <p className="font-inter text-sm leading-relaxed text-gray-500 md:text-base">
                  Open your second draft page for alternate concepts and experiments.
                </p>
              </div>

              <span className="mt-4 font-inter text-sm font-medium text-gray-500 transition group-hover:text-neutral-950 md:text-base">
                Open -&gt;
              </span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}