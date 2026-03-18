export default function BFShopProjectSpec() {
	return (
		<article className="font-inter leading-relaxed text-left p-2 lg:p-4">
			<h2 className="font-bold text-xl mb-2">Project Structure & Specifications</h2>
			<br />

			<p>The customer end of BFshop (BFcustomer) is part of my main website folder structure, as it started as a simple project. As the project grew, I decided to build the rest (BFmerchant) in a separate folder for better organization. BFshop will live on a subdomain, so it remains accessible from the main site.</p>
			<br />

			<h3 className="font-bold">Dependencies</h3>
			<br />
			<ul>
				<li>Tailwind CSS for styling (my preferred tool)</li>
				<li>Prisma for database connection</li>
				<li>Neon as the database (after issues with Supabase)</li>
			</ul>
			<br />

			<p>Setting up Neon was challenging, but I learned the basics of attaching a database to a project by doing and asking for help when needed. Even if I don’t know every command, I now understand the process better.</p>
			<br />

			<h3 className="font-bold">Styling Consistency</h3>
			<br />
			<p>If I could rebuild my site, I’d set clear styling rules from the start. For this project, I’ve created lists for spacing and typography per screen size. I’ll keep fonts and colors simple and professional.</p>
			<br />

			<h3 className="font-bold">API</h3>
			<br />
			<p>Both BFCustomer and BFmerchant will communicate with the database via the API in BFmerchant. This may not be perfect, but it’s a workable structure for now.</p>
			<br />

			<h3 className="font-bold">AI Disclaimer</h3>
			<br />
			<p>I use AI as a mentor and assistant, especially for learning new concepts, repeated structures, and complex tasks. My goal is to learn and understand, not just copy-paste. I’ll also use AI to audit the project as I go.</p>
			<br />

			<h3 className="font-bold">Next Steps</h3>
			<br />
			<ul>
				<li>Practice writing APIs</li>
				<li>Deploy BFmerchant on a subdomain of benfosterdev.com</li>
				<li>Wire up APIs to BFCustomer</li>
			</ul>
		</article>
	);
}
