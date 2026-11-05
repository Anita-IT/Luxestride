# Site Mobile Responsiveness Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Home, Shop, Contact, About, and Account usable and visually consistent on tablets and phones.

**Architecture:** Replace the decorative hamburger image with one accessible toggle pattern on every page and a shared `script.js`. Consolidate responsive layout rules in `style.css` at tablet, phone, and small phone breakpoints.

**Tech Stack:** HTML, CSS, vanilla JavaScript

**Spec:** User request in the current conversation.

## Global Constraints

- Preserve the existing cream and brown visual system.
- Keep the desktop layouts and sticky navigation behavior.
- Do not add dependencies or automated tests.
- Use accessible menu state, keyboard dismissal, and 44px minimum touch controls.

## Review Focus

- Navigation opens, closes, and restores correctly around the mobile breakpoint.
- Fixed navigation does not cover page headings.
- No horizontal overflow at 320px wide.
- Product, benefit, review, contact, and footer grids stack predictably.
- Hero text remains readable over the background image.

---

### Task 1: Shared mobile navigation

**Files:** `index.html`, `shop.html`, `contact.html`, `about.html`, `account.html`, `script.js`, `style.css`

- [x] Replace each decorative menu image with an accessible menu button.
- [x] Load one shared script on every page.
- [x] Implement toggle, Escape, outside click, link click, resize, and scroll state behavior.
- [x] Add desktop and mobile menu presentation rules.

### Task 2: Responsive page layouts

**Files:** `style.css`

- [x] Add tablet rules for navigation, product grids, About, and Contact.
- [x] Add phone rules for hero, products, offer, reviews, brands, footer, and inner pages.
- [x] Add small phone rules for one column products and compact form spacing.

### Task 3: Static verification

**Files:** All modified HTML, CSS, and JavaScript files.

- [x] Check every page uses the shared menu markup and script.
- [x] Check referenced files and navigation targets exist.
- [x] Check JavaScript syntax and whitespace errors.
