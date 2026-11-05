# Footer Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic black Home page footer with a responsive LuxeStride footer using the approved brown and cream design.

**Architecture:** Keep the footer in `index.html` and style it through the existing `style.css`. Reuse the current brand variables and existing responsive breakpoint structure.

**Tech Stack:** HTML5 and CSS3

**Spec:** `docs/superpowers/specs/2026-11-05-footer-redesign.md`

## Global Constraints

- Preserve the existing page structure outside the footer.
- Use three equal columns on desktop and one column on small screens.
- Keep links keyboard accessible with visible focus states.

## Review Focus

- Footer links remain readable against the dark surface.
- Columns have equal widths and consistent gaps.
- Mobile layout does not overflow horizontally.
- Focus and hover states remain visible.
- Copyright copy uses the current year and LuxeStride name.

---

### Task 1: Footer markup and styling

**Files:**
- Modify: `index.html`
- Modify: `style.css`

**Interfaces:**
- Consumes: existing CSS brand variables and page links.
- Produces: `.footer`, `.footer-container`, `.footer-col-*`, `.footer-bottom`, and `.socials` presentation.

- [ ] **Step 1:** Replace the footer markup with brand, useful links, social links, and a current copyright line.
- [ ] **Step 2:** Replace the generic footer rules with the approved deep brown, three-column layout and accessible link states.
- [ ] **Step 3:** Add a single-column footer layout inside the existing small-screen media query.
- [ ] **Step 4:** Verify every footer page link points to an existing HTML file and run `git -c core.whitespace=cr-at-eol diff --check`.

