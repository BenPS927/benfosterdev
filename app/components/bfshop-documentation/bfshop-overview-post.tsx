import Link from 'next/link';

export default function BFShopOverviewPost() {
	return (
		<article className="font-inter leading-relaxed text-left p-2 lg:p-4">
			<div className="text-center">
				<h2 className="font-bold text-3xl mb-6 mt-4">Introduction</h2>
				<br />

				<p>BFshop is an experimental eCommerce intelligence system built around a simulated online store. It analyses business data to find useful patterns and information, then uses AI to present and discuss what it finds with the merchant. The project is a testing ground for exploring how data analysis and AI can work together to make business information more useful and easier to understand.</p>
				<br />
			</div>

			<h3 className="font-bold text-xl mt-8 mb-4">Overview</h3>

			<p>BFshop is an experiment that has changed continuously. It was always planned to be an eCommerce store (this has not changed), with both a customer and merchant interface with a shared backend (this has also not changed).</p>
			<br />

			<p>It was to be an 'AI enhanced project', experimenting with how AI can be utilised to improve modern business systems.</p>
			<br />

			<p>It was to do this by including:</p>
			<br />

			<ul className="list-disc pl-6 mb-4">
				<li>Customer service chatbot</li>
				<li>AI assistant for the merchant interface for use in facilitating workflow and assessing business data</li>
				<li>An 'AI Overwatch' feature for monitoring AI activity and behaviour</li>
			</ul>

			<p>Over time I realised that, in this context at least, AI's utility is not in simple chat interface or as an assistant taking orders, but in assessing information and being able to converse on that information.</p>
			<br />

			<p>I then identified what I believe is lacking in analysis apps for eCommerce stores:</p>
			<br />

			<ul className="list-disc pl-6 mb-4">
				<li>Offer findings without being asked</li>
				<li>Connect findings to potential business actions (with the potentiality of acting on them)</li>
				<li>Be easier to use</li>
				<li>Offer easier to understand information and data</li>
			</ul>

			<p>Then I realised that BFshop's simulated eCommerce environment offers an ideal ground for passing data through, which could be analysed.</p>
			<br />

			<p>The logical progression was to turn BFshop into an experiment exploring a possible solution to these problems.</p>
			<br />

			<p>It will attempt this with the generation business data into its ecosystem, analysis and presentation of useful findings by a query-able AI chat interface.</p>
			<br />

			<h3 className="font-bold text-xl mt-8 mb-4">Three Main Features</h3>

			<ul className="list-disc pl-6 mb-4">
				<li>A backend analysis machine for the simulated data</li>
				<li>Merchant management platform, including an AI chat interface for presenting and discussing data</li>
				<li>The eCommerce store frontend where orders can be placed</li>
			</ul>

			<p>A synthetic economy will be used to simulate the generation of business data. This will involve two main features:</p>
			<br />

			<ul className="list-disc pl-6 mb-4">
				<li>A workflow storing a base of 'customers' with a set of characteristics which simulate buying behaviour by generating orders at the store frontend</li>
				<li>A business action and external factor generator; business behaviours such as discounts, ad campaigns, economic events, influencing customer characteristics and therefore buying behaviour</li>
			</ul>

			<h3 className="font-bold text-xl mt-8 mb-4">BFshop Intentions</h3>

			<p><strong>Answer the question the user doesn't know to ask.</strong> BFshop should not require merchants to know what they are looking for. It should proactively surface information worth their attention.</p>
			<br />

			<p><strong>Ease of use and understanding.</strong> Apps often require long set ups, technical knowledge, and display many dashboards. BFshop aims to make things very easy to use and understand, both in interface itself and the chatbot, for users.</p>
			<br />

			<p><strong>Convert data into potential business action.</strong> Ecommerce stores already produce a wealth of data, but merchants should not need to act as analysts to benefit from it. BFshop's deterministic analysis tools will turn business data into structured findings. The AI will have access to these findings and analytical tools so that it can explain what matters, investigate further and suggest potential actions.</p>
			<br />

			<h2 className="font-bold text-2xl mt-12 mb-4">Architecture</h2>

			<p>The project is being built with NextJs, Neon PostGres, with n8n for workflow automation.</p>
			<br />

			<p>It is split into slices. Each represents a vertical slice between the frontend and the backend, aside from ones which involve external input. The slices vaguely represent the chronological progress of the project, but not exactly; parts of slice 5 may be built before slice 4 is finished for example. These slices may change and be added to in time. Slice 3: Synthetic Economy does not fit neatly with the slice architecture as it exists external to the project code but for the sake of understanding the structure it can be viewed as a slice.</p>
			<br />

			<h3 className="font-bold text-xl mt-8 mb-4">The Slices</h3>

			<ul className="space-y-3">
				<li>
					<strong>Slice 1: <Link href="/projects/bfshop/logbook/vertical-slices/place-order" className="text-sky-400 hover:underline">Place Order</Link></strong>
					<p className="text-zinc-400 ml-2 mt-1">The customer end of BFshop. This is a simple eCommerce page where one can place orders.</p>
				</li>
				<li>
					<strong>Slice 2: <Link href="/projects/bfshop/logbook/vertical-slices/receive-order" className="text-sky-400 hover:underline">Manage Orders</Link></strong>
					<p className="text-zinc-400 ml-2 mt-1">The merchant end of BFshop. The interface where the merchant can view and manage orders.</p>
				</li>
				<li>
					<strong>Slice 3: <Link href="/projects/bfshop/logbook/vertical-slices/synthetic-economy" className="text-sky-400 hover:underline">Synthetic Economy</Link></strong>
					<p className="text-zinc-400 ml-2 mt-1">The generation, and input of into BFshop, of data simulating an eCommerce environment.</p>
				</li>
				<li>
					<strong>Slice 4: <Link href="/projects/bfshop/logbook/vertical-slices/metrics-and-history" className="text-sky-400 hover:underline">Metrics and History</Link></strong>
					<p className="text-zinc-400 ml-2 mt-1">The calculation and storage of business metrics.</p>
				</li>
				<li>
					<strong>Slice 5: <Link href="/projects/bfshop/logbook/vertical-slices/findings-and-relationships" className="text-sky-400 hover:underline">Findings and Relationships</Link></strong>
					<p className="text-zinc-400 ml-2 mt-1">Use deterministic analysis to identify noteworthy changes, patterns and relationships between metrics, customers and business actions. Store significant findings historically.</p>
				</li>
				<li>
					<strong>Slice 6: <Link href="/projects/bfshop/logbook/vertical-slices/intelligence-interface" className="text-sky-400 hover:underline">Intelligence Interface</Link></strong>
					<p className="text-zinc-400 ml-2 mt-1">Give the AI relevant current and historical findings so it can explain what matters, answer merchant questions and suggest actions. Underlying dashboards remain accessible for inspection.</p>
				</li>
			</ul>

			<h2 className="font-bold text-2xl mt-12 mb-4">Personal Motivation</h2>

			<p className="italic mb-4">'In this context, AI's utility is not in simple chat interface or as an assistant taking orders, but in assessing information and being able to converse on that information.'</p>

			<p>This is influenced by my experience with apps and software over the years and AI in recent years.</p>
			<br />

			<p>I have often found myself overloaded by apps heavy in metrics and dashboards and numbers. And in recent years I have found my ability and knowledge at a variety of things has improved enormously due to having AI to discuss these things with.</p>
			<br />

			<p>Not because I simply have AI do things for me, but because it serves as 'someone' to bounce ideas off; to fill in gaps in my knowledge, to illustrate things not gleaned from existing tutorials or textbooks or dashboards.</p>
			<br />

			<p>The obvious next step would be AI that offers information without you asking; this obviously isn't applicable to life in general, but in the context of a business intelligence system it certainly is. And it is arguably more helpful, as you don't need to know what question to ask.</p>
			<br />
		</article>
	);
}
