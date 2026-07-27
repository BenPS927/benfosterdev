# BFShop Technical Specification Sheet

This specification sheet defines the technical baseline for BFShop and aligns with the established BFShop style and card content rules.

## 1) Product Intent

BFShop is a commerce-focused business simulation project.

The portal and documentation layer is designed to:
- centralize project navigation
- expose implementation direction
- track ongoing system evolution

## 2) Platform Stack

- Frontend framework: Next.js (App Router)
- Styling system: Tailwind + BFShop utility classes
- ORM and schema: Prisma
- Database: Neon Postgres
- Automation and integrations: n8n

## 3) System Boundaries

- Portal layer: navigation and documentation access points
- Application layer: storefront and feature pages
- Data layer: Prisma models and relational persistence
- Automation layer: external workflow orchestration

## 4) Design System Constraints

The following constraints are mandatory for portal and specs pages:
- Accent color: electric blue only (#38BDF8)
- Surface tiers: base, raised, spotlight by emphasis level
- Interactivity: use shared hover/focus behavior with blue accent border variable
- Card structure order: eyebrow -> title -> body -> meta -> action (when present)
- Typography and spacing: use BFShop card/page utility classes consistently

## 5) Delivery Milestones

1. Foundation and portal baseline
- establish route structure and style-rule compliance
- connect initial data layer scaffolding

2. Commerce workflow implementation
- product, cart, and checkout paths
- operational page flows and state behavior

3. Automation and reporting
- n8n workflow integration
- progress/reporting loops and reliability checks

## 6) Quality and Risk Controls

- enforce migration hygiene for schema changes
- verify style-rule compliance before landing UI revisions
- define automation ownership and fallback handling per workflow
- use AI for assistance and audits, with final manual technical review

## 7) Dependencies and Tooling Notes

- Keep database, ORM, and application versions in sync.
- Prefer incremental, testable vertical slices.
- Keep docs updated as implementation changes.
