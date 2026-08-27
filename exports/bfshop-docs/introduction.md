# Introduction to BFshop

BFshop is an experimental eCommerce intelligence system built around a simulated online store. It analyses business data to find useful patterns and information, then uses AI to present and discuss what it finds with the merchant. The project is a testing ground for exploring how data analysis and AI can work together to make business information more useful and easier to understand.

## Overview

BFshop is an experiment that has changed continuously. It was always planned to be an eCommerce store (this has not changed), with both a customer and merchant interface with a shared backend (this has also not changed).

It was to be an 'AI enhanced project', experimenting with how AI can be utilised to improve modern business systems.

It was to do this by including:

- Customer service chatbot
- AI assistant for the merchant interface for use in facilitating workflow and assessing business data
- An 'AI Overwatch' feature for monitoring AI activity and behaviour

Over time I realised that, in this context at least, AI's utility is not in simple chat interface or as an assistant taking orders, but in assessing information and being able to converse on that information.

I then identified what I believe is lacking in analysis apps for eCommerce stores:

- Offer findings without being asked
- Connect findings to potential business actions (with the potentiality of acting on them)
- Be easier to use
- Offer easier to understand information and data

Then I realised that BFshop's simulated eCommerce environment offers an ideal ground for passing data through, which could be analysed.

The logical progression was to turn BFshop into an experiment exploring a possible solution to these problems.

It will attempt this with the generation business data into its ecosystem, analysis and presentation of useful findings by a query-able AI chat interface.

## Three Main Features

- A backend analysis machine for the simulated data
- Merchant management platform, including an AI chat interface for presenting and discussing data
- The eCommerce store frontend where orders can be placed

A synthetic economy will be used to simulate the generation of business data. This will involve two main features:

- A workflow storing a base of 'customers' with a set of characteristics which simulate buying behaviour by generating orders at the store frontend
- A business action and external factor generator; business behaviours such as discounts, ad campaigns, economic events, influencing customer characteristics and therefore buying behaviour

## BFshop Intentions

**Answer the question the user doesn't know to ask.** BFshop should not require merchants to know what they are looking for. It should proactively surface information worth their attention.

**Ease of use and understanding.** Apps often require long set ups, technical knowledge, and display many dashboards. BFshop aims to make things very easy to use and understand, both in interface itself and the chatbot, for users.

**Convert data into potential business action.** Ecommerce stores already produce a wealth of data, but merchants should not need to act as analysts to benefit from it. BFshop's deterministic analysis tools will turn business data into structured findings. The AI will have access to these findings and analytical tools so that it can explain what matters, investigate further and suggest potential actions.

## Architecture

The project is being built with NextJs, Neon PostGres, with n8n for workflow automation.

It is split into slices. Each represents a vertical slice between the frontend and the backend, aside from ones which involve external input. The slices vaguely represent the chronological progress of the project, but not exactly; parts of slice 5 may be built before slice 4 is finished for example. These slices may change and be added to in time. 

### The Slices

- **Slice 1: Place Order** — The customer end of BFshop. This is a simple eCommerce page where one can place orders.
- **Slice 2: Manage Orders** — The merchant end of BFshop. The interface where the merchant can view and manage orders.
- **Slice 3: Metrics and History** — The calculation and storage of business metrics.
- **Slice 4: Findings and Relationships** — Use deterministic analysis to identify noteworthy changes, patterns and relationships between metrics, customers and business actions. Store significant findings historically.
- **Slice 5: Intelligence Interface** — Give the AI relevant current and historical findings so it can explain what matters, answer merchant questions and suggest actions. Underlying dashboards remain accessible for inspection.

## Personal Motivation

*'In this context, AI's utility is not in simple chat interface or as an assistant taking orders, but in assessing information and being able to converse on that information.'*

This is influenced by my experience with apps and software over the years and AI in recent years.

I have often found myself overloaded by apps heavy in metrics and dashboards and numbers. And in recent years I have found my ability and knowledge at a variety of things has improved enormously due to having AI to discuss these things with.

Not because I simply have AI do things for me, but because it serves as 'someone' to bounce ideas off; to fill in gaps in my knowledge, to illustrate things not gleaned from existing tutorials or textbooks or dashboards.

The obvious next step would be AI that offers information without you asking; this obviously isn't applicable to life in general, but in the context of a business intelligence system it certainly is. And it is arguably more helpful, as you don't need to know what question to ask.
