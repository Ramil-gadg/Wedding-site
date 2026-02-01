// Обработчик формы RSVP
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvp-form');
    const thankYouMessage = document.getElementById('thank-you-message');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // В реальном приложении здесь был бы код для отправки данных на сервер
            // Для демо просто показываем сообщение спасибо
            rsvpForm.style.display = 'none';
            thankYouMessage.style.display = 'block';
            
            // Прокручиваем к сообщению спасибо
            thankYouMessage.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Таймер обратного отсчета до свадьбы
    function updateCountdown() {
        const weddingDate = new Date('April 19, 2026 16:00:00').getTime();
        const now = new Date().getTime();
        const timeRemaining = weddingDate - now;
        
        if (timeRemaining > 0) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        } else {
            document.querySelector('.footer-countdown').innerHTML = '<p>Свадьба состоялась! Спасибо, что были с нами!</p>';
        }
    }
    
    // Обновляем счетчик каждую минуту
    updateCountdown();
    setInterval(updateCountdown, 60000);
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Добавляем активный класс к текущему разделу в навигации
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = '#' + section.id;
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSectionId) {
                link.classList.add('active');
            }
        });
    });
    
    // Стили для активной ссылки в навигации
    const style = document.createElement('style');
    style.textContent = `
        .nav-links a.active {
            color: var(--accent-color) !important;
            background-color: rgba(157, 107, 107, 0.15);
        }
    `;
    document.head.appendChild(style);
});