

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-100 flex justify-between items-center p-4 lg:p-8 gap-8">
            <img src="/logo.png" alt="Logo" className="w-16 lg:w-32 h-6 lg:h-12 ml-6 lg:ml-12" />
            <div className="flex items-center gap-4 lg:gap-8">
                <Link href="/playground" className="font-inter text-sm lg:text-normal text-orange-700 underline underline-offset-4 hover:text-orange-900">
                    Playground
                </Link>
                <p className="font-inter text-sm lg:text-normal text-orange-700">&copy; 2026 Ben Foster. All rights reserved.</p>
            </div>
        </footer>
    )
};