const stackCards = [
	{
		eyebrow: 'Core Stack',
		title: 'Runtime and framework',
		body: 'Next.js App Router delivers the portal and storefront UI with a single deployment flow and predictable page routing.',
		meta: 'Frontend foundation',
	},
	{
		eyebrow: 'Data Layer',
		title: 'Prisma + Neon Postgres',
		body: 'Prisma defines schema and query shape while Neon hosts the relational database with managed infrastructure.',
		meta: 'Typed data access',
	},
	{
		eyebrow: 'Automation',
		title: 'n8n orchestration',
		body: 'n8n handles process automation and external integrations such as notifications, docs, and operational workflows.',
		meta: 'Integration backbone',
	},
];

export default function BFShopSpecificationsSheet() {
	return (
		<article className="page-section-stack text-left">
			<section className="card-stack-tight">
				<p className="card-eyebrow accent-electric-blue">Technical Spec Sheet</p>
				<h2 className="card-title text-white">BFShop platform blueprint</h2>
				<p className="card-body text-zinc-300">
					BFShop is being built as a business-oriented commerce simulation with a documented frontend system,
					relational data model, and automation layer that can scale with new workflows.
				</p>
			</section>

			<section className="grid card-cluster-gap md:grid-cols-3">
				{stackCards.map((item) => (
					<div key={item.title} className="surface-base card-stack p-5 md:p-6">
						<p className="card-eyebrow accent-electric-blue">{item.eyebrow}</p>
						<h3 className="card-title text-white">{item.title}</h3>
						<p className="card-body text-zinc-300">{item.body}</p>
						<p className="card-meta text-zinc-400">{item.meta}</p>
					</div>
				))}
			</section>

			<section className="surface-base card-stack p-5 md:p-6 lg:p-8">
				<p className="card-eyebrow accent-electric-blue">Design System Contract</p>
				<h3 className="card-title text-white">BFShop style compliance</h3>
				<div className="card-stack-tight">
					<p className="card-body text-zinc-300">All specification and portal views follow the shared style system rules:</p>
					<ul className="card-body list-disc space-y-2 pl-5 text-zinc-300">
						<li>Pages default to the <span className="font-semibold text-white">bg-subtle-dark-gradient</span> utility and must preserve the tokenized gradient structure defined in globals.</li>
						<li>Surface selection is semantic and token-backed: <span className="font-semibold text-white">surface-base</span> for standard content, <span className="font-semibold text-white">surface-raised</span> for primary emphasis, and <span className="font-semibold text-white">surface-spotlight</span> only for singular focal nodes.</li>
						<li>All interactive cards/links must use <span className="font-semibold text-white">is-interactive</span> and set <span className="font-semibold text-white">--interactive-accent-border</span> to a BFShop blue value (typically rgba(56, 189, 248, 0.5-0.6)) to keep hover/focus behavior consistent.</li>
						<li>Typography is utility-governed, not ad hoc: use <span className="font-semibold text-white">card-eyebrow</span>, <span className="font-semibold text-white">card-title</span>, <span className="font-semibold text-white">card-body</span>, and <span className="font-semibold text-white">card-meta</span> so size, line-height, and rhythm stay aligned across pages.</li>
						<li>Spacing rhythm is enforced with layout utilities (<span className="font-semibold text-white">card-stack</span>, <span className="font-semibold text-white">card-stack-tight</span>, <span className="font-semibold text-white">card-cluster-gap</span>, <span className="font-semibold text-white">page-section-gap</span>) instead of one-off margin stacks.</li>
						<li>Accent application is constrained to navigational and status semantics (eyebrows, action text, focus/hover borders) and should not be used for long-form body copy or broad surface fills.</li>
						<li>Accessibility baseline: preserve focus-visible outlines, maintain readable contrast on dark surfaces, and avoid hover-only affordances for critical actions.</li>
						<li>Card anatomy order remains fixed for scanability: eyebrow, title, body, meta, then action when present.</li>
					</ul>
				</div>
				<p className="card-meta text-zinc-400">Reference docs: BFSHOP_STYLE_RULES.md and CARD_RULES.md</p>
			</section>
		</article>
	);
}

