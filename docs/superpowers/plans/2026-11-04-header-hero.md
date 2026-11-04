# Header Hero Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing image-backed LuxeStride header read as one clear, responsive hero.

**Architecture:** Keep the current logo, navigation, icons, and hero copy. Give the copy a dedicated header class, then use header-scoped CSS for the image crop, contrast overlay, vertical layout, and small-screen spacing.

**Tech Stack:** Existing HTML and CSS only.

**Spec:** `docs/superpowers/specs/2026-11-04-header-hero-design.md`

## Global Constraints

- Use the existing `images/Luxury Boutique Shoe Trolley.png` background image and current content.
- Modify only `index.html` and the header-related rules in `style.css`.
- Keep desktop navigation visible; do not introduce a new menu interaction.

## Review Focus

- Background asset path with spaces: preserve a valid CSS URL.
- Text contrast against light and dark image areas: ensure hero text is legible.
- Narrow viewport: prevent nav and hero copy from forcing horizontal overflow.
- Existing shared `.row` and `.col-2` styles: avoid changing non-header sections.
- Existing menu icon behavior: do not imply functionality that does not exist.

---

### Task 1: Restructure and style the header hero

**Files:**
- Modify: `index.html` header only
- Modify: `style.css` header/nav rules only

**Interfaces:**
- Consumes: existing image and header content.
- Produces: a header-specific hero-copy wrapper and responsive header styles.

- [x] Replace the generic header `.row` / `.col-2` wrapper with a dedicated hero-copy container; remove the commented model-image markup.
- [x] Update the header CSS with deliberate background position/size, overlay contrast, navigation spacing, hero-copy placement, and a small-screen breakpoint.
- [x] Review the diff to confirm styles remain scoped to the header and existing copy/links/assets are retained.
