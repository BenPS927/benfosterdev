"use client";

import Link from "next/link";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useState } from "react";
import { ETCode, ETDesc, ShopDesc, ShopLink } from "@/app/components/projects/components";
import { ExpenseTracker } from "@/app/components/projects/expense-tracker";

export default function PlaygroundPageTwo() {
  const [panel, setPanel] = useState(0);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f5f5f5_0%,#ececec_100%)] px-4 py-8 text-neutral-950 md:px-6 md:py-10 lg:px-8 lg:py-12">
      <section className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
        <div className="space-y-5 text-center lg:space-y-6">
          <p className="font-inter text-sm uppercase tracking-[0.2em] text-gray-500">Playground section two</p>
          <h1 className="font-bebas text-5xl leading-[0.92] tracking-wide md:text-6xl lg:text-7xl">Projects</h1>
          <p className="mx-auto max-w-3xl font-inter text-base leading-relaxed text-gray-600 md:text-lg">
            This sandbox recreates your desktop projects area using the home hero design rules for spacing,
            typography, and color.
          </p>
          <p className="font-inter text-sm leading-relaxed text-gray-500 md:text-base">Use the arrows to switch project panels.</p>
        </div>

        <div className="flex justify-center gap-3 md:gap-4">
          <button
            onClick={() => setPanel(Math.max(panel - 1, 0))}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-900/15 bg-white/80 text-orange-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-800 disabled:cursor-not-allowed disabled:opacity-50 md:h-16 md:w-16"
            aria-label="Show previous project panel"
            disabled={panel === 0}
          >
            <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 38 }} />
          </button>

          <button
            onClick={() => setPanel(Math.min(panel + 1, 1))}
            className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-900/15 bg-white/80 text-orange-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-800 disabled:cursor-not-allowed disabled:opacity-50 md:h-16 md:w-16"
            aria-label="Show next project panel"
            disabled={panel === 1}
          >
            <KeyboardDoubleArrowRightIcon sx={{ fontSize: 38 }} />
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-neutral-900/10 bg-white/60 p-4 shadow-sm backdrop-blur-sm md:p-6 lg:p-8">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${panel * 100}%)` }}>
            <div className="grid w-full shrink-0 gap-4 lg:grid-cols-3 lg:gap-6">
              <article className="rounded-2xl border border-neutral-900/10 bg-white p-4 md:p-6">
                <ETDesc />
              </article>

              <article className="rounded-2xl border border-neutral-900/10 bg-white p-2 md:p-3">
                <ExpenseTracker />
              </article>

              <article className="flex items-center justify-center rounded-2xl border border-neutral-900/10 bg-white p-4 md:p-6">
                <ETCode />
              </article>
            </div>

            <div className="grid w-full shrink-0 gap-4 lg:grid-cols-3 lg:gap-6">
              <article className="rounded-2xl border border-neutral-900/10 bg-white p-4 md:p-6">
                <ShopDesc />
              </article>

              <article className="flex items-center justify-center rounded-2xl border border-neutral-900/10 bg-white p-4 md:p-6">
                <ShopLink />
              </article>

              <article className="flex items-center justify-center rounded-2xl border border-dashed border-orange-300 bg-orange-50 p-4 md:p-6">
                <p className="font-inter text-lg font-semibold text-orange-700">Code coming soon</p>
              </article>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Link
            href="/playground"
            className="inline-flex items-center rounded-full border border-neutral-900/15 px-5 py-2.5 font-inter text-sm text-gray-600 transition hover:border-neutral-900/30 hover:text-neutral-900"
          >
            Back to gateway
          </Link>
        </div>
      </section>
    </main>
  );
}