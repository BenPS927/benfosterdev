# BFShop Portal Text Export

Generated from BFShop portal source files. This version is formatted for easy copy into Microsoft Word.

Note: The Development Log page contains dynamic database-driven entries; only static page text is included here.

## app/projects/bfshop/page-content.tsx

- Back to Main Site
- BF
- SHOP
- BFshop is an under-construction simulated ecommerce business used to develop an intelligence system that identifies what matters, explains it simply and suggests what to do next - without swamping the merchant with analytics dashboards.
- Current stage: Building and storing traditional business metrics for backend use
- Read the introduction to understand the vision, read progress reports to see exactly where the project is at, or scroll down to vertical slices in the logbook to understand the architecture.
- Open project
- Project Logbook
- Open
- Overview
- Introduction
- Read up on the basics of BFshop.
- Repository
- Project Code
- Browse the BFshop source code.
- Specification
- Specifications
- Review the technical plan and scope.
- Updates
- Progress Reports
- Track how the project is evolving.
- Data Foundations
- Vertical Slices
- AI
- Automation
- Development Log

## app/projects/bfshop/logbook/ai/page.tsx

- AI
- The AI features planned for this part of BFshop have not yet been built. This page will document them as that work begins.

## app/projects/bfshop/logbook/automation/page.tsx

- Automation
- The automation workflows planned for this part of BFshop have not yet been built. This page will document them as that work begins.

## app/projects/bfshop/logbook/data-foundations/page.tsx

- Data Foundations
- BFshop is founded on data entities. These are the entities and their properties. The database used for these is Neon, with prisma linking it to the project.
- Customer
- Product
- Order
- OrderItem
- AI Log

## app/projects/bfshop/logbook/development-log/page.tsx

- Development Log
- Ongoing BFshop development updates, recorded as the project structure, implementation, and architecture continue to evolve.
- Development Update
- Development Log | BFshop Project Portal
- Ongoing BFshop development updates of BFshop.
- BFshop Development Log
- BFshop Project Portal
- Ben Foster

## app/projects/bfshop/logbook/vertical-slices/vertical-slices-page-content.tsx

- Slices
- For manageability this project is built in segments between the database and the user interface, called slices. Some slices will involve external input but are still considered slices.
- Place Order
- Manage Orders
- Data Generation
- Metric Storage
- AI analysis

## app/projects/bfshop/logbook/vertical-slices/place-order-document.tsx

- Place Order Slice
- This slice uses an API, service, and data-access layer architecture. The original plan was to include an application layer between the API and service, but this seemed needless as it was just another layer which had no real function. The entirety of the place order functionality deals with the service layer taking data from the placed order, referencing it against the database, and creating a new order and its items. This document focuses on that, with the database operations mentioned but not discussed in too much detail as they are very simple.
- The logic accounts in part for the fact that the client supplies only product identity and quantity, while product metadata and pricing are resolved server-side from the database. This prevents client-controlled values such as price from becoming authoritative order data.
- Frontend
- The place order button in the cart triggers an event handler which accesses localStorage, which the cart is also derived from. Order data is produced from this and sent to the API.
- API
- First is the API. The order data from the request body is stored in the order variable and a validation check is done on it.
- The createOrderService function is called and order passed to it.
- Service
- In the service, a transaction is started. This is essential as it provides atomicity for the database operations, avoiding situations such as where stock is decremented before the order is placed, and another order takes the last item of stock. The transaction will prove to be problematic later.
- The service is structured as multiple smaller functions. The code grouping was done so to make each function obvious. The names too.
- processCustomer
- The first, processCustomer, is intended to compare the customer ID sent down with the order. It does this by calling getCustomer_DB_op, which finds the customer in the database with a matching ID. If this fails then of course an error is thrown, meaning the database operation acts as validation and so extra checks aren&apos;t needed in the service.
- In BFshop&apos;s first iteration, the customer ID is hardcoded as always one for simplicity.
- Output of the operation is stored in
- customer
- processProduct
- The next function is processProduct and this is more complex. At this point we only have the product ID, so we need to find the real product in the database.
- Another database operation, getProduct_DB_op, is called. This gives us an array of the products with corresponding IDs. For each, a variable is created which tests for matching IDs between server-side products and client-side products.
- There is a check, in the database operation, to match the new products array length to the product IDs length to act as validation, but this does not correctly handle duplicate product IDs and is marked for replacement during validation hardening.
- If successful, the next check is carried out, which makes sure there is adequate stock to match the quantity property of the order item.
- Products is returned to the function.
- createOrderItems
- Then we create the order items. We have to create them before creating the order as we need them to calculate the order total, but we cannot write them to the database, as they rely on the order ID.
- A map function matches product IDs from the order to product IDs from the previously made products variable, and creates one object per ID.
- The order item, named backendOrderItem to distinguish it from the items of the incoming order, is created with the properties product_id, line_total, quantity, unit_price, and product_name.
- The output is returned to the overall function.
- createOrder and writeOrderItems
- In createOrder, aggregation of the created order items is carried out using reduce so we can determine the total of the order.
- The rest of order data is formed and passed to the called database operation, WriteOrderDB_op, which writes the order to the order table in the database.
- backendOrderItem[] is mapped over in writeOrderItems, and its outputs are passed to the final database operation, WriteOrderItems_DB_op.
- createOrder is returned and the transaction ended.
- Architectural decisions
- An application layer was omitted as it was effectively just another API layer.
- Higher quality validation and other specificities were omitted to allow for quicker progress.
- Problems
- The transaction returned a failure code every time despite the programming being correct. By turning off pooling in Neon, the database service in use, this was abated.
- Relevant data entities

## app/projects/bfshop/logbook/vertical-slices/receive-order-document.tsx

- Slice 2
- The goal of Slice 2 is to display orders in received, sent, and delivered dashboards for the merchant, and allow the merchant to mark orders from received to sent and from sent to delivered.
- Slice 2 is effectively two slices together: displaying orders is one and marking orders is the other. As marking orders is complementary to displaying orders, they are treated as one.
- Architecture
- This slice started with the idea of avoiding a service like the one used in Slice 1 and instead having orders mapped to the frontend from objects storing the output of database operations.
- This proved impossible because server-side data returned by database operations is not presentable client-side. APIs are used as the server/client boundary partly because they can serialize data into a transferable format such as JSON. Attempting to circumvent an API was unwise.
- A traditional API, service, repository, and database layer structure was therefore chosen, resulting in the architecture shown below.
- Slice 2 architecture
- This slice includes only the bare minimum functionality needed to create the scaffolding for BFshop, so it is intentionally light. Additions are discussed at the end.
- Displaying orders
- The architecture uses three services for displaying orders: receivedOrdersService, sentOrdersService, and deliveredOrdersService.
- Each service uses getOrders_DB_op. Separate database operations for retrieving received, sent, and delivered orders were originally used, but this caused problems: only two boards would load at a time and an error reported too many connections to Neon, the database.
- getOrders_DB_op simply retrieves all orders from the database and returns them as orders. Each service then creates a variable for its relevant status and filters the returned orders where order.status equals delivered, received, or sent.
- Marking orders
- Marking orders follows a similar pattern, with an API calling a service. The structural difference is that different database operations are used for marking orders as sent and delivered.
- Because the button to mark an order is rendered as part of a map function, its event handler needs the order ID. That ID is passed down the chain and finally used in the repositories to find the order and update its status column.
- Once updated, an order is picked up by a different display service. For example, when a received order has its status changed to sent, the next call to receivedOrdersService will not pick it up from the orders object returned by getOrders_DB_op; sentOrdersService will pick it up instead.
- Final word
- The whole chain is intentionally very light, so there is not much to discuss beyond the basic architecture. The service does not act like a service currently: no business logic is executed and nothing particularly complex happens. It is structured this way so that when more is added in the future, the structure is already ready for it.
- Future additions
- Include an order-items viewing option in the frontend; this requires an additional API.
- Include persistence for status-column changes to allow for visual effects when orders change columns. An order activity database could function as logging, possibly activating a workflow to update a user document with events such as "order #1 marked as sent". In the future, it could also notify customers of order updates.
- Include a fourth status option: verified delivered. This would allow the merchant to click a delivered order and make it disappear or become lowlighted when satisfied.
- Add validation to ensure each API and service is receiving the correct data.

## app/projects/bfshop/updates/page-content.tsx

- Progress Reports
- Chronological BFshop updates covering feature delivery, blockers, architecture choices, and implementation progress.
- Open report
- Progress Report 2
- Progress Report 1

## app/components/bfshop-documentation/bfshop-overview-post.tsx

- Introduction to BFshop
- In this article I lay the groundworks for my BF shop project, focusing on its basic structure and purposes.
- What is BFshop?
- I'm currently building my first AI enhanced business system, BFshop.
- BFShop is a business simulation that I'm using to explore how AI and automation can be integrated into real business systems, as well as build my first full stack system.
- It is both purposeful and experimental.
- The project is at its core an ecommerce store featuring the merchant and customer end for users to interact with. But the reality is more of a simulated production business; there will be workflows coordinated to streamline real processes; a customer service AI assistant, an AI assistant for the merchant and a shared database.
- Rather than treating AI as a standalone feature, BFShop explores how AI, automation and software integrations can work together within a complete business system.
- Why am I building it?
- AI has moved faster than the world around it. We're playing catch up.
- Businesses today rely on dozens of different platforms; websites, CRMs, email, accounting software, cloud storage, internal tools. More often than not, they're disconnected, leaving people to move information between them manually.
- I'm interested in how AI fits into that ecosystem. Not as a novelty, but as one part of a connected business system alongside automation, integrations and the software people already use every day.
- BFShop is my way of experimenting with that. I'm exploring how AI can work with full-stack applications, shared data, workflow automation and external platforms to reduce repetitive work and create systems that are genuinely useful to businesses of any size.
- It's also my first full-stack software project, making it an opportunity to learn backend development, system architecture and infrastructure while building something with a real purpose.
- Core components
- Customer interface
- This is the ecommerce store where customers would place orders, featuring a chatbot for querying product, orders and business information. Placed orders will go through the backend and write to the database. The bot will be helpful and easy to use, drawing on live data.
- Merchant interface
- Orders will be written here from the database via the shared backend in three panels: received, delivered, arrived.
- This will also feature an AI chat interface which will act as an assistant to the merchant; This serves as an experiment into how AI may gradually shift business software from traditional click-based interfaces towards conversational ones.
- Backend
- The backend will consist of four layers:
- Control layer
- Application (app) layer
- Service layer
- Data layer
- The control layer will contain API routes which accept requests and deliver responses to the frontends.
- The application layer will decide the sequence of events for how to execute those requests.
- The service layer will contain business rules and answer questions such as 'is this order valid' or 'what should the total be'. It prepares data and asks the data layer to read or write it.
- The data layer will perform database operations such as creating, reading, updating and deleting records.
- Automation and Integration
- Modern systems are a web of interconnected platforms; Slack, Google Drive, Microsoft 365, CRMs, among others; BFshop will use n8n integrations to coordinate workflows for the purpose of reducing work for the merchant and keeping the customer informed.
- AI Overwatch
- One concern with AI technology as time goes on is in its autonomy; as AI systems become capable of carrying out work on behalf of users, visibility into their actions becomes increasingly important.
- That's why I'm building the feature AI Overwatch, which will display the AI's actions and available capabilities in a transparent way.
- Data
- The system is built around a number of shared data entities.
- Product; the product itself and its traits.
- Order; the sum of the products placed by a user in the customer frontend.
- OrderItem; an individual line within the Order data entity.
- Customer; the customer logged in at a given time. This will only include one entry as authentication is one more element which would add complexity to an already complex project.
- ActivityLog; this will store data taken from backend requests and allow visibility over AI behaviour, to be presented in AI overwatch.
- Final Thoughts
- BFshop is a full business simulation that will develop as time goes on; features may be added, existing ones altered.
- Rather than treating BFshop as a finished specification, I'm seeing it as an evolving engineering project. As I learn more, the system will evolve more.
- It should be noted that while this is a business simulation some parts may be left out; financial information, legal detail.

## app/components/bfshop-documentation/bfshop-specifications-sheet.tsx

- Technical Spec Sheet
- BFShop platform blueprint
- BFShop is being built as a business-oriented commerce simulation with a documented frontend system, relational data model, and automation layer that can scale with new workflows.
- Design System Contract
- BFShop style compliance
- All specification and portal views follow the shared style system rules:
- Pages default to the
- bg-subtle-dark-gradient
- utility and must preserve the tokenized gradient structure defined in globals.
- Surface selection is semantic and token-backed:
- surface-base
- for standard content,
- surface-raised
- for primary emphasis, and
- surface-spotlight
- only for singular focal nodes.
- All interactive cards/links must use
- is-interactive
- and set
- --interactive-accent-border
- to a BFShop blue value (typically rgba(56, 189, 248, 0.5-0.6)) to keep hover/focus behavior consistent.
- Typography is utility-governed, not ad hoc: use
- card-eyebrow
- card-title
- card-body
- , and
- card-meta
- so size, line-height, and rhythm stay aligned across pages.
- Spacing rhythm is enforced with layout utilities (
- card-stack
- card-stack-tight
- card-cluster-gap
- page-section-gap
- ) instead of one-off margin stacks.
- Accent application is constrained to navigational and status semantics (eyebrows, action text, focus/hover borders) and should not be used for long-form body copy or broad surface fills.
- Accessibility baseline: preserve focus-visible outlines, maintain readable contrast on dark surfaces, and avoid hover-only affordances for critical actions.
- Card anatomy order remains fixed for scanability: eyebrow, title, body, meta, then action when present.
- Reference docs: BFSHOP_STYLE_RULES.md and CARD_RULES.md
- Runtime and framework
- Prisma + Neon Postgres
- n8n orchestration

## app/components/bfshop-documentation/bfshop-progress-report-1.tsx

- Where am I now?
- The frontend for the customer side where orders can be placed is now mostly complete; all that needs adding visually is the place order button. I am not building that until the appropriate point when creating the actual cart slice, as I am treating it as a plug between the frontend and backend.
- I have been setting up n8n to be self-hosted on my virtual private server so I can avoid per-execution pricing, stay in full control, and keep the automation platform inside my own ecosystem.
- Ecosystem is the key word here, as that is what I have accidentally created while building BFshop. I am using Neon database, Next.js, and a VPS hosting n8n using Docker. Doing so is giving me an excellent understanding of connectivity and systems integration, which is exactly what I want for BFshop. Due to AI's ability in programming, I believe developers who can integrate systems will be the winners.
- What issues have I faced?
- Cart:
- The cart logic execution. The logic itself is fairly straightforward: input form sends event to function handler, function handler saves to local storage, local storage is mapped to cart. The execution, for someone still a beginner at non-visual programming, has been very difficult and I have used AI plenty. There are also many caveats requiring code I do not know yet, such as preventing duplicate cart entries when an item already exists.
- VPS:
- HTTP lockout. After setting up self-hosted n8n, I was unable to access it in the browser due to a security issue. n8n was being served on HTTP and needed HTTPS. The fix was setting up Caddy as a reverse proxy for DNS lookups to that domain.
- Unexplained changes to element color on the customer side. This turned out to be caused by light/dark mode changes on mobile, meaning elements inherited incorrect colors. The fix was applying explicit colors that cannot be overwritten.
- What have I learned?
- I am now more experienced in several non-visual coding elements. Not mastered and not yet skilled, but I know they exist and can use them as tools when needed. These include function handlers, LocalStorage, input forms, and mapping.
- An introduction to infrastructure engineering. The VPS and Docker work has given me insight into the infrastructure that allows software to run.
- Basic Linux commands: ls, cat, nano.
- What do I need to do next?
- Build the backend for the cart slice of BFshop. This will involve writing pure JavaScript with no visual references for what I am doing, so it is a big step and I am looking forward to it.

## app/components/bfshop-documentation/bfshop-progress-report-2.tsx

- Progress update 2
- I'm now well into the process of building the backend for the cart slice.
- The first order of business was to actually figure out exactly what each layer would have to do; I had the vague understanding that the Control layer would link the frontend to the application layer with an API, the app layer would activate the correct service in the service layer, and this would evaluate business logic, make calculations etc, before activating the data layer to write an order to the database.
- Top to bottom:
- The API performs validation on the order it receives to make sure it's not empty. If it fails the function ends and an error message is returned to the browser. It then creates a variable which stores the output of the createOrder function, which is the name of the app layer function, passing the order object down to it. The API then carries out an outbound validation to check if the returning object is empty (as in if operations down the chain failed). If that passes there's a successful response passed back.
- The app layer uses the createOrder function which is very simple and activates createOrderService, passing order down to the service layer.
- This is where I am now. The service layer is the most complex and includes four main steps:
- Compare orders data to database; extract product/customer data.
- Execute business logic.
- Create an order.
- Activate database operations.
- When I realised I will need two sets of database operations, I decided to start writing the first set before finishing the service function. That makes more sense to me. I also believe at this point I should actually build the place order button in the frontend and connect it to the API so I can start to look at the data as it is passed down.
- Having only written frontend React until now, this is quite the learning curve. My javascript isn't good, but I'm enjoying learning to visualise the flow of data as it is passed between functions, stored in variables and then manipulated.
- On a completely different note, in an effort to upgrade my frontend work to a more professional level I have standardised a set of utilities and visual norms which will be implemented across all BFshop content. I also redesigned the blog section of my website (which contained BFshop documentation such as this) to act as a project portal and documentation store all in one, which I think is more sensible and professional.
- The new design is far sleeker and gives it a more cutting edge feel.

