export default function BFShopProgressReport2() {
    return (
        <article className="card-stack font-inter text-left">
            <div className="card-stack card-cluster-gap">
            <section className="card-stack-tight">
                <h2 className="card-title text-white">Progress update 2</h2>
                <p className="card-body text-zinc-200">
                    I'm now well into the process of building the backend for the cart slice.
                </p>
                <p className="card-body text-zinc-200">
                    The first order of business was to actually figure out exactly what each layer would have to do;
                    I had the vague understanding that the Control layer would link the frontend to the application
                    layer with an API, the app layer would activate the correct service in the service layer, and
                    this would evaluate business logic, make calculations etc, before activating the data layer to
                    write an order to the database.
                </p>
            </section>

            <section className="card-stack-tight">
                <h2 className="card-title text-white">Top to bottom:</h2>
                <ul className="card-body list-disc space-y-3 pl-6 text-zinc-200">
                    <li>
                        The API performs validation on the order it receives to make sure it's not empty. If it
                        fails the function ends and an error message is returned to the browser. It then creates a
                        variable which stores the output of the createOrder function, which is the name of the app
                        layer function, passing the order object down to it. The API then carries out an outbound
                        validation to check if the returning object is empty (as in if operations down the chain
                        failed). If that passes there's a successful response passed back.
                    </li>
                    <li>
                        The app layer uses the createOrder function which is very simple and activates
                        createOrderService, passing order down to the service layer.
                    </li>
                    <li>
                        This is where I am now. The service layer is the most complex and includes four main steps:
                        <ul className="list-disc space-y-2 pl-6 pt-2">
                            <li>Compare orders data to database; extract product/customer data.</li>
                            <li>Execute business logic.</li>
                            <li>Create an order.</li>
                            <li>Activate database operations.</li>
                        </ul>
                    </li>
                    <li>
                        When I realised I will need two sets of database operations, I decided to start writing the
                        first set before finishing the service function. That makes more sense to me. I also believe
                        at this point I should actually build the place order button in the frontend and connect it
                        to the API so I can start to look at the data as it is passed down.
                    </li>
                </ul>
            </section>
            </div>

            <section className="card-stack-tight">
                <p className="card-body text-zinc-200">
                    Having only written frontend React until now, this is quite the learning curve. My javascript
                    isn't good, but I'm enjoying learning to visualise the flow of data as it is passed between
                    functions, stored in variables and then manipulated.
                </p>
                <p className="card-body text-zinc-200">
                    On a completely different note, in an effort to upgrade my frontend work to a more professional
                    level I have standardised a set of utilities and visual norms which will be implemented across all
                    BFshop content. I also redesigned the blog section of my website (which contained BFshop
                    documentation such as this) to act as a project portal and documentation store all in one, which
                    I think is more sensible and professional.
                </p>
                <p className="card-body text-zinc-200">
                    The new design is far sleeker and gives it a more cutting edge feel.
                </p>
            </section>
        </article>
    );
}
