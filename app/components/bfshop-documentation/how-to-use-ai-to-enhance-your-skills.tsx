export default function AIEnhance() {
    return (
        <article className="font-inter leading-relaxed text-left p-2 lg:p-4">
            <p>I went from zero IT knowledge to IT manager in 12 months. What made that possible? Artificial intelligence.</p>
            <br />
            
            <p>Some think it's going to take over the world. Others think it's for lazy people who can't be bothered to do their own work. They're both wrong – AI is a free, personalised tutor. An expert on any subject, available 24/7.</p>
            <br />
            <h2 className="font-bold">Why Traditional Self Learning Fails</h2>
            <br />
            
            <p>Self-learning has never been easier. YouTube tutorials, online courses, endless articles — it's all there. But there's a problem.</p>
            <br />
            
            <p>Traditional learning is passive. You watch a video, read an article, move on. When you don't understand something, you're stuck. The video can't answer your specific question. The book doesn't know where you're confused.</p>
            <br />
            <p>Even online forums and comments sections don't do it in all cases – context specific guidance, formed in a way that works for your learning style, is the ideal.</p>
            <br />
            <p>That's where tutors come in — they provide feedback. They answer your questions, clarify confusion, adapt to how you learn.</p>
            <br />
            <p>But tutors are expensive. AI isn't. Tutors go to bed at night. AI doesn't. You get tutors for a slot of their time and that's the only time when you can bounce ideas off them. Had a realisation in the middle of the night when you can't sleep? AI is happy to talk.</p>
            <br />
            <p>As if that's not enough, AI knows everything. AI is Google, and every piece of public information ever put on it. Want to be an expert in ancient civilisations? AI knows all about it. Interested in marine biology? AI can tell you about it. Wondering how aerodynamics work? Ask AI!</p>
            <br />
            <h2 className="font-bold">How I Actually Use AI to Learn</h2>
            <br />
            <p>Countless times I've watched a YouTube video and understood maybe 30 percent of the concepts – with AI, I'll repeat the words, explaining the context, and have it explain it to me. I probably won't get it first time, but between back-and-forth messages, it'll click eventually.</p>
            <br />
            <h3 className="font-bold">Example: Learning DNS</h3>
            <br />
            <p><strong>Me:</strong> It's all well and good knowing that 'DNS is the phonebook of the internet' but how does it actually work? Like how does the process of domain name resolution occur during internet searches and communications?</p>
            <br />
            <p><strong>AI:</strong> Let me break down the actual process step by step.</p>
            <br />
            <p>When you type 'google.com' into your browser:</p>
            <br />
            <ol>
                <li>Your computer checks its local cache — 'Have I looked this up recently?' If yes, it uses the stored IP address. If not, it asks for help.</li>
                <li>Request goes to your DNS resolver (usually your ISP) — 'Hey, what's the IP address for google.com?'</li>
                <li>Resolver checks the root server — 'Who handles .com domains?' Root server responds: 'Ask the .com TLD server.'</li>
                <li>Resolver asks the TLD server — 'Who's authoritative for google.com?' TLD responds: 'Google's nameserver handles that.'</li>
                <li>Resolver asks Google's authoritative nameserver — 'What's the IP for google.com?' Nameserver responds: '142.250.185.46'</li>
                <li>Resolver sends IP back to your computer — Your browser can now connect to 142.250.185.46.</li>
            </ol>
            <br />
            <p>This all happens in milliseconds. The 'phonebook' metaphor is the what. This is the how — a chain of servers passing your request up the hierarchy until someone knows the answer.</p>
            <br />
            <p>I could watch a YouTube video on this. Or read a web guide on it. And the information would be the same. But what if I don't know what the resolver is? What if I don't know what the authoritative nameserver is? What if I want to understand how this process occurs in the context of the networking process?</p>
            <br />
            <p>You can't ask a YouTube video to clarify. You can't quiz a website. But you can ask AI. And it remembers your previous questions and pain points, what works for you, and over the course of the conversation, adapts to your understanding of the subject and tailor it to your understanding.</p>
            <br />
            <h3 className="font-bold">Another Way I Use AI: Generating Practice Exercises</h3>
            <br />
            <p><strong>Me:</strong> Give me a practice question on subnetting</p>
            <br />
            <p><strong>AI:</strong> Subnetting Practice Question:</p>
            <br />
            <p>You have the network 192.168.10.0/24 and need to create 4 subnets for different departments.</p>
            <br />
            <ol>
                <li>What subnet mask do you need?</li>
                <li>What are the 4 subnet addresses?</li>
                <li>What's the usable IP range for the first subnet?</li>
                <li>How many usable hosts per subnet?</li>
            </ol>
            <br />
            <p>Try it, then I'll check your answers.</p>
            <br />
            <p><strong>Me:</strong> I dont understand how you get 4 subnets within an IP address. Help me understand the concept</p>
            <br />
            <p><strong>AI:</strong> Good — this is exactly what AI is for.</p>
            <br />
            <h4>The Concept</h4>
            <br />
            <p>An IP address like 192.168.10.0/24 isn't just one address — it's a range of addresses.</p>
            <br />
            <h4>Breaking It Down</h4>
            <br />
            <p>192.168.10.0/24 means:</p>
            <br />
            <ul>
                <li>The first 24 bits are the network portion (locked, can't change)</li>
                <li>The last 8 bits are the host portion (flexible, you can assign these)</li>
            </ul>
            <br />
            <p>In binary: 192.168.10.0 = 11000000.10101000.00001010.00000000</p>
            <br />
            <p>These 8 bits can change: ^^^^^^^^</p>
            <br />
            <p>8 bits = 256 possible combinations (0-255)</p>
            <br />
            <p>So 192.168.10.0/24 actually contains 256 addresses total (from 192.168.10.0 to 192.168.10.255).</p>
            <br />
            <h4>Creating Subnets</h4>
            <br />
            <p>Subnetting = dividing that range into smaller chunks. Instead of one big network (256 addresses), you split it into multiple smaller networks.</p>
            <br />
            <p>To create 4 subnets: You "borrow" 2 bits from the host portion to create subnet IDs. Why 2 bits? Because 2^2 = 4 subnets.</p>
            <br />
            <p>New mask: /24 becomes /26 (borrowed 2 more bits)</p>
            <br />
            <p>Now you have 4 smaller ranges:</p>
            <br />
            <ul>
                <li>192.168.10.0 - 192.168.10.63 (Subnet 1)</li>
                <li>192.168.10.64 - 192.168.10.127 (Subnet 2)</li>
                <li>192.168.10.128 - 192.168.10.191 (Subnet 3)</li>
                <li>192.168.10.192 - 192.168.10.255 (Subnet 4)</li>
            </ul>
            <br />
            <p>Each subnet has 64 addresses (256 ÷ 4 = 64).</p>
            <br />
            <h4>The Analogy</h4>
            <br />
            <p>Think of it like a building:</p>
            <br />
            <ul>
                <li>192.168.10.0/24 = One building with 256 rooms</li>
                <li>Subnetting = Dividing it into 4 floors, each with 64 rooms</li>
                <li>Each floor is isolated — devices on Floor 1 can't directly talk to Floor 2 without a router.</li>
            </ul>
            <br />
            <p>The conversation continued for another 10 minutes until I could solve subnet problems independently. That's the power of iterative learning.</p>
            <br />
            <h2 className="font-bold">Working Above Your Experience Level</h2>
            <br />
            <p>AI doesn't just help you learn theory — it helps you learn by doing. My first IT role involved managing a company's entire IT infrastructure. Intune, Entra ID, DNS, domain hosting, device management — a lot for a beginner.</p>
            <br />
            <p>Having AI as a tutor has allowed me to understand these systems, apply accurate solutions to problems, and then understand their inner workings.</p>
            <br />
            <p>For example: Our website showed 'Not Secure' - I knew it needed HTTPS but didn't know how SSL certificates worked.</p>
            <br />
            <ul>
                <li>I asked AI to explain the concept first: what's a certificate, why does it encrypt traffic, what's a certificate authority?</li>
                <li>Once I understood the why, I asked how to implement it. AI walked me through DNS migration, certificate generation, and installation step by step.</li>
                <li>When I hit errors, I'd paste them to AI and ask what went wrong. Each error taught me something new about how SSL handshakes work.</li>
            </ul>
            <br />
            <p>Three hours later, the site was secure — and I understood the entire SSL/TLS process, not just how to click through a setup wizard. This is what AI enables: not just understanding concepts in isolation, but applying them to real problems.</p>
            <br />
            <h2 className="font-bold">How You Can Take Advantage of AI Learning</h2>
            <br />
            <p>Learning is a back and forth, messy process, but by putting it in a framework with AI integrated, it makes it much more manageable.</p>
            <br />
            <ol>
                <li>Start with basics – watch a tutorial, read an article. Get the overview</li>
                <li>Ask AI to clarify confusion — Didn't understand a concept? Ask AI to explain it differently.</li>
                <li>Request practice exercises — Have AI generate problems slightly above your level.</li>
                <li>Learn by troubleshooting — Hit an error? Paste it to AI, ask what went wrong.</li>
                <li>Iterate until it clicks — Keep asking "why" and "how" until you truly understand.</li>
            </ol>
            <br />
            <p>If it's something practical, have it guide you through a process. If it's something theoretical, have it make practice questions for you to work through. If you don't get the concept, ask it to reframe in a different way. Nothing is too complex to learn if you ask the right questions. And AI is infinitely patient.</p>
            <br />
            <h2 className="font-bold">Conclusion</h2>
            <br />
            <p>We are in the AI gold rush. Access to high-level education is free, instant and in your pocket. I've used it to break into a new industry, and now I'm using it to become a web developer.</p>
            <br />
            <p>Start today. Pick something you want to learn, open your choice of AI tool, and start asking questions.</p>
        </article>
    );
}