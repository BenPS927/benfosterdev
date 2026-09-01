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

const shopFeatures = [
    { text: 'Place orders as customer and manage them as merchant', status: 'Almost complete' },
    { text: 'A synthetic economy where customer characteristics, business actions and external factors influence buying behavior', status: 'In progress' },
    { text: 'Business metrics calculated and stored historically', status: 'In progress' },
    { text: 'Data patterns and relationships investigated to find insights', status: 'Not yet started' },
    { text: 'An AI chatbot to present findings and answer queries, replacing endless dashboards and answering questions before you ask them', status: 'Not yet started' },
];

export function ShopDesc() {
    return (
        <div className="card-stack h-full w-full p-3 text-gray-600">
            
            <p className="card-title text-neutral-900">BFshop</p>
            <p className="card-meta md:text-sm">BFshop is a simulated business system with live data passing through it. The purpose is to create an intelligence and action tool without the user being swamped with dashboards.</p>
            <ul className="space-y-2 card-meta md:text-sm">
                {shopFeatures.map((feature) => (
                    <li key={feature.text} className="flex items-start justify-between gap-3">
                        <span className="flex-1 before:mr-2 before:content-['•']">{feature.text}</span>
                        <span className="shrink-0 self-start rounded-md border border-[#FFA500]/30 bg-[#FFA500]/10 px-2 py-1 text-xs font-medium text-[#FFA500] whitespace-nowrap">
                            {feature.status}
                        </span>
                    </li>
                ))}
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
            

            <h3 className="font-bebas text-4xl leading-none tracking-wide text-neutral-900 md:text-5xl">
                Project Portal
            </h3>

            <p className="mt-3 card-body text-gray-600 md:text-base">
                Watch the live order chain or read my documentation as the project progresses.
            </p>

           
        </Link>

    )
}