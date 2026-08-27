import Link from 'next/link'

export function ETDesc() {
    return (
        <div className="card-stack h-full w-full p-3 text-gray-700">
            <p className="card-eyebrow text-[#FFA500]">Project Summary</p>
            <p className="card-title text-neutral-900">Expense Tracker</p>
            <p className="card-body">This was my first project after building this site.</p>
            <p className="card-body">It includes form submission, click handlers, animations, and calculation logic.</p>
            <p className="card-body">This project was perfect for introducing the more complex, interactive side of React.</p>
        </div>

    )
}

export function ETCode() {
    return (
        <Link href="/trackercode" className="surface-base-light is-interactive flex w-full h-full max-w-sm items-center justify-center p-6 ring-1 ring-white/40">
            <div className="card-stack-tight text-center">
                <p className="card-eyebrow text-[#FFA500]">Reference</p>
                <p className="card-title text-neutral-900">Code and Notes</p>
                <p className="card-meta text-gray-600">Open tracker source and build notes</p>
            </div>
        </Link>
    )
}

export function ShopDesc() {
    return (
        <div className="card-stack h-full w-full p-3 text-gray-600">
            <p className="card-eyebrow text-[#FFA500]">Project Summary</p>
            <p className="card-title text-neutral-900">BFshop</p>
            <p className="card-meta md:text-sm">BFshop is a simulated business system with live data passing through it. The purpose is to create an intelligence and action tool without the user being swamped with dashboards.</p>
            <ul className="list-disc pl-5 space-y-1 card-meta md:text-sm">
                <li>Place orders as customer and manage them as merchant</li>
                <li>A synthetic customer base generating orders constantly</li>
                <li>Business metrics are calculated and stored historically</li>
                <li>Simulated ecommerce data and business actions influence customer buying behaviour</li>
                <li>A simple AI interface explains what matters, answers questions and suggests actions</li>
            </ul>
            
        </div>

    )
}

export function ShopLink(){
    return(
        <Link
            href="https://bfshop.benfosterdev.com"
            className="surface-spotlight-light is-interactive-orange group w-full h-full max-w-sm p-6 ring-1 ring-white/40 border"
        >
            <div className="mb-4 inline-flex rounded-full border border-[#FFA500]/45 bg-[#FFA500]/10 px-3 py-1 card-eyebrow text-[#FFA500]">
                Project hub
            </div>

            <h3 className="font-bebas text-4xl leading-none tracking-wide text-neutral-900 md:text-5xl">
                Project Portal
            </h3>

            <p className="mt-3 card-body text-gray-600 md:text-base">
                Watch the live order chain or read my documentation as the project progresses.
            </p>

            <span className="mt-6 inline-flex items-center card-meta font-semibold text-[#FFA500] transition group-hover:text-orange-600">
                Open portal
                <span className="ml-2 transition group-hover:translate-x-1">-&gt;</span>
            </span>
        </Link>

    )
}