# Build It — Study Timer Addendum

## Project-Specific Extension to the Constitution

---

## 1. Project Name and Description

**Project:** Academic Study Timer  
**Series:** Academic  
**Description:** A Pomodoro-style countdown timer with configurable duration, optional alarm sound, and persistent settings.

**What it does:**
- Displays current time in 24-hour format
- Counts down from a configurable duration
- Plays system bell when time expires
- Provides visual alarm state (red background)
- Saves and loads user preferences

---

## 2. Actual Page Counts

| Stage | Pages | Output File |
|-------|-------|-------------|
| **Foundation** | 60 | `foundation.py` |
| **Configuration** | 110 | `configuration.py` |
| **Persistence** | 142 | `persistence.py` |

**Total instruction pages:** 312

---

## 3. Chunk Breakdown

### Foundation (60 pages)

| Chunk | Pages | Description |
|-------|-------|-------------|
| Module & Runtime Boundary | 1–3 | Imports (tkinter, time, Optional) |
| Domain State | 4 | TimerState class |
| Application Shell | 5–7 | StudyTimerApp class, constants |
| Application Initialization | 8–12 | __init__ setup, state, background loops |
| UI Composition → Header | 13–16 | Clock frame and labels |
| UI Composition → Countdown Display | 17–19 | Timer frame, countdown label, status |
| UI Composition → Controls | 20–23 | Start, Stop, Reset buttons |
| Helper Utilities | 24 | _format_time() |
| Background Processes | 25 | _update_clock() |
| Time Engine | 26–33 | _tick() loop, elapsed time, alarm detection |
| UI Rendering | 34–39 | _update_timer_display(), colors, button states |
| Control Semantics | 40–45 | _trigger_alarm(), _on_start/stop/reset handlers |
| Entry Point | 46–47 | main() and __name__ guard |
| Verification | 48–60 | Feature verification checklist |

### Configuration (110 pages)

| Chunk | Pages | Description |
|-------|-------|-------------|
| Module & Runtime Boundary | 1–5 | Adds messagebox, dataclass imports |
| Settings Domain Model | 6 | Settings dataclass |
| Domain State | 7 | TimerState (unchanged) |
| Application Shell | 8–9 | Class, timing constants (no DEFAULT_DURATION) |
| Application Initialization | 10–15 | Settings(), TimerState from settings |
| UI Composition → Header | 16–19 | Clock (unchanged) |
| UI Composition → Countdown Display | 20–22 | Timer display (unchanged) |
| UI Composition → Controls | 23–26 | Buttons with bottom padding for settings |
| UI Composition → Settings Section | 27–33 | LabelFrame, duration entry, alarm checkbox |
| UI Composition → Apply Controls | 34–35 | Apply Settings button |
| Helper Utilities | 36 | _format_time() (unchanged) |
| Input & Validation Pipeline | 37–42 | _parse_duration_input() with range checks |
| Background Processes | 43 | _update_clock() (unchanged) |
| Time Engine | 44–51 | _tick() (unchanged) |
| UI Rendering | 52–57 | Status uses settings.default_duration_seconds |
| Control Semantics | 58–63 | Handlers use settings, conditional alarm |
| Apply Workflow | 64–71 | _on_apply() with validation, smart sync |
| Entry Point | 72–73 | main() and guard (unchanged) |
| Verification | 74–110 | Extended verification for settings features |

### Persistence (142 pages)

| Chunk | Pages | Description |
|-------|-------|-------------|
| Module & Runtime Boundary | 1–5 | Adds json, pathlib imports |
| Settings Domain Model | 6–8 | Settings with to_dict(), from_dict() |
| Domain State | 9 | TimerState (unchanged) |
| Persistence Domain | 10–18 | PersistenceManager class with load/save |
| Application Shell | 19–20 | Class, constants, SETTINGS_FILE path |
| Application Initialization | 21–28 | Load settings on startup, dirty tracking |
| UI Composition → Header | 29–32 | Clock (unchanged) |
| UI Composition → Countdown Display | 33–37 | Adds Saved/Unsaved indicator |
| UI Composition → Controls | 38–41 | Buttons (unchanged) |
| UI Composition → Settings Section | 42–48 | Settings inputs (unchanged) |
| UI Composition → Save Controls | 49–52 | Save button (replaces Apply) |
| Helper Utilities | 53 | _format_time() (unchanged) |
| Input & Validation Pipeline | 54–59 | _parse_duration_input() (unchanged) |
| Background Processes | 60 | _update_clock() (unchanged) |
| Time Engine | 61–68 | _tick() (unchanged) |
| UI Rendering | 69–78 | Adds dirty indicator update |
| Control Semantics | 79–90 | Handlers track dirty state |
| Save Workflow | 91–100 | _on_save() with validation, persist, feedback |
| Entry Point | 101–102 | main() and guard (unchanged) |
| Verification | 103–142 | Extended verification for persistence features |

---

## 4. Feature Checklist

### Foundation Features

- [ ] Window titled "Academic Study Timer"
- [ ] Window is non-resizable
- [ ] Live clock displays current time (HH:MM:SS, 24-hour)
- [ ] Clock updates every second
- [ ] Countdown displays in MM:SS format with zero-padding
- [ ] Status shows: Ready, Running, Paused, Time's Up!
- [ ] Start button begins countdown
- [ ] Stop button pauses countdown (preserves remaining time)
- [ ] Reset button returns to 25:00 and Ready state
- [ ] Start disabled while running; Stop disabled while not running
- [ ] Timer frame shows light red background (#ffcccc) on alarm
- [ ] Status shows dark red text (#cc0000) on alarm
- [ ] System bell plays when countdown reaches zero
- [ ] Alarm fires exactly once per countdown cycle
- [ ] Timer uses monotonic clock (no drift)
- [ ] No settings UI present
- [ ] No file I/O present

### Configuration Features (adds to Foundation)

- [ ] Settings section with labeled border
- [ ] Duration entry field (minutes, 1–999 valid range)
- [ ] Alarm checkbox ("Enable alarm sound")
- [ ] Apply Settings button
- [ ] Error dialog for invalid duration input
- [ ] Success dialog after valid Apply
- [ ] Smart sync: timer updates only when in Ready state
- [ ] Paused/Running timers not affected by Apply
- [ ] Reset uses configured duration
- [ ] Alarm sound respects checkbox setting
- [ ] Settings persist in memory only (lost on restart)
- [ ] No file I/O present

### Persistence Features (adds to Configuration)

- [ ] Settings saved to JSON file
- [ ] Settings loaded on startup
- [ ] Save button replaces Apply button
- [ ] Saved/Unsaved status indicator
- [ ] Dirty tracking (compares current to saved snapshot)
- [ ] Indicator updates on any settings change
- [ ] Corrupted file recovers to defaults
- [ ] Missing file creates defaults
- [ ] File location: user config directory

---

## 5. Variable Naming Table

### Classes

| Class | Stage | Purpose |
|-------|-------|---------|
| `TimerState` | Foundation+ | Transient runtime state |
| `Settings` | Configuration+ | Configuration data |
| `StudyTimerApp` | Foundation+ | Main application controller |
| `PersistenceManager` | Persistence | File I/O coordinator |

### Class Constants (inside StudyTimerApp)

| Constant | Value | Stage | Purpose |
|----------|-------|-------|---------|
| `TICK_INTERVAL_MS` | 200 | Foundation+ | Timer tick rate (ms) |
| `CLOCK_UPDATE_MS` | 1000 | Foundation+ | Clock refresh rate (ms) |
| `DEFAULT_DURATION` | 1500 | Foundation only | Hardcoded 25 minutes |
| `SETTINGS_FILE` | Path(...) | Persistence | Config file location |

### Settings Fields

| Field | Type | Default | Stage |
|-------|------|---------|-------|
| `default_duration_seconds` | int | 1500 | Configuration+ |
| `alarm_enabled` | bool | True | Configuration+ |

### TimerState Fields

| Field | Type | Initial | Purpose |
|-------|------|---------|---------|
| `remaining_seconds` | int | (from settings) | Countdown value |
| `is_running` | bool | False | Active countdown flag |
| `alarm_triggered` | bool | False | One-shot alarm flag |

### Instance Variables (self.*)

| Variable | Type | Stage | Purpose |
|----------|------|-------|---------|
| `root` | tk.Tk | Foundation+ | Main window |
| `settings` | Settings | Configuration+ | Configuration object |
| `timer_state` | TimerState | Foundation+ | Runtime state |
| `_last_tick_time` | Optional[float] | Foundation+ | Timing reference |
| `_accumulated_time` | float | Foundation+ | Fractional seconds |
| `clock_label` | tk.Label | Foundation+ | Live clock display |
| `countdown_label` | tk.Label | Foundation+ | MM:SS display |
| `status_label` | tk.Label | Foundation+ | State text |
| `timer_frame` | tk.Frame | Foundation+ | Bordered container |
| `start_button` | tk.Button | Foundation+ | Start control |
| `stop_button` | tk.Button | Foundation+ | Stop control |
| `reset_button` | tk.Button | Foundation+ | Reset control |
| `duration_var` | tk.StringVar | Configuration+ | Entry binding |
| `duration_entry` | tk.Entry | Configuration+ | Duration input |
| `alarm_var` | tk.BooleanVar | Configuration+ | Checkbox binding |
| `alarm_check` | tk.Checkbutton | Configuration+ | Alarm toggle |
| `apply_button` | tk.Button | Configuration | Apply control |
| `save_button` | tk.Button | Persistence | Save control |
| `saved_label` | tk.Label | Persistence | Dirty indicator |
| `_saved_snapshot` | Settings | Persistence | Comparison baseline |
| `persistence` | PersistenceManager | Persistence | File I/O handler |

### Methods

| Method | Stage | Purpose |
|--------|-------|---------|
| `__init__(root)` | Foundation+ | Initialize application |
| `_build_ui()` | Foundation+ | Construct all widgets |
| `_format_time(seconds)` | Foundation+ | Convert to MM:SS |
| `_update_clock()` | Foundation+ | Refresh clock display |
| `_tick()` | Foundation+ | Process countdown tick |
| `_update_timer_display()` | Foundation+ | Sync UI with state |
| `_trigger_alarm()` | Foundation+ | Handle completion |
| `_on_start()` | Foundation+ | Start button handler |
| `_on_stop()` | Foundation+ | Stop button handler |
| `_on_reset()` | Foundation+ | Reset button handler |
| `_parse_duration_input()` | Configuration+ | Validate duration entry |
| `_on_apply()` | Configuration | Apply button handler |
| `_on_save()` | Persistence | Save button handler |
| `_is_dirty()` | Persistence | Compare to snapshot |
| `_update_dirty_indicator()` | Persistence | Refresh saved/unsaved |

---

## 6. Reference Code Files

Each stage produces a verified, runnable Python file:

| Stage | File | Lines (approx) |
|-------|------|----------------|
| Foundation | [foundation.py](/academic/study-timer/foundation.py) | ~180 |
| Configuration | [configuration.py](/academic/study-timer/configuration.py) | ~280 |
| Persistence | [persistence.py](/academic/study-timer/persistence.py) | ~350 |

Reference implementations are tested against the feature checklists above. Each file is standalone and runnable with `python <filename>.py`.

**View the complete reference code:** [study-timer/README.md](/academic/study-timer/README.md)

---

## 7. Stage Boundary Summary

| Boundary | What's Added | What's NOT Added |
|----------|--------------|------------------|
| **Foundation** | Core timer, hardcoded 25 min, always-on alarm | Settings UI, validation, file I/O |
| **Configuration** | Settings dataclass, UI inputs, Apply workflow, conditional alarm | File I/O, dirty tracking, Save button |
| **Persistence** | JSON save/load, PersistenceManager, dirty tracking, Save button | (Complete application) |

---

**END OF ADDENDUM**
