# Design System Document: Precision Optimization Dashboard

## 1. Overview & Creative North Star
**Creative North Star: "The Clinical Architect"**
This design system moves away from the "boxy" nature of traditional SaaS dashboards to embrace a high-fidelity, clinical aesthetic. It is inspired by aerospace telemetry and high-end hardware interfaces. We break the "template" look by utilizing wide-open white space, razor-sharp typography, and "tonal islands" of content. The goal is to make complex optimization settings feel like an intentional, calm, and high-stakes command center rather than a cluttered spreadsheet.

## 2. Colors & Surface Philosophy
The palette is rooted in a "cool-clinical" spectrum, utilizing a high-contrast foundation with a vibrant, high-tech Blue (`primary`) as the primary driver for action and state.

### The "No-Line" Rule
**Borders are prohibited for sectioning.** To define the architecture of the dashboard, you must use background color shifts. A settings module (`surface-container-low`) should sit on the main dashboard background (`surface`) without a stroke. This creates a modern, "seamless" aesthetic where the eye tracks changes in value rather than being trapped by boxes.

### Surface Hierarchy & Nesting
Depth is achieved through a "Layered Sheet" approach:
- **Base Layer:** `surface` (#f7f9fb) – The canvas.
- **Section Layer:** `surface-container-low` (#f2f4f6) – Used for grouping large categories of settings.
- **Action Layer:** `surface-container-lowest` (#ffffff) – Reserved for the most important interactive cards or focused input areas.
- **Interactive Highlighting:** `surface-container-high` (#e6e8ea) – For hovered states or active navigation tracks.

### The "Glass & Gradient" Rule
For "high-tech" optimization modules (like real-time engine status or performance toggles), use **Glassmorphism**. Apply a semi-transparent `surface-container-lowest` with a 20px backdrop-blur. 
*   **Signature Texture:** Use a subtle linear gradient on primary action buttons: `primary` (#0054d6) to `primary_container` (#aabfff) at a 135-degree angle. This adds a "lithographic" depth that feels premium and custom.

## 3. Typography
The system uses a dual-sans-serif approach to balance "High-Tech" authority with "Functional" clarity.

*   **The Authority (Manrope):** Used for `display` and `headline` tiers. Manrope’s geometric but slightly condensed nature gives titles a "technical manual" feel.
    *   *Usage:* Use `display-md` for top-level optimization scores.
*   **The Engine (Inter):** Used for `title`, `body`, and `label`. Inter is chosen for its exceptional legibility in small-scale setting descriptions and data tables.
    *   *Usage:* `label-md` in `on-surface-variant` (#3c494e) should be used for all technical sub-captions and helper text.

## 4. Elevation & Depth
In "The Clinical Architect," we do not use heavy shadows. We use light.

*   **The Layering Principle:** Stack `surface-container-low` modules on `surface`. If a module needs to feel "active," transition it to `surface-container-lowest`.
*   **Ambient Shadows:** For floating modals or dropdown menus, use a "Ghost Shadow": `color: on-surface` at 4% opacity, Blur: 40px, Y: 12px. It should feel like a soft glow rather than a dark drop-shadow.
*   **The "Ghost Border" Fallback:** If high-density data requires a container (e.g., a complex data table), use a `outline-variant` (#bbc9cf) at **15% opacity**. Never use a 100% opaque border.
*   **Glassmorphism & Depth:** Floating optimization panels should use `surface_variant` at 60% opacity with a `backdrop-filter: blur(12px)`.

## 5. Components

### Sleek Toggle Switches
*   **Track:** `surface-container-highest` (#e0e3e5).
*   **Thumb:** `surface-container-lowest` (#ffffff) with a 2px inset.
*   **Active State:** Track transitions to `primary` (#0054d6). 
*   **Interaction:** Use a 200ms "Spring" easing for the thumb movement to mimic high-end hardware.

### Sparkline Charts
*   **Line:** Use `primary` (#0054d6) with a 2px stroke width.
*   **Area:** Use a gradient fill from `primary` (20% opacity) to `surface` (0% opacity).
*   **Note:** Remove all axes and grids. The sparkline is a "glanceable" indicator, not a diagnostic tool.

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary_container`). Sharp corners (`sm`: 0.125rem). White text (`on-primary`).
*   **Secondary:** `surface-container-high` background. No border. `on-secondary-container` text.
*   **Tertiary:** No background. `primary` text. Use for "Cancel" or "Reset to Default."

### Cards & Lists
*   **Strict Rule:** No dividers. Use **24px vertical white space** to separate list items. 
*   **Nesting:** Place `label-sm` technical metadata (e.g., "Latancy: 12ms") directly under the `title-sm` setting name, using `on-surface-variant` to create clear visual hierarchy.

### Input Fields
*   **Default:** `surface-container-low` background with a `sm` (0.125rem) radius.
*   **Focus:** Background shifts to `surface-container-lowest` with a 1px "Ghost Border" of `primary`.

## 6. Do's and Don'ts

### Do:
*   **Do** use `tertiary` (#815600) for "Warning" states in optimization logs (e.g., "CPU Throttling imminent").
*   **Do** use asymmetrical layouts. For example, a narrow left-hand column for "Status" and a wide right-hand column for "Settings."
*   **Do** leverage `surface-bright` for the main workspace to ensure the high-contrast "Clinical" feel.

### Don't:
*   **Don't** use 1px solid black or grey borders. This instantly "cheapens" the high-end editorial feel.
*   **Don't** use generic Material Design blue. Stick to the vibrant `primary` (#0054d6) for that "vivid action" feel requested.
*   **Don't** use `full` rounded corners (pills) for everything. Use `sm` (0.125rem) or `md` (0.375rem) to maintain a professional, architectural edge.
*   **Don't** use "Drop Shadows" on cards. Stick to tonal layering and background color shifts.