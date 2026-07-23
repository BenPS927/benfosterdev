import Link from 'next/link';
import ArticleIcon from '@mui/icons-material/Article';

export default function ProgressReportsPageContent() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <img
                    src="/bg1.png"
                    alt="background image for bfshop progress reports"
                    className="w-full h-full object-cover opacity-20"
                />
            </div>

            <div className="relative mx-auto min-h-screen max-w-full px-4 pb-20 pt-2 lg:px-8 lg:pb-24 lg:pt-4 z-10">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-start">
                    <Link
                        href="/blog/blog-bfshop"
                        className="inline-flex items-center rounded-full border border-neutral-900/15 bg-white px-4 py-2 font-inter text-sm font-semibold text-[#FFA500] shadow-sm transition hover:-translate-y-0.5 hover:border-orange-600 hover:text-orange-600"
                    >
                        Back
                    </Link>
                </div>

                <div className="font-inter text-3xl text-center p-2 lg:p-4 flex items-center justify-center gap-4">
                    <h1 className="w-full lg:w-1/3 p-2 text-center font-bebas text-5xl leading-[0.92] tracking-wide text-neutral-900 md:text-6xl lg:text-7xl">
                        <Link href="/blog" className="inline-block">
                            <span className="text-black">BF</span>
                            <span className="text-[#FFA500]">Shop</span>
                        </Link>
                    </h1>
                </div>

                <main className="flex flex-col lg:flex-row p-4 lg:p-16 gap-none lg:gap-16">
                    <section className="w-full lg:w-1/3 lg:shrink-0 border-r p-4 lg:p-8 leading-relaxed lg:h-[50vh] space-y-4">
                        <p className="font-inter leading-loose">
                            This page is the home of BFshop progress reports.
                            Each report captures practical updates from ongoing project work.
                        </p>
                        <p className="font-inter leading-loose">
                            New entries will be added over time as features are built, tested, and refined.
                        </p>
                    </section>

                    <section className="flex w-full flex-1 flex-wrap gap-4 lg:gap-6 lg:pl-6">
                        <div className="relative overflow-hidden bg-white w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-1.125rem)] lg:flex-none p-2 lg:p-6 rounded-lg shadow-md hover:shadow-lg flex flex-col justify-center items-center min-h-[200px] mt-4 scale-[0.94] origin-top">
                            <Link
                                href="/blog/blog-bfshop/progress-reports/report-1"
                                className="group absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 px-4 text-center font-inter"
                            >
                                <div className="absolute inset-0 flex items-center justify-center z-0">
                                    <ArticleIcon
                                        sx={{
                                            fontSize: 144,
                                            color: 'orange',
                                            opacity: 0.2,
                                        }}
                                    />
                                </div>
                                <p className="text-lg transition-transform duration-300 ease-out group-hover:text-orange-700 group-hover:scale-110">
                                    Progress Report 1
                                </p>
                                <p className="text-sm text-neutral-700 transition-colors duration-300 group-hover:text-orange-700">
                                    23rd July 2026
                                </p>
                            </Link>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
