import Image from "next/image"
import image1 from "../../../assets/1.png"
import image2 from "../../../assets/2.png"
import image3 from "../../../assets/3.png"
import image4 from "../../../assets/4.png"
import image5 from "../../../assets/5.png"

function Figure({
    src,
    alt,
}: {
    src: typeof image1
    alt: string
}) {
    return (
        <figure className="my-6 space-y-2">
            <Image
                src={src}
                alt={alt}
                className="h-auto w-full rounded-xl border border-neutral-900/10 shadow-sm"
                sizes="(max-width: 768px) 100vw, 768px"
            />
        </figure>
    )
}

export default function ContactFormEmailAutomationPost() {
    return (
        <article className="font-inter leading-relaxed text-left p-2 lg:p-4 space-y-5">
            <p>
                I didn&apos;t want my website code to handle all the email data going through the contact form.
                Instead, I wanted an automated workflow to handle all my site&apos;s emails. I thought it would be simple
                until I spent two hours wondering why I was getting 403 errors.
            </p>

            <section className="space-y-3">
                <h2 className="font-bold text-xl">Why do it in the first place?</h2>
                <p>
                    Automation platforms like n8n, Power Automate, and Zapier are one of the best ways to understand modern
                    systems. By seeing the connections, authentications, and transfer of data, you learn about modern tech in
                    a way that programming or networking just don&apos;t provide.
                </p>
                <p>
                    They&apos;re also great for people who don&apos;t want to deep dive into coding. That&apos;s not to say they are easy,
                    but you don&apos;t end up burying integrations under oceans of code.
                </p>
                <p>
                    Workflows also act like a hub for a particular function within your stack. It&apos;s a visual dashboard, which
                    in code might be spread across a whole project.
                </p>
                <p>When it comes to email, workflow automation opens up a lot of useful outcomes:</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Send enquiries straight to your CRM</li>
                    <li>Sync customer requests with calendars or task managers</li>
                    <li>Add AI classification or summarisation</li>
                    <li>Notify your team through Slack, Teams, or Discord</li>
                    <li>Swap email providers without changing your application code</li>
                </ul>
                <p>In short, it is simpler, more accessible, and more scalable.</p>
                <p>
                    This article assumes you already have a contact form wired up with an API. That can be done through code or
                    through no-code platforms.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-bold text-xl">How did I do it?</h2>

                <h3 className="font-bold text-lg">1. The contact form</h3>
                <p>
                    This automation starts with the contact form. A user enters their query in the query box, and their email in
                    the email box. These fields will be relevant later.
                </p>
                <p>The first image shows &quot;Hi&quot; in the query box and an email in the email box.</p>
                <Figure src={image1} alt="Image 1 showing the contact form with the query and email fields filled in" />
                <p>
                    Clicking Send activates an API in the codebase. The API specifies the headers and body of an HTTP request,
                    which becomes important later. The API then sends the request on the path provided by the n8n webhook node.
                </p>

                <h3 className="font-bold text-lg">2. The webhook</h3>
                <p>
                    In n8n, I picked a webhook node. This is the ideal tool because my application is the one initiating the
                    communication. The workflow just sits there waiting for it. Scheduled triggers would be wasteful, so it is a
                    webhook.
                </p>
                <Figure src={image2} alt="Image 2 showing the n8n webhook node" />
                <p>
                    You can see the URL used to access the workflow at the top. The HTTP method is set to POST because something
                    is being changed.
                </p>
                <p>
                    Authentication is set to header auth because otherwise the webhook path is just an exposed online endpoint.
                    The webhook secret and credential name need to match exactly what is set in the API.
                </p>
                <p>
                    They also need to be saved as environment variables in your hosting service. I use Vercel, and this part is
                    essential.
                </p>
            </section>

            <section className="space-y-3">
                <h3 className="font-bold text-lg">3. Create and send an email</h3>
                <p>
                    Now I need an email to come into my inbox containing the information the user entered in the contact form.
                    There are a few ways to do this.
                </p>
                <p>
                    The obvious option is to set up credentials so n8n can log into an email account and send from there. I try to
                    avoid that wherever possible because it creates another opening that can be exploited.
                </p>
                <p>So I used Resend, an email service made for developers in situations like these.</p>
                <Figure src={image3} alt="Image 3 showing the Resend email send node" />
                <p>
                    You can set the operation to send and use onboarding@resend.dev as the from address. That is a default email
                    for this flow, so you do not need to set up credentials just to test it. You only need to install the Resend
                    nodes in n8n.
                </p>
                <p>
                    The query and email boxes from the first step come back into play here. The data on the left side of the
                    screen is the data passed through the workflow so far, and you can drag those fields into the body.
                </p>
                <Figure src={image4} alt="Image 4 showing the email body with dynamic data mapping" />
                <p>
                    I set it so the email shows the query text, followed by from and then the email address the user entered.
                    This is called dynamic mapping, and it is one of my favourite things about automation.
                </p>
            </section>

            <section className="space-y-3">
                <h3 className="font-bold text-lg">4. Return an email</h3>
                <p>
                    This step is not essential, but I think it is nice for users to receive a polite response acknowledging their
                    message.
                </p>
                <p>
                    It is a little more complex because now the email appears to be coming from my domain. I use
                    contact@benfosterdev.com, but that is not a real mailbox. Resend just pretends to send from that address.
                </p>
                <p>
                    In Resend, you add the domain you want to send from and verify it with your domain provider. If you use
                    Cloudflare, that part is fairly straightforward.
                </p>
                <p>
                    For this step you need a credential with Resend, which you set up using an API key from the Resend site.
                </p>
                <Figure src={image5} alt="Image 5 showing the return email configuration" />
                <p>
                    The image shows the name I want the email to come from and the email field dynamically mapped from the
                    webhook node in the To section. In my example, it will go to Judge@holden.net.
                </p>
                <p>The subject says BFdev, and the body reads as it does in the image.</p>
            </section>

            <section className="space-y-3">
                <h2 className="font-bold text-xl">Problems</h2>
                <p>Simple.</p>
                <p>Or it should be.</p>
                <p>
                    As mentioned earlier, the HTTP request specifies both the headers and the body of the request. This is where
                    n8n can trip you up because credentials are a beast of their own.
                </p>
                <p>What exactly are credentials in n8n?</p>
                <p>
                    They are sets of login details you create, either so n8n can access a platform or so something else can access
                    your workflow.
                </p>
                <p>
                    In this case, it is the latter. An API is trying to access the workflow. And when you write that API, the
                    header has a name. That name must match the name value in the credential you build in n8n.
                </p>
                <p>I did not do this.</p>
                <p>
                    As a result, I spent hours spamming the API and staring angrily at error messages. Don&apos;t be like me. Get
                    your credential values right.
                </p>
                <p>
                    That is it. You now have a simple, functional contact form automation. There are ways to tighten it up and make
                    it more professional, but that is for another article.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="font-bold text-xl">Salient points of this automation</h2>
                <ul className="list-disc pl-6 space-y-1">
                    <li>Dynamic mapping makes everything easier</li>
                    <li>
                        You need to verify your domain to allow Resend to send on your behalf. That involves DNS SPF records and is
                        a great opportunity to learn more about how the internet works
                    </li>
                    <li>Make sure to test the automation while building it so the data needed for mapping fields is present</li>
                    <li>Make sure your credentials are properly named</li>
                </ul>
            </section>
        </article>
    )
}