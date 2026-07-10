export default function BFShopBlogPost() {
	return (
		<article className="font-inter leading-relaxed text-left p-2 lg:p-4">
			<div className="text-center">
				<h2 className="font-bold text-xl mb-2">Introduction to BFshop</h2>
				<br />

				<p>In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.</p>
				<br />

				<p>Ben Foster</p>
				<p>5th July 2026</p>
				<p>2 min read</p>
				<br />
			</div>

			<h3 className="font-bold">What is BFshop?</h3>
			<br />

			<p>I'm currently building my first AI enhanced business system, BFshop.</p>
			<br />

			<p>At first glance, BFShop looks like another e-commerce project. It isn't.</p>
			<br />

			<p>BFShop is a full-stack e-commerce business simulation that I'm using to explore how AI and automation can be integrated into real business systems.</p>
			<br />

			<p>It is both purposeful and experimental.</p>
			<br />

			<p>The project will feature both the customer and merchant end of the same E-commerce store, allowing me to truly understand the architecture. There will be a shared database, onto which placed orders will be written, and from which received orders will be read.</p>
			<br />

			<p>This is what I'm calling an AI enhanced project; the first in a series of projects as I learn how to integrate AI enhancements to everyday systems.</p>
			<br />

			<h3 className="font-bold">Why am I building it?</h3>
			<br />

			<p>AI has moved faster than the world around it. We're playing catch up.</p>
			<br />

			<p>There are many individual AI products out there, offered mostly to big business; I'm interested in how AI can improve complete business systems at a level that's available to the average person or small business.</p>
			<br />

			<p>I want to experiment with where AI fits in with the day-to-day systems people use; the websites, the data connected to them, the admin work faced by people doing business, the chatbots that have replaced humans in customer service.</p>
			<br />

			<p>I also haven't, prior to this project, delved into full stack software development, so it's an exciting way to learn.</p>
			<br />

			<h2 className="font-bold text-xl mb-2">Core components</h2>
			<br />

			<h3 className="font-bold">Customer interface</h3>
			<br />

			<p>This is the E-commerce store where customers would place orders, featuring a chatbot for querying product, orders and business information. The idea is that the bot will be helpful and easy to use, drawing on live data.</p>
			<br />

			<h3 className="font-bold">Merchant interface</h3>
			<br />

			<p>This is where the merchant would view their orders, which will have arrived from the customer side. There will also be a chat interface here; I use the word chat interface and not chatbot because the idea here is rather than as a bot for the user to chat to, I'm viewing this as an experimentation with the gradual move from click based interactivity to the chat based interactivity that may be facilitated by AI.</p>
			<br />

			<p>This chat interface will have access to everything the merchant needs to know about, as well as functionality; creating/cancelling/altering orders, interacting with other platforms.</p>
			<br />

			<h3 className="font-bold">Backend</h3>
			<br />

			<p>The backend is the interesting part for me; as someone who has only worked with the frontend prior to this, it's quite a change to my concept of coding.</p>
			<br />

			<p>The backend structure will be discussed in more depth in further articles, but it will basically function to share a database between the customer and merchant ends and facilitate the AI and automation integrations.</p>
			<br />

			<h3 className="font-bold">Automation and Integration</h3>
			<br />

			<p>Modern systems are a web of interconnected platforms; Slack, Google Drive, Microsoft 365, CRMs, among others; BFshop will use n8n integrations to trigger relevant automations for the purpose of reducing work for the merchant and keeping the customer informed.</p>
			<br />

			<h3 className="font-bold">AI Overwatch</h3>
			<br />

			<p>One concern with AI technology as time goes on is in its autonomy; as AI systems become capable of carrying out work on behalf of users, visibility into their actions becomes increasingly important.</p>
			<br />

			<p>That's why I'm building the feature AI Overwatch, which will display the AI's capabilities and actions clear for the user to see and interact with.</p>
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
