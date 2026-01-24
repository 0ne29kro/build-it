# Build It — Constitution
## Instructional System Framework
### Version 2.0

---

## Purpose

This Constitution defines the Build It instructional system — a methodology for teaching software construction through atomic, sequential steps. Each page teaches exactly one concept, adds exactly one piece of code, and produces a verifiable checkpoint.

---

## Core Principles

### 1. Three Standalone Stages

Every Build It project produces **three separate guides**, each building a complete, runnable application:

| Stage | Guide | Output |
|-------|-------|--------|
| **Foundation** | Pages 1–N | `foundation.py` — Core functionality, hardcoded values |
| **Configuration** | Pages 1–M | `configuration.py` — User-adjustable settings (in-memory) |
| **Persistence** | Pages 1–P | `persistence.py` — Settings saved to disk |

**Key rule:** Each guide starts at Page 1. Each guide produces ONE window. Each guide is a complete standalone tutorial.

Page counts (N, M, P) are determined by actual decomposition for each project — never locked in advance.

### 2. Stage Boundaries (LOCKED)

**Foundation includes:**
- All imports needed for core functionality
- Domain state class (e.g., `TimerState`)
- Application controller class with hardcoded constants
- Complete UI without settings panel
- All core behavior methods
- Entry point (`main()` and `if __name__ == "__main__"`)

**Foundation does NOT include:**
- Settings dataclass
- Configuration UI (settings panel, Apply button)
- Validation methods for user input
- Any reference to `self.settings`

---

**Configuration includes:**
- Everything needed to run (woven in, not imported from Foundation)
- `@dataclass` import and `Settings` class
- Settings UI panel (inputs, Apply button)
- Input validation methods
- Smart sync logic (update timer only when safe)
- Conditional behavior based on settings

**Configuration does NOT include:**
- JSON/Path imports
- File I/O operations
- PersistenceManager class
- Save button or Saved/Unsaved indicator
- Dirty tracking

---

**Persistence includes:**
- Everything needed to run (woven in, not imported from Configuration)
- JSON and Path imports
- `PersistenceManager` class with `load()` and `save()` methods
- Settings file location constant
- Load on startup, save on demand
- Dirty tracking (comparing against saved snapshot)
- Save button replacing Apply button
- Saved/Unsaved status indicator
- Corruption recovery (defaults on bad file)

---

## Page Template (LOCKED)

Every page follows this exact structure:

```markdown
# Page N: [Action Title]

## What this page does

[One sentence describing the single action this page performs]

---

## Where this fits

**Part:** [Foundation | Configuration | Persistence]  
**Section:** [Chunk name]  
**Depends on:** [Page numbers or "None"]  

This step is part of the larger process of [context].

---

## Code (this page)

```python
[Exact code added on this page — no more, no less]
```

---

## Explanation

[2-4 sentences explaining what the code does and why]

---

## Why this matters

[1-2 sentences connecting this to the larger system]

---

## Visual reference

📲 **Visual placeholder**  
This page will later include [description of planned visual].

---

## Checkpoint

After this page, you should be able to:

- [ ] [Verifiable condition 1]
- [ ] [Verifiable condition 2]

If this is not true, stop and review before continuing.

---

## If something breaks here

**Common issues at this step:**

- [Issue 1]
- [Issue 2]

**How to recover:**

[Recovery instructions]

---

## Next page

➡️ **Page N+1: [Next Page Title]**
```

---

## Atomic Step Rules

### What counts as ONE page:

- One import statement
- One class declaration (without body)
- One method signature (without body)
- One logical block inside a method (3-7 lines typically)
- One widget creation and configuration
- One constant or variable initialization

### What requires MULTIPLE pages:

- A method with multiple logical sections
- A class with multiple methods
- Multiple related but distinct operations
- Any code block over 7 lines

### Code appearance rules:

- Code appears on exactly ONE page
- No repeated code across pages
- No "here's the full method" summaries mid-guide
- Complete code only in final verification appendix

---

## Chunk Structure

Each stage is organized into logical chunks. Chunk names and counts vary by project, but follow this pattern:

**Foundation chunks (typical):**
- Imports and module boundary
- Domain state classes
- Application shell and constants
- UI composition (header, display, controls)
- Core logic / main loop
- Control handlers
- Entry point

**Configuration chunks (typical):**
- Configuration boundary (new imports)
- Settings domain model
- Input validation pipeline
- Settings UI composition
- Apply/sync logic

**Persistence chunks (typical):**
- Persistence boundary (new imports)
- PersistenceManager class
- Load pipeline
- Save pipeline
- Dirty tracking
- UI changes (Save button, status indicator)

---

## Verification Pages

Each stage ends with verification pages that:

1. List all features that should work
2. Provide a completion checklist
3. Confirm stage boundaries (what IS and ISN'T included)
4. Include complete code for that stage

---

## Naming Conventions

### Files
- `foundation.py` — Stage 1 output
- `configuration.py` — Stage 2 output  
- `persistence.py` — Stage 3 output (final application)

### Classes
- Use PascalCase: `TimerState`, `Settings`, `PersistenceManager`
- App controller: `[Project]App` (e.g., `StudyTimerApp`)

### Methods
- Private methods: `_method_name`
- Event handlers: `_on_[event]` (e.g., `_on_start`, `_on_apply`)
- Update methods: `_update_[thing]` (e.g., `_update_display`)

### Constants
- Class constants: `SCREAMING_SNAKE_CASE`
- Located inside the app class, not at module level

---

## Anti-Patterns (FORBIDDEN)

### In guides:
- ❌ "Now let's add these 50 lines..."
- ❌ Showing the same code twice
- ❌ Skipping steps ("the rest is similar")
- ❌ Forward references to undefined code
- ❌ Pages without checkpoints

### In code:
- ❌ Multiple `main()` functions
- ❌ Multiple `root.mainloop()` calls
- ❌ Global variables for state
- ❌ Threading for timing (use `root.after()`)
- ❌ Silent failures (always provide feedback)

---

## Stage Output Requirements

### Foundation output must:
- [ ] Open exactly ONE window
- [ ] Function completely with hardcoded values
- [ ] Have no settings UI
- [ ] Have no file I/O

### Configuration output must:
- [ ] Open exactly ONE window
- [ ] Include all Foundation functionality
- [ ] Have working settings UI
- [ ] Validate user input
- [ ] Have no file I/O
- [ ] Lose settings on restart (expected)

### Persistence output must:
- [ ] Open exactly ONE window
- [ ] Include all Configuration functionality
- [ ] Save settings to disk
- [ ] Load settings on startup
- [ ] Show Saved/Unsaved status
- [ ] Handle corrupted files gracefully

---

## Project-Specific Addendum

Each Build It project creates a project-specific addendum defining:

1. **Project name and description**
2. **Actual page counts** (determined by decomposition)
3. **Chunk breakdown** (specific to project complexity)
4. **Feature checklist** (what the app does)
5. **Variable naming table** (project-specific names)
6. **Reference code files** (verified working checkpoints)

The Constitution defines the system. The addendum defines the project.

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Initial | Original additive model with locked page counts |
| 2.0 | Current | Standalone guide model, flexible page counts, project-agnostic |

---

**END OF CONSTITUTION**
