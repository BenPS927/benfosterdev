'use client'

import { ETDesc, ETCode, ShopLink, ShopDesc, ShopBlog } from "./components"
import { ExpenseTracker } from "./expense-tracker"
import { useState } from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function DesktopProjectsPage() {
    const [panel, setPanel] = useState(1)

    return (
        <div className="mx-auto overflow-x-hidden bg-[linear-gradient(180deg,#f5f5f5_0%,#fafafa_55%,#ffffff_100%)] px-4 py-6 text-neutral-950 sm:px-5 md:px-6 md:py-8 lg:px-8">
            <div className="mx-auto w-full max-w-7xl space-y-6 md:space-y-8 lg:space-y-10">
                <div className="space-y-5 text-center lg:space-y-6">
                    <h1 className="font-bebas text-4xl leading-[0.92] tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">Projects</h1>
                    <p className="mx-auto max-w-3xl font-inter text-base leading-relaxed text-gray-600 md:text-lg">
                        This is where you&apos;ll find the project I&apos;m currently working on, and the ones I&apos;ve completed.
                    </p>
                    <p className="font-inter text-sm leading-relaxed text-gray-500 md:text-base">Use the arrows to switch project panels.</p>
                </div>

                <div className="flex justify-center gap-3 md:gap-4">
                    <button
                        onClick={() => setPanel(Math.max(panel - 1, 0))}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900/15 bg-white/80 text-[#FFA500] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-50 md:h-16 md:w-16"
                        aria-label="Show previous project panel"
                        disabled={panel === 0}
                    >
                        <KeyboardDoubleArrowLeftIcon sx={{ fontSize: 30 }} className="md:!text-[38px]" />
                    </button>

                    <button
                        onClick={() => setPanel(Math.min(panel + 1, 1))}
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-neutral-900/15 bg-white/80 text-[#FFA500] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600 disabled:cursor-not-allowed disabled:opacity-50 md:h-16 md:w-16"
                        aria-label="Show next project panel"
                        disabled={panel === 1}
                    >
                        <KeyboardDoubleArrowRightIcon sx={{ fontSize: 30 }} className="md:!text-[38px]" />
                    </button>
                </div>

                <div className="overflow-hidden px-1 py-2 sm:px-2 md:px-6 md:py-4 lg:px-8 lg:py-6">
                    <div
                        className="flex flex-row transition-transform duration-300"
                        style={{ transform: `translateX(-${panel * 100}%)` }}
                    >
                        <div className="grid w-full min-w-full shrink-0 grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                            <article className="flex items-stretch p-3 sm:p-4 md:p-6">
                                <ETDesc />
                            </article>

                            <article className="h-full p-3 pt-2 sm:p-4 sm:pt-4 md:p-6 md:pt-8 lg:pt-12">
                                <ExpenseTracker />
                            </article>

                            <article className="flex items-stretch justify-center p-3 pt-2 sm:p-4 sm:pt-4 md:p-6 md:pt-8 lg:pt-12">
                                <ETCode />
                            </article>
                        </div>

                        <div className="grid w-full min-w-full shrink-0 grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
                            <article className="flex items-stretch p-3 sm:p-4 md:p-6">
                                <ShopDesc />
                            </article>

                            <article className="flex items-stretch justify-center p-3 pt-2 sm:p-4 sm:pt-4 md:p-6 md:pt-8 lg:pt-12">
                                <ShopLink />
                            </article>

                            <article className="flex items-stretch justify-center p-3 pt-2 sm:p-4 sm:pt-8 md:p-6 md:pt-12 lg:pt-12">
                                <ShopBlog />
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}