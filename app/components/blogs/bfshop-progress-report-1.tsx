export default function BFShopProgressReport1() {
    return (
        <article className="font-inter leading-relaxed text-left p-2 lg:p-4">
            <h2 className="font-bold text-xl mb-2">Progress Report 1</h2>
            <br />

            <h3 className="font-bold">Where am I now?</h3>
            <br />

            <p>
                The frontend for the customer side where orders can be placed is now mostly complete; all that
                needs adding visually is the "place order" button. I am not building that until the appropriate
                point when creating the actual cart slice, as I am treating it as a plug between the frontend and
                backend.
            </p>
            <br />

            <p>
                I have been setting up n8n to be self hosted on my virtual private server so I can avoid
                per-execution pricing, be in total control, and most importantly have my automation platform as part
                of my own ecosystem.
            </p>
            <br />

            <p>
                Ecosystem is the important word here, as that is what I have accidentally created while building
                BFshop. I am using Neon database, Next.js, and a VPS hosting n8n using Docker. Doing so is giving me
                an excellent understanding of connectivity and systems integration, which is exactly what I want for
                BFshop. Due to AI's ability in programming, I believe that developers who can integrate systems will
                be the winners.
            </p>
            <br />

            <h3 className="font-bold">What issues have I faced?</h3>
            <br />

            <ul className="list-disc pl-6 space-y-3">
                <li>
                    <span className="font-semibold">Cart:</span> The cart logic execution. The logic itself is fairly
                    straightforward - input form sends event to function handler, function handler saves to local
                    storage, local storage is mapped to cart - but the execution, for someone who is still a beginner
                    at non-visual programming, has been very difficult and I have used AI plenty. There are also many
                    caveats which require code I do not know, such as an item, when selected and already in the cart,
                    not creating a second entry in the cart.
                </li>
                <li>
                    <span className="font-semibold">VPS:</span> HTTP lockout. After setting up the self hosted n8n, I
                    was unable to access it in the browser due to a security concern, which I knew was a security
                    issue. n8n was being served on HTTP and it needed to be HTTPS. The answer was to set up Caddy, a
                    reverse proxy, as the DNS endpoint for lookups to that domain.
                </li>
                <li>
                    <span className="font-semibold">Cart:</span> Unexplained changes to element colour on the customer
                    side. This turned out to be due to light/dark mode changes on mobile, meaning the elements
                    inherited the wrong colours. The fix was to apply explicit colours which cannot be overwritten.
                </li>
            </ul>
            <br />

            <h3 className="font-bold">What have I learned?</h3>
            <br />

            <ul className="list-disc pl-6 space-y-3">
                <li>
                    I am now more experienced in a handful of non-visual related coding elements; not mastered, not
                    even skilled in, but I now know they exist and can use them as tools when needed. These include a
                    function handler and how it can work, LocalStorage, input forms, and mapping.
                </li>
                <li>
                    An introduction into infrastructure engineering. The work with the VPS and Docker has given me an
                    insight into the infrastructure that allows software to run.
                </li>
                <li>Basic Linux commands; ls, cat, nano.</li>
            </ul>
            <br />

            <h3 className="font-bold">What do I need to do next?</h3>
            <br />

            <p>
                Build the backend for the cart slice of BFshop. This will involve writing pure JavaScript with no
                visual references for what I am doing, so it is a big step but I am looking forward to it.
            </p>
            <br />
        </article>
    );
}
