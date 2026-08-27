import Image from 'next/image';
import slice2Image from '../../../../../assets/slice2.png';

export default function ReceiveOrderDocument() {
    return (
        <article className="card-stack font-inter text-left">
            <section className="card-stack-tight">
                <h2 className="card-title text-white">Slice 2: Manage Orders</h2>
                <p className="card-body text-zinc-200">
                    The goal of Slice 2 is to display orders in received, sent, and delivered dashboards for the merchant, and allow the merchant to mark orders from received to sent and from sent to delivered.
                </p>
                <p className="card-body text-zinc-200">
                    Slice 2 is effectively two slices together: displaying orders is one and marking orders is the other. As marking orders is complementary to displaying orders, they are treated as one.
                </p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Architecture</h2>
                <p className="card-body text-zinc-200">
                    This slice started with the idea of avoiding a service like the one used in Slice 1 and instead having orders mapped to the frontend from objects storing the output of database operations.
                </p>
                <p className="card-body text-zinc-200">
                    This proved impossible because server-side data returned by database operations is not presentable client-side. APIs are used as the server/client boundary partly because they can serialize data into a transferable format such as JSON. Attempting to circumvent an API was unwise.
                </p>
                <p className="card-body text-zinc-200">
                    A traditional API, service, repository, and database layer structure was therefore chosen, resulting in the architecture shown below.
                </p>
                <figure className="card-stack-tight">
                    <Image
                        src={slice2Image}
                        alt="Slice 2 architecture showing the API, service, repository, and database layers"
                        className="h-auto w-full rounded-xl border border-white/10"
                        sizes="(max-width: 768px) 100vw, 768px"
                    />
                    <figcaption className="card-meta text-zinc-400">Slice 2 architecture</figcaption>
                </figure>
                <p className="card-body text-zinc-200">
                    This slice includes only the bare minimum functionality needed to create the scaffolding for BFshop, so it is intentionally light. Additions are discussed at the end.
                </p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Displaying orders</h2>
                <p className="card-body text-zinc-200">
                    The architecture uses three services for displaying orders: receivedOrdersService, sentOrdersService, and deliveredOrdersService.
                </p>
                <p className="card-body text-zinc-200">
                    Each service uses getOrders_DB_op. Separate database operations for retrieving received, sent, and delivered orders were originally used, but this caused problems: only two boards would load at a time and an error reported too many connections to Neon, the database.
                </p>
                <p className="card-body text-zinc-200">
                    getOrders_DB_op simply retrieves all orders from the database and returns them as orders. Each service then creates a variable for its relevant status and filters the returned orders where order.status equals delivered, received, or sent.
                </p>
                <p className="card-body text-zinc-200">
                    The services are called by their respective APIs. The APIs return the filtered orders to the frontend, where they are mapped to their respective columns.
                </p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Marking orders</h2>
                <p className="card-body text-zinc-200">
                    Marking orders follows a similar pattern, with an API calling a service. The structural difference is that different database operations are used for marking orders as sent and delivered.
                </p>
                <p className="card-body text-zinc-200">
                    Because the button to mark an order is rendered as part of a map function, its event handler needs the order ID. That ID is passed down the chain and finally used in the repositories to find the order and update its status column.
                </p>
                <p className="card-body text-zinc-200">
                    Once updated, an order is picked up by a different display service. For example, when a received order has its status changed to sent, the next call to receivedOrdersService will not pick it up from the orders object returned by getOrders_DB_op; sentOrdersService will pick it up instead.
                </p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Final word</h2>
                <p className="card-body text-zinc-200">
                    The whole chain is intentionally very light, so there is not much to discuss beyond the basic architecture. The service does not act like a service currently: no business logic is executed and nothing particularly complex happens. It is structured this way so that when more is added in the future, the structure is already ready for it.
                </p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Future additions</h2>
                <ul className="card-body list-disc space-y-2 pl-6 text-zinc-200">
                    <li>Include an order-items viewing option in the frontend; this requires an additional API.</li>
                    <li>Include persistence for status-column changes to allow for visual effects when orders change columns. An order activity database could function as logging, possibly activating a workflow to update a user document with events such as &quot;order #1 marked as sent&quot;. In the future, it could also notify customers of order updates.</li>
                    <li>Include a fourth status option: verified delivered. This would allow the merchant to click a delivered order and make it disappear or become lowlighted when satisfied.</li>
                    <li>Add validation to ensure each API and service is receiving the correct data.</li>
                </ul>
            </section>
        </article>
    );
}