import Link from 'next/link'

export function ETDesc() {
    return (
        
        <div className="p-4 font-inter text-sm leading-[2]">
            <p>This is my expense tracker project. </p>
            <p>This was my first project after building this site.</p>
            <p>It includes a form submission, click and submission handlers, animations and calculation logic.</p>
            <p>This was the perfect project for introducing me to the more complex side of React JS involving interactivity and function.</p>
        </div>

    )
}

export function ETCode() {
    return (
        <Link href="/trackercode" className="flex w-full min-h-[220px] items-center justify-center rounded-2xl border border-neutral-900/15 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-orange-600">
            <p className="font-inter text-sm font-semibold text-[#FFA500]">Code and notes</p>
        </Link>
    )
}

export function ShopDesc() {
    return (
        
        <div className="p-4 font-inter text-sm leading-[2]">
            <p>This is BFshop. </p>
            <p>This will be my first full-stack project, and an entire business system. </p>
            <p>There will be two interfaces - the customer interface, where orders can be placed, with an AI chatbot for making queries.</p>
            <p> And the merchant interface, where orders will be logged and stock will be inventoried. Automated workflows utilising AI will work
                with the backend to make this a fully functioning system.
            </p>
        </div>

    )
}

export function ShopLink(){
    return(
        <Link
            href="https://bfshop.benfosterdev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-sm rounded-2xl border border-neutral-900/15 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-orange-600"
        >
            <div className="mb-4 inline-flex rounded-full border border-[#FFA500]/45 bg-[#FFA500]/10 px-3 py-1 font-inter text-xs font-medium uppercase tracking-[0.14em] text-[#FFA500]">
                Live project
            </div>

            <h3 className="font-bebas text-4xl leading-none tracking-wide text-neutral-900 md:text-5xl">
                BFShop
            </h3>

            <p className="mt-3 font-inter text-sm leading-relaxed text-gray-600 md:text-base">
                Visit the store build and explore the first release of the full-stack business platform.
            </p>

            <span className="mt-6 inline-flex items-center font-inter text-sm font-semibold text-[#FFA500] transition group-hover:text-orange-600">
                Open project
                <span className="ml-2 transition group-hover:translate-x-1">-&gt;</span>
            </span>
        </Link>

    )
}