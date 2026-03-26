/* ============================================
   gioia.dev — script.js
   Cursor personalizzato + Scroll Reveal + Smooth Scroll
   ============================================ */

/* ─── Custom Cursor ─── */
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => { cursor.style.opacity = '0'; });
document.addEventListener('mouseenter', () => { cursor.style.opacity = '1'; });

document.querySelectorAll('a, button, .work-card, .service-card').forEach((el) => {
  el.addEventListener('mouseenter', () => cursor.classList.add('big'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('big'));
});


/* ─── Scroll Reveal ─── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));


/* ─── Smooth Scroll ─── */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


document.addEventListener("mousemove", (e) => {
  const eyes = document.querySelectorAll(".pupil");

  eyes.forEach(eye => {
    const rect = eye.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const dx = e.clientX - x;
    const dy = e.clientY - y;

    const angle = Math.atan2(dy, dx);

    const moveX = Math.cos(angle) * 3;
    const moveY = Math.sin(angle) * 3;

    eye.setAttribute("cx", parseFloat(eye.dataset.cx) + moveX);
    eye.setAttribute("cy", parseFloat(eye.dataset.cy) + moveY);
  });
});