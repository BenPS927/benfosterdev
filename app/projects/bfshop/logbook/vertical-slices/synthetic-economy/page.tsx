import type { Metadata } from "next"
import { BackPillLink } from '../../../../../components/ui/back-pill-link';

export const metadata: Metadata = {
  title: "Slice 3: Synthetic Economy | BFshop Vertical Slices",
  description: "Vertical slice documentation for the Synthetic Economy in BFshop.",
};

export default function SyntheticEconomySlice() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-black px-4 py-8 text-white md:px-6 md:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-3xl">
                <BackPillLink href="/projects/bfshop/logbook/vertical-slices">
                    Back to Vertical Slices
                </BackPillLink>
                <article className="font-inter leading-relaxed text-left py-8">
                    <h1 className="font-bold text-3xl mb-4">Slice 3: Synthetic Economy</h1>
                    <p className="text-zinc-400 mb-6">
                        This documentation for the Synthetic Economy vertical slice has not yet been started.
                    </p>
                </article>
            </div>
        </main>
    );
}
