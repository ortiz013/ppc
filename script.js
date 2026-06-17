/* UG Open — First Serve
   Lightweight, dependency-free. Edit EVENT_DATE to your real date/time. */

(function () {
  "use strict";

  // ---- Set your tournament start here (local time) ----
  const EVENT_DATE = new Date("2026-07-17T16:30:00");

  const el = {
    days:  document.querySelector('[data-unit="days"]'),
    hours: document.querySelector('[data-unit="hours"]'),
    mins:  document.querySelector('[data-unit="mins"]'),
    secs:  document.querySelector('[data-unit="secs"]'),
  };

  function pad(n) { return String(n).padStart(2, "0"); }

  function tick() {
    const diff = EVENT_DATE - new Date();

    if (diff <= 0) {
      el.days.textContent = "00";
      el.hours.textContent = "00";
      el.mins.textContent = "00";
      el.secs.textContent = "00";
      const board = document.getElementById("countdown");
      if (board && !board.dataset.done) {
        board.dataset.done = "1";
        board.setAttribute("aria-label", "The tournament has started");
      }
      return;
    }

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    el.days.textContent  = pad(d);
    el.hours.textContent = pad(h);
    el.mins.textContent  = pad(m);
    el.secs.textContent  = pad(s);
  }

  if (el.days) {
    tick();
    setInterval(tick, 1000);
  }
})();
