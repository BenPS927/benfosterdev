export default function PlaceOrderDocument() {
    return (
        <article className="card-stack font-inter text-left">
            <section className="card-stack-tight">
                <h2 className="card-title text-white">Place Order Slice</h2>
                <p className="card-body font-semibold text-zinc-200">
                    This slice uses an API, service, and data-access layer architecture. The original plan was to include an application layer between the API and service, but this seemed needless as it was just another layer which had no real function. The entirety of the place order functionality deals with the service layer taking data from the placed order, referencing it against the database, and creating a new order and its items. This document focuses on that, with the database operations mentioned but not discussed in too much detail as they are very simple.
                </p>
                <p className="card-body font-semibold text-zinc-200">
                    The logic accounts in part for the fact that the client supplies only product identity and quantity, while product metadata and pricing are resolved server-side from the database. This prevents client-controlled values such as price from becoming authoritative order data.
                </p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Frontend</h2>
                <p className="card-body text-zinc-200">
                    The place order button in the cart triggers an event handler which accesses localStorage, which the cart is also derived from. Order data is produced from this and sent to the API.
                </p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">API</h2>
                <p className="card-body text-zinc-200">
                    First is the API. The order data from the request body is stored in the order variable and a validation check is done on it.
                </p>
                <p className="card-body text-zinc-200">
                    The createOrderService function is called and order passed to it.
                </p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Service</h2>
                <p className="card-body text-zinc-200">
                    In the service, a transaction is started. This is essential as it provides atomicity for the database operations, avoiding situations such as where stock is decremented before the order is placed, and another order takes the last item of stock. The transaction will prove to be problematic later.
                </p>
                <p className="card-body text-zinc-200">
                    The service is structured as multiple smaller functions. The code grouping was done so to make each function obvious. The names too.
                </p>
                <br />
            </section>

            <section className="card-stack-tight">
                <h3 className="card-title text-white">processCustomer</h3>
                <p className="card-body text-zinc-200">
                    The first, processCustomer, is intended to compare the customer ID sent down with the order. It does this by calling getCustomer_DB_op, which finds the customer in the database with a matching ID. If this fails then of course an error is thrown, meaning the database operation acts as validation and so extra checks aren&apos;t needed in the service.
                </p>
                <p className="card-body text-zinc-200">
                    In BFshop&apos;s first iteration, the customer ID is hardcoded as always one for simplicity.
                </p>
                <p className="card-body text-zinc-200">Output of the operation is stored in <code className="text-sky-300">customer</code>.</p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h3 className="card-title text-white">processProduct</h3>
                <p className="card-body text-zinc-200">
                    The next function is processProduct and this is more complex. At this point we only have the product ID, so we need to find the real product in the database.
                </p>
                <p className="card-body text-zinc-200">
                    Another database operation, getProduct_DB_op, is called. This gives us an array of the products with corresponding IDs. For each, a variable is created which tests for matching IDs between server-side products and client-side products.
                </p>
                <p className="card-body text-zinc-200">
                    There is a check, in the database operation, to match the new products array length to the product IDs length to act as validation, but this does not correctly handle duplicate product IDs and is marked for replacement during validation hardening.
                </p>
                <p className="card-body text-zinc-200">
                    If successful, the next check is carried out, which makes sure there is adequate stock to match the quantity property of the order item.
                </p>
                <p className="card-body text-zinc-200">Products is returned to the function.</p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h3 className="card-title text-white">createOrderItems</h3>
                <p className="card-body text-zinc-200">
                    Then we create the order items. We have to create them before creating the order as we need them to calculate the order total, but we cannot write them to the database, as they rely on the order ID.
                </p>
                <p className="card-body text-zinc-200">
                    A map function matches product IDs from the order to product IDs from the previously made products variable, and creates one object per ID.
                </p>
                <p className="card-body text-zinc-200">
                    The order item, named backendOrderItem to distinguish it from the items of the incoming order, is created with the properties product_id, line_total, quantity, unit_price, and product_name.
                </p>
                <p className="card-body text-zinc-200">The output is returned to the overall function.</p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h3 className="card-title text-white">createOrder and writeOrderItems</h3>
                <p className="card-body text-zinc-200">
                    In createOrder, aggregation of the created order items is carried out using reduce so we can determine the total of the order.
                </p>
                <p className="card-body text-zinc-200">
                    The rest of order data is formed and passed to the called database operation, WriteOrderDB_op, which writes the order to the order table in the database.
                </p>
                <p className="card-body text-zinc-200">
                    backendOrderItem[] is mapped over in writeOrderItems, and its outputs are passed to the final database operation, WriteOrderItems_DB_op.
                </p>
                <p className="card-body text-zinc-200">createOrder is returned and the transaction ended.</p>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Architectural decisions</h2>
                <ul className="card-body list-disc space-y-2 pl-6 text-zinc-200">
                    <li>An application layer was omitted as it was effectively just another API layer.</li>
                    <li>Higher quality validation and other specificities were omitted to allow for quicker progress.</li>
                </ul>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Problems</h2>
                <ul className="card-body list-disc space-y-2 pl-6 text-zinc-200">
                    <li>The transaction returned a failure code every time despite the programming being correct. By turning off pooling in Neon, the database service in use, this was abated.</li>
                </ul>
            </section>

            <section className="card-stack-tight">
                <br />
                <h2 className="card-title text-white">Relevant data entities</h2>
                <pre className="overflow-x-auto rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm leading-7 text-zinc-200"><code>{`CreateOrderRequest {
  items: OrderItem[];
  customerId: number;
}

// A line within the order
export interface OrderItem {
  productId: number;
  quantity: number;
}

// The necessary properties from the products database
export interface ProductsType {
  id: number;
  title: string;
  price: number;
  stock: number;
}

// The necessary property from the customer database
export interface CustomerType {
  id: number;
}

// The order items to be written to the database
export interface BackendOrderItem {
  product_id: number;
  quantity: number;
  line_total: number;
  unit_price: number;
  product_name: string;
}

// The order to be written
export interface CreatedOrder {
  customer_id: number;
  status: string;
  total: number;
  created_at: Date;
  id: number;
}

// The backend order item once it is to be written to the database
export interface WrittenOrderItems {
  id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  unit_price: number;
  line_total: number;
}`}</code></pre>
            </section>
        </article>
    );
}