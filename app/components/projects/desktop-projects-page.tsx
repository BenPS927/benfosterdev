'use client'

import { ETDesc, ETCode, ShopLink, ShopDesc } from "./components"
import { ExpenseTracker } from "./expense-tracker"
import { useState } from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function DesktopProjectsPage() {
    const [panel, setPanel] = useState(0)

    return (
        <div className="mx-auto bg-[linear-gradient(180deg,#f5f5f5_0%,#ececec_100%)] p-4 text-neutral-950 md:p-6 lg:p-8">
            <div className="mx-auto max-w-7xl space-y-8 lg:space-y-10">
                <div className="space-y-5 text-center lg:space-y-6">
                    <h1 className="font-bebas text-5xl leading-[0.92] tracking-wide md:text-6xl lg:text-7xl">Projects</h1>
                    <p className="mx-auto max-w-3xl font-inter text-base leading-relaxed text-gray-600 md:text-lg">
                        This is where you&apos;ll find the project I&apos;m currently working on, and the ones I&apos;ve completed.
                    </p>
                    <p className="font-inter text-sm leading-relaxed text-gray-500 md:text-base">Use the arrows to switch project panels.</p>
                </div>

                <div className="flex justify-center gap-3 md:gap-4">
                    <button
                        onClick={() => setPanel(Math.max(panel - 1, 0))}
                        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-900/15 bg-white/80 text-[#FFA500] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-50 md:h-16 md:w-16"
                        aria-label="Show previous project panel"
                        disabled={panel === 0}
                    >
                        <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 38 }} />
                    </button>

                    <button
                        onClick={() => setPanel(Math.min(panel + 1, 1))}
                        className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-neutral-900/15 bg-white/80 text-[#FFA500] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-50 md:h-16 md:w-16"
                        aria-label="Show next project panel"
                        disabled={panel === 1}
                    >
                        <KeyboardDoubleArrowRightIcon sx={{ fontSize: 38 }} />
                    </button>
                </div>

                <div className="overflow-hidden p-4 md:p-6 lg:p-8">
                    <div
                        className="flex flex-row transition-transform duration-300"
                        style={{ transform: `translateX(-${panel * 100}%)` }}
                    >
                        <div className="grid w-full shrink-0 gap-4 lg:grid-cols-3 lg:gap-6">
                            <article className="p-4 md:p-6">
                                <ETDesc />
                            </article>

                            <article className="p-2 pt-10 md:p-3 md:pt-12">
                                <ExpenseTracker />
                            </article>

                            <article className="flex items-start justify-center p-4 pt-10 md:p-6 md:pt-12">
                                <ETCode />
                            </article>
                        </div>

                        <div className="grid w-full shrink-0 gap-4 lg:grid-cols-3 lg:gap-6">
                            <article className="p-4 md:p-6">
                                <ShopDesc />
                            </article>

                            <article className="flex items-start justify-center p-4 pt-10 md:p-6 md:pt-12">
                                <ShopLink />
                            </article>

                            <article className="flex items-start justify-center p-4 pt-32 md:p-6 md:pt-36">
                                <p className="font-inter text-lg font-semibold text-[#FFA500]">Code coming soon</p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}