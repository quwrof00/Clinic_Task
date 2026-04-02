# Nexus Clinic - Modern Medical Aesthetics Design

This project is a high-end, editorial-style redesign for **Nexus Clinic**, focusing on a premium medical aesthetic that balances trust, clinical excellence, and modern UX.

## 🎨 Design Philosophy & Process

### 1. Research & Analysis
The redesign began by auditing the current site and identifying areas for improvement, specifically focusing on visual clutter and information hierarchy. 
- **Competitive Benchmarking**: Researched world-class medical institutions like **Cleveland Clinic** and **Apollo Hospitals** to understand how they communicate authority and patient care.
- **Color Palette**: Maintained the established brand palette (deep medical greens and soft creams) while introducing more sophisticated shades to enhance the "luxury clinical" feel.
- **Typography**: Paired **Cormorant Garamond** (for an elegant, editorial feel in headings) with **DM Sans** (for clear, readable, and trusting body text).

### 2. UX & Layout Decisions
- **Mobile-First Responsiveness**: Transitioned the site from a rigid desktop-focused layout to a natural vertical flow on mobile, removing internal container scrollbars while strictly maintaining the **one-screen (100dvh)** height constraint for desktop viewports.
- **Content Optimization**: Many sections had excessive text which could overwhelm patients. I either shortened copy for impact or grouped detailed information into **interactive accordions and toggles**.
- **Visual Smoothness**: Implemented rounded corners and glassmorphism effects to provide a "soft-clinical" experience that feels modern and satisfactory.

### 3. Technical Optimizations
- **Dual-Mode Layout**: Used a hybrid CSS strategy to allow a fixed-screen "presentation" mode on large screens and a standard "long-scroll" mode on mobile.
- **Integrated Media**: On mobile, medical imagery is integrated directly into the background of treatment cards to reduce the page length and improve atmospheric immersion.
- **Build Performance**: Verified with a clean TypeScript build and optimized Vite production output.

## 🚀 Built With
- **Framework**: React 19 + TypeScript
- **Bundler**: Vite
- **Styling**: Tailwind CSS
- **Design Inspiration**: Editorial Design & Medical Authority
