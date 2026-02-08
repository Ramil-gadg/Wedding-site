(function () {
  'use strict';

  // Календарь: июнь 2026, день 6 выделен
  function renderCalendar() {
    var container = document.getElementById('calendar-grid');
    if (!container) return;

    var year = 2026;
    var month = 3; // 0 = январь
    var weddingDay = 19;

    var firstDay = new Date(year, month, 1);
    var lastDay = new Date(year, month + 1, 0);
    var startWeekday = firstDay.getDay();
    var offset = startWeekday === 0 ? 6 : startWeekday - 1;
    var daysInMonth = lastDay.getDate();

    var html = '';

    for (var i = 0; i < offset; i++) {
      html += '<span></span>';
    }

    for (var d = 1; d <= daysInMonth; d++) {
      var cls = d === weddingDay ? 'wedding-day' : '';
      html += '<span class="' + cls + '">' + d + '</span>';
    }

    container.innerHTML = html;
  }

  renderCalendar();

  // Обратный отсчёт до свадьбы (19.04.2026, 16:00)
  var weddingDate = new Date(2026, 3, 19, 16, 0, 0);

  function updateCountdown() {
    var now = new Date();
    var diff = weddingDate - now;

    if (diff <= 0) {
      document.getElementById('countdown-days').textContent = '0';
      document.getElementById('countdown-hours').textContent = '0';
      document.getElementById('countdown-minutes').textContent = '0';
      document.getElementById('countdown-seconds').textContent = '0';
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    var elDays = document.getElementById('countdown-days');
    var elHours = document.getElementById('countdown-hours');
    var elMinutes = document.getElementById('countdown-minutes');
    var elSeconds = document.getElementById('countdown-seconds');
    if (elDays) elDays.textContent = days;
    if (elHours) elHours.textContent = hours;
    if (elMinutes) elMinutes.textContent = minutes;
    if (elSeconds) elSeconds.textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
})();
