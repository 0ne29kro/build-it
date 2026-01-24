# Foundation — Complete Code

```python
"""
Academic Study Timer
Foundation Stage (Pages 1-60)
Run this after completing Foundation to verify your code works.
"""

import tkinter as tk
from tkinter import messagebox
import time
from typing import Optional


class TimerState:
    """Transient runtime state for the countdown timer."""

    def __init__(self, duration_seconds: int):
        self.remaining_seconds: int = duration_seconds
        self.is_running: bool = False
        self.alarm_triggered: bool = False


class StudyTimerApp:
    """Main application controller."""

    # Timing constants
    TICK_INTERVAL_MS = 200
    CLOCK_UPDATE_MS = 1000
    DEFAULT_DURATION = 25 * 60  # 25 minutes in seconds

    def __init__(self, root: tk.Tk):
        self.root = root
        self.root.title("Academic Study Timer")
        self.root.resizable(False, False)

        # Timer state
        self.timer_state = TimerState(self.DEFAULT_DURATION)

        # Timing bookkeeping
        self._last_tick_time: Optional[float] = None
        self._accumulated_time: float = 0.0

        # Build UI
        self._build_ui()

        # Start background updates
        self._update_clock()
        self._tick()

    def _build_ui(self):
        """Construct all UI elements."""
        # Main container
        main_frame = tk.Frame(self.root, padx=20, pady=20)
        main_frame.pack(fill=tk.BOTH, expand=True)

        # Clock header
        clock_frame = tk.Frame(main_frame)
        clock_frame.pack(fill=tk.X, pady=(0, 15))

        tk.Label(
            clock_frame,
            text="Current Time:",
            font=("TkDefaultFont", 10)
        ).pack(side=tk.LEFT)

        self.clock_label = tk.Label(
            clock_frame,
            text="",
            font=("TkDefaultFont", 10, "bold")
        )
        self.clock_label.pack(side=tk.LEFT, padx=(5, 0))

        # Timer display frame
        self.timer_frame = tk.Frame(
            main_frame,
            bd=2,
            relief=tk.GROOVE,
            padx=20,
            pady=20
        )
        self.timer_frame.pack(fill=tk.X, pady=(0, 15))

        # Countdown label
        self.countdown_label = tk.Label(
            self.timer_frame,
            text=self._format_time(self.timer_state.remaining_seconds),
            font=("TkFixedFont", 48, "bold")
        )
        self.countdown_label.pack()

        # Status label
        self.status_label = tk.Label(
            self.timer_frame,
            text="Ready",
            font=("TkDefaultFont", 12)
        )
        self.status_label.pack(pady=(10, 0))

        # Control buttons
        controls_frame = tk.Frame(main_frame)
        controls_frame.pack(fill=tk.X)

        self.start_button = tk.Button(
            controls_frame,
            text="Start",
            width=10,
            command=self._on_start
        )
        self.start_button.pack(side=tk.LEFT, expand=True)

        self.stop_button = tk.Button(
            controls_frame,
            text="Stop",
            width=10,
            command=self._on_stop,
            state=tk.DISABLED
        )
        self.stop_button.pack(side=tk.LEFT, expand=True)

        self.reset_button = tk.Button(
            controls_frame,
            text="Reset",
            width=10,
            command=self._on_reset
        )
        self.reset_button.pack(side=tk.LEFT, expand=True)

    def _format_time(self, seconds: int) -> str:
        """Convert seconds to MM:SS format."""
        minutes = seconds // 60
        secs = seconds % 60
        return f"{minutes:02d}:{secs:02d}"

    def _update_clock(self):
        """Update the live clock display."""
        current_time = time.strftime("%H:%M:%S")
        self.clock_label.config(text=current_time)
        self.root.after(self.CLOCK_UPDATE_MS, self._update_clock)

    def _tick(self):
        """Process one tick of the countdown timer."""
        if self.timer_state.is_running:
            current_time = time.monotonic()

            if self._last_tick_time is not None:
                elapsed = current_time - self._last_tick_time
                self._accumulated_time += elapsed

            while self._accumulated_time >= 1.0 and self.timer_state.remaining_seconds > 0:
                self.timer_state.remaining_seconds -= 1
                self._accumulated_time -= 1.0

            if self.timer_state.remaining_seconds == 0 and not self.timer_state.alarm_triggered:
                self._trigger_alarm()

            self._last_tick_time = current_time

        self._update_timer_display()
        self.root.after(self.TICK_INTERVAL_MS, self._tick)

    def _update_timer_display(self):
        """Refresh countdown display and status."""
        # Update countdown text
        self.countdown_label.config(
            text=self._format_time(self.timer_state.remaining_seconds)
        )

        # Handle alarm state visuals
        if self.timer_state.alarm_triggered:
            self.timer_frame.config(bg="#ffcccc")
            self.countdown_label.config(bg="#ffcccc")
            self.status_label.config(bg="#ffcccc", text="Time's Up!", fg="#cc0000")
        else:
            # Normal state visuals
            default_bg = self.root.cget("bg")
            self.timer_frame.config(bg=default_bg)
            self.countdown_label.config(bg=default_bg)
            self.status_label.config(bg=default_bg, fg="black")

            # Determine status text
            if self.timer_state.is_running:
                self.status_label.config(text="Running")
            elif self.timer_state.remaining_seconds < self.DEFAULT_DURATION:
                self.status_label.config(text="Paused")
            else:
                self.status_label.config(text="Ready")

        # Update button states
        if self.timer_state.is_running:
            self.start_button.config(state=tk.DISABLED)
            self.stop_button.config(state=tk.NORMAL)
        else:
            self.start_button.config(state=tk.NORMAL)
            self.stop_button.config(state=tk.DISABLED)

    def _trigger_alarm(self):
        """Handle alarm when countdown reaches zero."""
        self.timer_state.alarm_triggered = True
        self.timer_state.is_running = False
        self._last_tick_time = None
        self._accumulated_time = 0.0
        self.root.bell()

    def _on_start(self):
        """Handle Start button click."""
        if self.timer_state.is_running:
            return
        if self.timer_state.alarm_triggered:
            return
        if self.timer_state.remaining_seconds == 0:
            return

        self.timer_state.is_running = True
        self._last_tick_time = time.monotonic()
        self._accumulated_time = 0.0

    def _on_stop(self):
        """Handle Stop button click."""
        if not self.timer_state.is_running:
            return

        self.timer_state.is_running = False
        self._last_tick_time = None
        self._accumulated_time = 0.0

    def _on_reset(self):
        """Handle Reset button click."""
        self.timer_state.is_running = False
        self.timer_state.alarm_triggered = False
        self.timer_state.remaining_seconds = self.DEFAULT_DURATION
        self._last_tick_time = None
        self._accumulated_time = 0.0


def main():
    root = tk.Tk()
    app = StudyTimerApp(root)
    root.mainloop()


if __name__ == "__main__":
    main()

```
