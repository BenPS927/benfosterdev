export default function BFShopBlogPost() {
	return (
		<article className="font-inter leading-relaxed text-left p-2 lg:p-4">
			<div className="text-center">
				<h2 className="font-bold text-xl mb-2">Introduction to BFshop</h2>
				<br />

				<p>In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.</p>
				<br />

				
			</div>

			<h3 className="font-bold">What is BFshop?</h3>
			<br />

			<p>I'm currently building my first AI enhanced business system, BFshop.</p>
			
			<br />

			<p>BFShop is a business simulation that I'm using to explore how AI and automation can be integrated into real business systems, as well as build my first full stack system.</p>
			<br />

			<p>It is both purposeful and experimental.</p>
			<br />

			<p>The project is at its core an ecommerce store featuring the merchant and customer end for users to interact with. But the reality is more of a simulated production business; there will be workflows coordinated to streamline real processes; a customer service AI assistant, an AI assistant for the merchant and a shared database.</p>
			<br />

			<p>Rather than treating AI as a standalone feature, BFShop explores how AI, automation and software integrations can work together within a complete business system.</p>
			<br />

			<h3 className="font-bold">Why am I building it?</h3>
			<br />

			<p>AI has moved faster than the world around it. We're playing catch up.</p>
			<br />

			<p>Businesses today rely on dozens of different platforms; websites, CRMs, email, accounting software, cloud storage, internal tools. More often than not, they're disconnected, leaving people to move information between them manually.</p>
			<br />

			<p>I'm interested in how AI fits into that ecosystem. Not as a novelty, but as one part of a connected business system alongside automation, integrations and the software people already use every day.</p>
			<br />

			<p>BFShop is my way of experimenting with that. I'm exploring how AI can work with full-stack applications, shared data, workflow automation and external platforms to reduce repetitive work and create systems that are genuinely useful to businesses of any size.</p>
			<br />

			<p>It's also my first full-stack software project, making it an opportunity to learn backend development, system architecture and infrastructure while building something with a real purpose.</p>
			<br />

			<h2 className="font-bold text-xl mb-2">Core components</h2>
			<br />

			<h3 className="font-bold">Customer interface</h3>
			<br />

			<p>This is the ecommerce store where customers would place orders, featuring a chatbot for querying product, orders and business information. Placed orders will go through the backend and write to the database. The bot will be helpful and easy to use, drawing on live data.</p>
			<br />

			<h3 className="font-bold">Merchant interface</h3>
			<br />

			<p>Orders will be written here from the database via the shared backend in three panels: received, delivered, arrived.</p>
			<br />
			<p>This will also feature an AI chat interface which will act as an assistant to the merchant; This serves as an experiment into how AI may gradually shift business software from traditional click-based interfaces towards conversational ones.</p>

			<br />

			<h3 className="font-bold">Backend</h3>
			<br />

			<p>The backend will consist of four layers:</p>

			<br />

				<ul className="list-disc pl-6">
					<li>Control layer</li>
					<li>Application (app) layer</li>
					<li>Service layer</li>
					<li>Data layer</li>
				</ul>

			<br />

			<p>The control layer will contain API routes which accept requests and deliver responses to the frontends.</p>
			<p>The application layer will decide the sequence of events for how to execute those requests.</p>
			<p>The service layer will contain business rules and answer questions such as 'is this order valid' or 'what should the total be'. It prepares data and asks the data layer to read or write it.</p>
			<p>The data layer will perform database operations such as creating, reading, updating and deleting records.</p>
			
			<br />

			<h3 className="font-bold">Automation and Integration</h3>

			<br />

			<p>Modern systems are a web of interconnected platforms; Slack, Google Drive, Microsoft 365, CRMs, among others; BFshop will use n8n integrations to coordinate workflows for the purpose of reducing work for the merchant and keeping the customer informed.</p>
			<br />

			<h3 className="font-bold">AI Overwatch</h3>
			<br />

			<p>One concern with AI technology as time goes on is in its autonomy; as AI systems become capable of carrying out work on behalf of users, visibility into their actions becomes increasingly important.</p>
			<br />

			<p>That's why I'm building the feature AI Overwatch, which will display the AI's actions and available capabilities in a transparent way.</p>

			<br />

			<h2 className="font-bold">Data</h2>

			<br />

			<p>The system is built around a number of shared data entities.</p>

			<br />

			<ul className="list-disc pl-6">
				<li>Product; the product itself and its traits.</li>
				<li>Order; the sum of the products placed by a user in the customer frontend.</li>
				<li>OrderItem; an individual line within the Order data entity.</li>
				<li>Customer; the customer logged in at a given time. This will only include one entry as authentication is one more element which would add complexity to an already complex project.</li>
				<li>ActivityLog; this will store data taken from backend requests and allow visibility over AI behaviour, to be presented in AI overwatch.</li>
			</ul>

			<br />

			<h2 className="font-bold text-xl mb-2">Final Thoughts</h2>
			<br />

			<p>BFshop is a full business simulation that will develop as time goes on; features may be added, existing ones altered.</p>
			<br />

			<p>Rather than treating BFshop as a finished specification, I'm seeing it as an evolving engineering project. As I learn more, the system will evolve more.</p>
			<br />

			<p>It should be noted that while this is a business simulation some parts may be left out; financial information, legal detail.</p>
		</article>
	);
}
