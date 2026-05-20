# Project PKMS Guidelines

  

A lightweight system for documenting and tracking software projects in Obsidian.

Designed for a solo engineer working on multiple long-term projects in parallel.

  

---

  

## Core principles

  

1. **One file to maintain per project** - `project.md` is the only file you actively edit. Everything else is append-only or write-once.

2. **Personal tool, not a team wiki** - notes reflect your understanding of the project, not an objective record. Authoritative sources (git, team tracker) live outside Obsidian.

3. **Write when something happens** - no daily overhead on quiet days. The system only asks for effort when a decision is made or a meeting happens.

4. **History lives in ADRs and changelog** - `project.md` always reflects the current state. Never leave outdated information in it.

  

---

  

## Folder structure

  

```

10_Projects/

  _dashboard.md                  # Dataview overview of all projects

  <project-slug>/

    project.md                   # single source of current truth

    changelog.md                 # append-only history of significant changes

    decisions/

      ADR-0001-<slug>.md

      ADR-0002-<slug>.md

    meetings/

      YYYY-MM-DD-<slug>.md

```

  

### Naming conventions

  

| File | Convention | Example |

|---|---|---|

| Project folder | `kebab-case` client/project name | `client-acme-checkout` |

| ADR | `ADR-NNNN-kebab-case-title.md` | `ADR-0003-room-schedule-derived-entity.md` |

| Meeting note | `YYYY-MM-DD-kebab-case-topic.md` | `2026-05-13-schedule-api-review.md` |

  

> ADR numbers are monotonically incremented per project. Never reuse a number, even if an ADR is deprecated.

  

---

  

## Files reference

  

### `project.md`

  

The project's single source of current truth. Use the `project` Templater template.

  

**Sections:**

  

| Section | Purpose | Update rule |

|---|---|---|

| `## Context` | Business goal, scope, non-goals | Edit in place when project direction changes |

| `## Architecture` | Stack, components, key constraints | Edit in place when architecture changes |

| `## Requirements` | What the product must do | Edit in place; link to relevant ADRs |

| `## Tasks` | Active tasks only | Add when needed; **delete** when done (no archiving) |

| `## Improvements` | Tech debt, future ideas, refactor candidates | Add freely; move to Tasks when prioritised |

| `## People` | Name, role, contact | Edit in place |

| `## Open questions` | Unresolved decisions or clarifications needed | Remove entries when resolved |

  

**Rules:**

- `project.md` always describes the **current** state. Do not leave outdated sections.

- Completed tasks are **deleted**, not archived. Historical context belongs in `changelog.md` and ADRs.

- Link from `## Requirements` and `## Architecture` to the ADR that explains *why* something is the way it is.

  

**Frontmatter fields:**

  

```yaml

title: "Project display name"

type: project

status: active        # active | paused | completed

client: "Client name"

started: YYYY-MM-DD

```

  

---

  

### `changelog.md`

  

An append-only chronological log of significant changes to the project. Not a task list - a narrative of how the product evolved.

  

**Format:**

  

```markdown

## YYYY-MM-DD

Plain-English description of what changed in the product.

→ [[decisions/ADR-NNNN-slug]]

→ [[meetings/YYYY-MM-DD-slug]]    ← optional

```

  

**Rules:**

- One entry per significant change. A "significant change" is anything you would want to understand in 6 months.

- Written as a **byproduct of writing an ADR**: when you create an ADR, you also append one line here.

- Never restructure or edit past entries.

- Do not log completed tasks - log product changes.

  

**What qualifies as a changelog entry:**

- An architectural decision that changed the system shape

- A requirement that was added, removed, or significantly changed

- A technical approach that was reversed or superseded

- A scope change agreed with the client

  

**What does not qualify:**

- Routine task completion

- Minor code refactors with no architectural impact

- Internal process changes with no product impact

  

---

  

### `decisions/ADR-NNNN-<slug>.md`

  

An Architecture Decision Record documenting a single non-obvious technical or product decision. Write-once - never edit the body after acceptance. Use the `adr` Templater template.

  

**ADR status lifecycle:**

  

```

Proposed → Accepted → Superseded

                    ↘ Deprecated

```

  

| Status | Meaning |

|---|---|

| `Proposed` | Under discussion, not yet confirmed |

| `Accepted` | Decision is in effect |

| `Superseded` | Replaced by a newer ADR (fill `superseded-by`) |

| `Deprecated` | No longer relevant, not replaced |

  

**When to write an ADR:**

- You debated an approach for more than ~5 minutes

- You chose option A over option B and the reason is not obvious from the code

- A client or stakeholder imposed a constraint that shaped the design

- You are reversing or changing a previous decision

  

**When NOT to write an ADR:**

- Trivial implementation details with no long-term consequences

- Decisions that are self-evident from the code or requirements

  

**Superseding an ADR:**

  

Never edit the old ADR body. Instead:

1. Create a new ADR with `supersedes: ADR-NNNN`

2. Update the old ADR's frontmatter: `status: Superseded` and `superseded-by: ADR-MMMM`

3. Append an entry to `changelog.md`

  

---

  

### `meetings/YYYY-MM-DD-<slug>.md`

  

A focused record of a meeting's outcomes. Not minutes - context and decisions only. Use the `meeting-note` Templater template.

  

**Sections:**

  

| Section | Purpose |

|---|---|

| `## Decided` | Outcomes. If a decision is non-obvious, create an ADR and link it. |

| `## Actions` | Tasks that emerged. Mirror relevant ones in `project.md > Tasks`. |

| `## Context worth keeping` | The human reasoning behind decisions - constraints, opinions, history. |

  

**Rules:**

- Write during or immediately after the meeting, while context is fresh.

- `## Context worth keeping` is the most important section. The decision is in the ADR; the meeting note preserves the *why* that would never make it into a formal document.

- After the meeting: copy action items into `project.md > Tasks`, create ADRs for any non-obvious decisions made.

  

---

  

## Templates

  

All templates live in `_templates/`. Apply via Templater (default: `Alt+E` or your configured hotkey).

  

| Template | Creates | Triggered when |

|---|---|---|

| `project.md` | Project hub file | Starting a new project |

| `adr.md` | `ADR-NNNN-slug.md` in `decisions/` | A non-obvious decision is made |

| `meeting-note.md` | `YYYY-MM-DD-slug.md` in `meetings/` | Before or during a meeting |

  

---

  

## Daily workflow

  

**Most days (heads-down coding):** touch nothing, or update a checkbox in `project.md`.

  

**After a meeting:**

1. Create a meeting note from template

2. Copy action items into `project.md > Tasks`

3. If a non-obvious decision was made → write an ADR

  

**When a decision is made:**

1. Write ADR → `decisions/ADR-NNNN-slug.md`

2. Append one line to `changelog.md`

3. Update `project.md` to reflect the new state (requirements, architecture, open questions)

  

**Weekly review (Friday, ~15 min):**

1. Open `_dashboard.md` - check status of all active projects

2. Per each active project: update task checkboxes, clear resolved open questions

3. Check `## Improvements` - anything ready to promote to `## Tasks`?

  

**When a project ends:**

1. Set `status: completed` in `project.md` frontmatter

2. Move the project folder to `90_Archive/`

  

---

  

## Linking conventions

  

- Use wikilinks `[[...]]` for all internal references (ADRs, meeting notes, knowledge notes).

- Always link from `project.md` to the ADR that explains an architectural or requirement choice.

- Always link from `changelog.md` entries to the relevant ADR and optionally the meeting note.

- Meeting notes link to ADRs created as a result of that meeting.

  

**Example chain** (how you recover "why" months later):

  

```

project.md (Architecture section)

  → ADR-0003-room-schedule-derived-entity

      → meetings/2026-04-15-data-model-review

changelog.md (2026-04-15 entry)

  → ADR-0003-room-schedule-derived-entity

```

  

---

  

## What belongs here vs elsewhere

  

| Content | Belongs in |

|---|---|

| Current project state | `project.md` |

| Why a decision was made | `decisions/ADR-NNNN.md` |

| When something changed | `changelog.md` |

| Human context behind a decision | `meetings/` note |

| Reusable concepts & theory | `30_Knowledge/` |

| Reusable code snippets | `40_Snippets/` |

| Authoritative task tracking | External team tracker |

| Authoritative code history | Git |