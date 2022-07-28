const d = document;

export function startClock(btnStart, btnStop, clockInfo) {
  let clock;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnStart)) {
      clock = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clockInfo).innerHTML = `<h3 class="section-h3">${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clock);
      document.querySelector(btnStart).disabled = false;
      d.querySelector(clockInfo).innerHTML = null;
      // if (document.querySelector(btnStart).hasAttributes("disabled")) {}
    }
  });
}

export function startAlarm(btnStart, btnStop, sound) {
  let alarmTempo;
  const $alarm = d.createElement("audio");
  $alarm.src = sound;
  $alarm.currentTime = 110;

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnStart)) {
      alarmTempo = setTimeout(() => {
        $alarm.play();
      }, 1000);

      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      document.querySelector(btnStart).disabled = false;
      $alarm.pause();
      $alarm.currentTime = 110;
    }
  });
}
