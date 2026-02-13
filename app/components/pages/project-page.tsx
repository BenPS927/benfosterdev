import { ExpenseTracker } from "@/app/components/expense-tracker";

export default function ProjectPage() {
    return ( 
        <div className="mx-auto ml-2 mr-2 mt-4 space-y-4 bg-gray-20 rounded-md">
            <div className="rounded-md flex flex-col lg:flex-row justify-center p-4 gap-4">
                <div className="rounded-md w-full lg:w-1/3 p-4">
                    <h1 className="text-xl text-stone-500 font-oswald">Welcome to my project page!</h1>
                    <p className="text-stone-500 font-oswald mt-4"> 
                        This is where you'll find the current project I'm working on. Right now,  
                        I'm still early on in my JS/React education, having done about 40 hours now.
                        <br />
                        This project is a simple expense tracker, forcing me to get comfortable using state 
                        and variables. As I put these projects out and my skills improve, this site will slowly become
                        better looking, and more interactive. It's a work in progress!
                        </p>
                </div>
                <main className="rounded-md w- full lg:w-2/3">
                    <ExpenseTracker />
                </main>

            </div>

        </div>
    )

}
  
