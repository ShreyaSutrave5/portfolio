// Smooth scroll (optional if scroll-behavior: smooth is not enough for you)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// GSAP Animation for hero section
gsap.from(".logo", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".nav-links li", {
  duration: 1,
  y: -30,
  opacity: 0,
  stagger: 0.2,
  ease: "power2.out"
});

gsap.from(".intro h2", {
  duration: 1,
  x: -100,
  opacity: 0,
  delay: 0.5,
  ease: "power2.out"
});

gsap.from(".intro p", {
  duration: 1,
  x: -100,
  opacity: 0,
  delay: 0.7,
  ease: "power2.out"
});

gsap.from("#cta", {
  duration: 1,
  scale: 0.5,
  opacity: 0,
  delay: 0.9,
  ease: "back.out(1.7)"
});

// Scroll-triggered animation for sections
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});
