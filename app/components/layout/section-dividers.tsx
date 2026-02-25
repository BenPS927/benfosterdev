import Link from 'next/link'

export function Divider1() {
    return (
        <div className="border bg-gradient-to-b from-purple-100 to-white h-[50vh] p-16">
            <Link href="/blog">
            <div className="border w-1/3">
                </div>
            </Link>
          
        </div>
    );
}

export function Divider2() {
    return (
        <div className= "bg-gradient-to-b from-gray-200 to-white h-[25vh]">
           
        </div>
    );
}

export function Divider3() {
    return (
        <div className="border bg-gradient-to-b from-gray-200 to-blue-100 h-[25vh]">
        
        </div>
    );
}