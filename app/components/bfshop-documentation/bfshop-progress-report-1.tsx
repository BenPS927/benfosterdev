export default function BFShopProgressReport1() {
    return (
        <article className="card-stack font-inter text-left">
            <section className="card-stack-tight">
                <h2 className="card-title text-white">Where am I now?</h2>
                <p className="card-body text-zinc-200">
                    The frontend for the customer side where orders can be placed is now mostly complete; all that
                    needs adding visually is the place order button. I am not building that until the appropriate
                    point when creating the actual cart slice, as I am treating it as a plug between the frontend and
                    backend.
                </p>
                <p className="card-body text-zinc-200">
                    I have been setting up n8n to be self-hosted on my virtual private server so I can avoid
                    per-execution pricing, stay in full control, and keep the automation platform inside my own
                    ecosystem.
                </p>
                <p className="card-body text-zinc-200">
                    Ecosystem is the key word here, as that is what I have accidentally created while building
                    BFshop. I am using Neon database, Next.js, and a VPS hosting n8n using Docker. Doing so is giving
                    me an excellent understanding of connectivity and systems integration, which is exactly what I
                    want for BFshop. Due to AI's ability in programming, I believe developers who can integrate
                    systems will be the winners.
                </p>
            </section>

            <section className="card-stack-tight">
                <h2 className="card-title text-white">What issues have I faced?</h2>
                <ul className="card-body list-disc space-y-3 pl-6 text-zinc-200">
                    <li>
                        <span className="font-semibold text-white">Cart:</span> The cart logic execution. The logic
                        itself is fairly straightforward: input form sends event to function handler, function handler
                        saves to local storage, local storage is mapped to cart. The execution, for someone still a
                        beginner at non-visual programming, has been very difficult and I have used AI plenty. There
                        are also many caveats requiring code I do not know yet, such as preventing duplicate cart
                        entries when an item already exists.
                    </li>
                    <li>
                        <span className="font-semibold text-white">VPS:</span> HTTP lockout. After setting up
                        self-hosted n8n, I was unable to access it in the browser due to a security issue. n8n was
                        being served on HTTP and needed HTTPS. The fix was setting up Caddy as a reverse proxy for DNS
                        lookups to that domain.
                    </li>
                    <li>
                        <span className="font-semibold text-white">Cart:</span> Unexplained changes to element color
                        on the customer side. This turned out to be caused by light/dark mode changes on mobile,
                        meaning elements inherited incorrect colors. The fix was applying explicit colors that cannot
                        be overwritten.
                    </li>
                </ul>
            </section>

            <section className="card-stack-tight">
                <h2 className="card-title text-white">What have I learned?</h2>
                <ul className="card-body list-disc space-y-3 pl-6 text-zinc-200">
                    <li>
                        I am now more experienced in several non-visual coding elements. Not mastered and not yet
                        skilled, but I know they exist and can use them as tools when needed. These include function
                        handlers, LocalStorage, input forms, and mapping.
                    </li>
                    <li>
                        An introduction to infrastructure engineering. The VPS and Docker work has given me insight
                        into the infrastructure that allows software to run.
                    </li>
                    <li>Basic Linux commands: ls, cat, nano.</li>
                </ul>
            </section>

            <section className="card-stack-tight">
                <h2 className="card-title text-white">What do I need to do next?</h2>
                <p className="card-body text-zinc-200">
                    Build the backend for the cart slice of BFshop. This will involve writing pure JavaScript with no
                    visual references for what I am doing, so it is a big step and I am looking forward to it.
                </p>
            </section>
        </article>
    );
}
