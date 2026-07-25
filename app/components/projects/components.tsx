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
            <p className="card-meta md:text-sm">BFShop is an AI-enhanced business system in development, exploring how AI, automation, and integrations can reduce manual work.</p>
            <ul className="list-disc pl-5 space-y-1 card-meta md:text-sm">
                <li>Separate customer and merchant applications sharing a common backend and database </li>
                <li>AI-powered customer service and merchant assistants with access to live business data </li>
                <li>AI chatbots for handling queries and assisting both sides</li>
                <li>An AI Overwatch layer to monitor and control how AI is used across the system</li>
                <li>Built as a complete business simulation, from storefront to internal operations</li>
            </ul>
            
        </div>

    )
}

export function ShopLink(){
    return(
        <Link
            href="/blog/blog-bfshop"
            className="surface-spotlight-light is-interactive group w-full h-full max-w-sm p-6 ring-1 ring-white/40"
        >
            <div className="mb-4 inline-flex rounded-full border border-[#FFA500]/45 bg-[#FFA500]/10 px-3 py-1 card-eyebrow text-[#FFA500]">
                Project hub
            </div>

            <h3 className="font-bebas text-4xl leading-none tracking-wide text-neutral-900 md:text-5xl">
                Project Portal
            </h3>

            <p className="mt-3 card-body text-gray-600 md:text-base">
                Explore the live project, technical documentation, and build logbook in one place.
            </p>

            <span className="mt-6 inline-flex items-center card-meta font-semibold text-[#FFA500] transition group-hover:text-orange-600">
                Open portal
                <span className="ml-2 transition group-hover:translate-x-1">-&gt;</span>
            </span>
        </Link>

    )
}