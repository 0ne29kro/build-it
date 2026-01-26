# Build It

**A MoreSalamander StudioLabs Production**

*Learn by building. One page at a time.*

---

## What is Build It?

Build It is an educational series that teaches programming through complete, working projects. Each project is broken down into atomic steps — one concept per page — so you always know exactly what you're doing and why.

No hand-waving. No "the rest is left as an exercise." Every line of code is explained, every decision is justified, and every checkpoint confirms you're on track.

## Philosophy

Traditional tutorials fail in predictable ways:

- **Too fast** — Steps get skipped, leaving gaps in understanding
- **Too abstract** — Theory without practice doesn't stick
- **Too fragile** — One mistake and you're lost with no way to recover

Build It solves these problems with a structured approach:

1. **Atomic Steps** — Each page introduces exactly one concept
2. **Working Checkpoints** — Your code runs at every stage
3. **Recovery Paths** — Every page includes troubleshooting for common issues
4. **Progressive Enhancement** — Start simple, add complexity in layers

## The Three Stages

Every Build It project follows the same progression:

| Stage | Name | What You Build |
|-------|------|----------------|
| **Foundation** | See It Work | A complete, working application with hardcoded values |
| **Configuration** | Use It Today | User-adjustable settings with validation and UI |
| **Persistence** | Keep It Forever | Save and load settings between sessions |

Each stage produces a standalone, runnable application. You can stop at any stage and have something useful.

## Available Projects

### Academic Series

Projects designed for students and productivity.

| Project | Description | Foundation | Configuration | Persistence |
|---------|-------------|:----------:|:-------------:|:-----------:|
| [Study Timer](./academic/study-timer/) | Pomodoro-style countdown timer with alarm | ✅ | ✅ | ✅ |

### Web Performance Series

High-performance simulations and visualizations using React and Canvas.

| Project | Description | Foundation | Configuration | Persistence |
|---------|-------------|:----------:|:-------------:|:-----------:|
| [Particle Life](./web-performance/particle-life/) | Artificial life simulation with emergent behaviors | ✅ | 🚧 | 🚧 |

*More projects coming soon.*

## How to Use These Guides

1. **Pick a project** that interests you
2. **Start with Foundation** — always begin here
3. **Follow page by page** — don't skip ahead
4. **Run your code** at every checkpoint
5. **Stop when satisfied** — each stage is complete on its own

## Quick Links

- [Study Timer — Foundation Guide](./academic/study-timer/foundation.html)
- [Study Timer — Configuration Guide](./academic/study-timer/configuration.html)
- [Study Timer — Persistence Guide](./academic/study-timer/persistence.html)
- [Study Timer — Addendum](./academic/study-timer/ADDENDUM.html)
- [Particle Life — Foundation Guide](./web-performance/particle-life/foundation.html)

---

## Project Structure
```
build-it/
├── index.html              # Landing page
├── academic/               # Academic series
│   ├── index.html          # Series overview
│   └── study-timer/        # Study Timer project
│       ├── index.html      # Project overview
│       ├── foundation.html # Stage 1: See It Work
│       ├── configuration.html # Stage 2: Use It Today
│       └── persistence.html   # Stage 3: Keep It Forever
├── web-performance/        # Web Performance series
│   └── particle-life/      # Particle Life project
│       ├── index.html      # Project overview
│       ├── foundation.html # Stage 1: See It Work
│       ├── configuration.html # Stage 2: Use It Today
│       └── persistence.html   # Stage 3: Keep It Forever
└── assets/
    ├── css/
    │   └── guide.css       # Shared styles
    └── js/
        └── guide.js        # Shared interactivity
```

## What You'll Need

- **Python 3.8+** — For Academic series projects
- **Node.js / React** — For Web Performance series projects
- **A text editor** — VS Code, PyCharm, or even Notepad
- **A terminal** — To run your code
- **Patience** — One page at a time

## About MoreSalamander StudioLabs

We believe programming should be taught the way it's actually done: by building real things, making mistakes, and learning from them. No toy examples. No "hello world" padding. Just working software, explained completely.

## The Build It Constitution

Every guide follows the [Build It Constitution](./CONSTITUTION.md) — a locked instructional framework defining stage boundaries, page structure, and atomic step rules.

## How These Guides Are Made

Build It guides are created using a **structured production workflow** — not just AI-generated code presented as-is.

Each guide transforms a working application into a **step-structured learning system** where every step:

- Introduces exactly one concept
- Explains intent and constraints
- Includes a checkpoint and failure recovery path
- Preserves architectural boundaries

### The Pipeline

1. **Stage freeze & constraints** — Define what's in scope and explicitly out of scope
2. **Atomic decomposition** — Break the system into "one step = one unit of change"
3. **Instruction-as-verification** — Embed checkpoints so the guide doubles as a QA harness
4. **End-to-end validation** — Confirm runtime behavior matches the guide's claims
5. **Feature verification suite** — Add checklists to guard against regression

### Quality Controls

- **Contracted step schema:** purpose, fit, code, explanation, why-it-matters, checkpoint, recovery
- **Dependency tracking:** each step declares prerequisites
- **Run-based validation:** final code is executed to confirm key behaviors
- **Scope enforcement:** "does not include" constraints are asserted and re-verified

### AI Collaboration

These guides are co-authored with AI systems (ChatGPT and Claude) under human-owned standards:

- **0ne29 (author/producer):** system design, constraints, stage boundaries, QA expectations, acceptance criteria
- **AI systems:** structured synthesis under constraints, consistent formatting, alignment of prose to code

For the full authoring methodology, see [AUTHORING.md](./AUTHORING.md).

---

<p align="center">
  <strong>Build It</strong> — A MoreSalamander StudioLabs Production<br>
  <em>Learn by building. One page at a time.</em>
</p>
