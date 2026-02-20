import { ExpenseTracker } from "./expense-tracker";
import { CodeExpenseTracker } from "./code-expense-tracker"

export default function DesktoprojectsPage() {
    return ( 
        <div id="projects" className="mx-auto space-y-32 bg-gradient-to-b from-white to-purple-100 p-4">
            <div>
                <h1 className="text-8xl font-bebas flex justify-center font-bold mb-16">Projects</h1>
                <h2 className="text-normal lg:text-xl font-oswald flex justify-center text-stone-500 mb-8">This is where you'll find the project I'm currently working on, and the ones I've compeleted</h2>
            </div>
            <div className="flex p-4 mt-8 gap-8">
                <div className="w-1/3 p-4 font-inter">
                    <p>Not including this website, this is my first real project. 
                        It's a simplified expense tracker, meaning I have to get comfortable 
                        with handling data, interactivity and logic to control what happens 
                        when you interact. As time goes on, this will get better looking
                        and more advanced. Beside it you can see the code for the project. 
                    </p>
                </div>
                <div className="w-1/3">
                    <ExpenseTracker />
                </div>
                <div className="w-1/3">
                    Code Coming Soon...
                 </div>
            </div>
        </div>
    )
}
