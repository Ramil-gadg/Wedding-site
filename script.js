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
})();
