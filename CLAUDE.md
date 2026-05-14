# CLAUDE.md — PromptForge

## Project Overview

**Project Name:** PromptForge
**Type:** Single-file HTML AI tool
**Core Functionality:** Generates platform-specific AI prompts for creative and development workflows
**Target Users:** Digital artists, developers, and creative professionals

---

## Goal

A single `index.html` file that functions as a dual-mode prompt generation tool:
1. **Creative Mode** — Generates optimized prompts for Midjourney, DALL-E, and Runway ML
2. **Dev Mode** — Generates CLAUDE.md specifications and step-by-step Claude Code prompt sequences

---

## Technical Constraints

- Single `index.html` with embedded `<style>` and `<script>`
- No build tools, frameworks, or dependencies
- Vanilla JavaScript only
- Browser-based API calls using `fetch()`
- API key stored in `sessionStorage` (cleared on tab close)
- Model: `claude-sonnet-4-20250514`

---

## Feature Specification

### Mode 1: Creative Mode

**Supported Platforms:**
- **Midjourney** — v6 parameter syntax with `--ar` aspect ratio, `--style` flags, `--no` negative prompts
- **DALL-E** — Natural language descriptions optimized for image generation
- **Runway ML** — Motion-first language with temporal and motion parameters

**User Input:**
- Textarea for describing the creative concept
- Dropdown to select target platform

**Output:**
- Platform-optimized prompt in a monospace code block
- Copy-to-clipboard button

---

### Mode 2: Dev Mode

**Tech Stack Checkboxes:**

*Frontend (choose any):*
- [ ] React
- [ ] Next.js
- [ ] Vue
- [ ] HTML/CSS

*Backend (choose any):*
- [ ] Node.js
- [ ] FastAPI
- [ ] Django
- [ ] Laravel

*Database (choose any):*
- [ ] PostgreSQL
- [ ] MongoDB
- [ ] Supabase
- [ ] Firebase

**User Input:**
- Project description textarea
- Tech stack checkboxes for frontend, backend, database

**Output:**
1. **CLAUDE.md specification** — A complete project spec document in markdown
2. **Step-by-step Claude Code prompts** — Numbered sequence of prompts to build the project incrementally

**Output Format:** Two separate code blocks with clear labels

---

## UI/Design Rules

### Layout
- Header with project title and mode toggle (Creative | Dev)
- Main content area with input form and output panel
- Sidebar or bottom section for API key input

### Color Palette
- **Background:** Dark editorial theme (near-black: `#0a0a0a` or `#111111`)
- **Text:** Off-white (`#f5f5f5`)
- **Accent:** Electric amber (`#F59E0B`)
- **Secondary:** Muted gray (`#6b7280`)

### Typography
- **Headings:** Space Grotesk (Google Fonts)
- **Body:** Space Grotesk
- **Code/Prompts:** JetBrains Mono (Google Fonts)

### Components
- Mode toggle: pill-style switcher with amber highlight on active
- Input: dark textarea with amber border on focus
- Checkboxes: custom styled with amber accent
- Buttons: amber background, dark text
- Output: monospace code blocks with copy button

---

## API Usage Rules

### Authentication
- API key input field in UI
- Key stored in `sessionStorage` under key `claude_api_key`
- Never persisted to localStorage or sent to any server

### API Endpoint
```
POST https://api.anthropic.com/v1/messages
```

### Headers
```
anthropic-version: 2025-01-01
x-api-key: <user-provided-key>
content-type: application/json
```

### Request Body
```json
{
  "model": "claude-sonnet-4-20250514",
  "max_tokens": 4096,
  "messages": [
    { "role": "user", "content": "<prompt>" }
  ]
}
```

### System Prompt: Creative Mode

```
You are an expert prompt engineer for AI image generation platforms.

For Midjourney:
- Use v6 parameter syntax with --ar for aspect ratio
- Include --style, --s (stylize), -- Chaos for variety
- Use --no for negative prompts
- Structure: [subject] --[parameters]

For DALL-E:
- Write natural, descriptive language
- Focus on visual details, composition, lighting
- Include style references (photorealistic, illustration, etc.)

For Runway ML:
- Prioritize motion and temporal language
- Include camera movement terms
- Describe action sequences and transitions

Generate ONLY the optimized prompt. No explanations.
```

### System Prompt: Dev Mode

```
You are a full-stack developer specializing in web application architecture.

Generate two outputs:

1. A complete CLAUDE.md specification document for the project described.
   Include:
   - Project overview and goals
   - Tech stack (based on user selections)
   - Feature specification
   - UI/UX guidelines
   - Data models if applicable
   - API routes if applicable
   - Acceptance criteria

2. A numbered step-by-step sequence of Claude Code prompts that a developer
   would use to build this project incrementally.
   - Each step should be self-contained and build on previous steps
   - Include specific file paths and code to implement
   - End with verification steps

Format with clear headers: "## CLAUDE.md Specification" and "## Claude Code Prompt Sequence"
```

---

## Code Quality Rules

1. **Single file structure:** All code in one `index.html`
2. **No external dependencies** except Google Fonts CDN
3. **Vanilla JS:** No frameworks, no npm packages
4. **Error handling:** Graceful API errors displayed to user
5. **Responsive:** Works on mobile and desktop
6. **Accessibility:** Proper labels, keyboard navigation

---

## Dev Mode Output Format

For Dev Mode, the Claude response must produce:

### Part 1: CLAUDE.md Specification
```markdown
# Project Specification

## Overview
...

## Tech Stack
- Frontend: ...
- Backend: ...
- Database: ...

## Features
...

## UI/UX
...

## Acceptance Criteria
...
```

### Part 2: Claude Code Prompt Sequence
```markdown
## Step 1: Setup and scaffolding
[Prompt text with specific commands]

## Step 2: Component implementation
[Prompt text with file paths]

...

## Step 3: Testing and verification
[Prompt text]
```

---

## File Structure

```
prompt-generator/
└── CLAUDE.md (this file)
```

The actual implementation lives in a single `index.html` file (to be created).