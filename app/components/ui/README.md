# UI Reusables

This folder is for design-system level building blocks that can be reused across pages, even when each page has a different style.

## What should go here

- Primitives: button, card shell, section wrapper, badge, chips
- Layout helpers: stack, grid wrapper, container, split panel
- Visual tokens: spacing, radius, border, shadow, motion classes
- Effects: gradient backdrops, noise layers, divider styles

## What should NOT go here

- Full page sections with unique copy and one-off composition
- Components tightly coupled to one route or one feature

## Reusability rule

If a component can be used in 3+ places with only props changed, keep it here.
If it needs major markup changes every time, keep it local to the page.

## Suggested first components

- Surface.tsx: base/raised/interactive surface wrapper
- SectionHeader.tsx: title + subtitle pattern
- BackPillLink.tsx: consistent back link style
- ContentCard.tsx: common card with spacing and border tokens
