# Cavalier King Charles Spaniel — About Page (Ocean Professional)

A modern, responsive single‑page React app that presents information about Cavalier King Charles Spaniels with sections for a hero, breed summary, characteristics, history, and a photo gallery. Styled with the Ocean Professional theme.

## Run locally

- Install dependencies: `npm install`
- Start dev server: `npm start`
- Open: http://localhost:3000

This app uses Create React App and runs on port 3000 by default.

## Structure

- src/App.js — page layout and section composition
- src/components/Hero.jsx — hero with image, gradient, and CTAs
- src/components/Section.jsx — reusable section wrapper
- src/components/CharacteristicCard.jsx — characteristic cards
- src/components/Gallery.jsx — responsive gallery
- src/index.css — Ocean Professional theme variables and styles
- public/index.html — base HTML template

## Accessibility

- Semantic landmarks (header, main, footer)
- Keyboard-focus styles on interactive elements
- Descriptive alt text in gallery and hero image
- In-page navigation anchors: #summary, #characteristics, #history, #gallery

## Theme

Ocean Professional palette:
- Primary: #2563EB
- Secondary/Success: #F59E0B
- Error: #EF4444
- Background: #f9fafb
- Surface: #ffffff
- Text: #111827

Subtle gradients, rounded corners, and soft shadows are used throughout for a modern, professional feel.
