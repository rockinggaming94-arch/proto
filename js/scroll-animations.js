(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const root = document.documentElement;
  const animated = document.querySelectorAll('.reveal, .split-text, .image-reveal, .project');
  const sections = document.querySelectorAll('section');
  const header = document.querySelector('.header');
  const showreel = document.querySelector('.showreel');
  const lanes = [...document.querySelectorAll('.gallery-lane')];

  animated.forEach((element, index) => element.style.setProperty('--delay', `${Math.min(index % 4, 3) * 55}ms`));

  if (reduced) {
    animated.forEach(element => element.classList.add('is-visible'));
    sections.forEach(section => section.classList.add('is-inview'));
    return;
  }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  animated.forEach(element => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-inview', entry.isIntersecting));
  }, { rootMargin: '-12% 0px -12% 0px', threshold: .05 });
  sections.forEach(section => sectionObserver.observe(section));

  let lastY = scrollY;
  let targetVelocity = 0;
  let velocity = 0;
  let laneA = 0;
  let laneB = 0;
  let lastTime = performance.now();
  let running = true;

  const wrapLane = (value, width) => {
    const half = width / 2;
    if (!half) return value;
    while (value <= -half) value += half;
    while (value > 0) value -= half;
    return value;
  };

  const render = now => {
    const y = scrollY;
    const max = Math.max(document.documentElement.scrollHeight - innerHeight, 1);
    const delta = y - lastY;
    const dt = Math.min((now - lastTime) / 16.67, 2);
    targetVelocity = Math.max(-22, Math.min(22, delta));
    velocity += (targetVelocity - velocity) * .13;
    targetVelocity *= .84;

    root.style.setProperty('--scroll-progress', (y / max).toFixed(4));
    root.style.setProperty('--scroll-velocity', Math.abs(velocity).toFixed(2));
    header?.classList.toggle('is-scrolled', y > innerHeight * .7);

    const heroShift = Math.min(y, innerHeight) * .075;
    root.style.setProperty('--hero-shift', heroShift.toFixed(2));

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > innerHeight) return;
      const progress = (innerHeight - rect.top) / (innerHeight + rect.height);
      section.style.setProperty('--section-progress', progress.toFixed(3));
      section.style.setProperty('--section-shift', ((progress - .5) * 24).toFixed(2));
    });

    const portrait = document.querySelector('.story__portrait');
    if (portrait) {
      const rect = portrait.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < innerHeight) {
        const progress = (innerHeight - rect.top) / (innerHeight + rect.height);
        portrait.style.setProperty('--portrait-zoom', (Math.max(0, Math.min(.045, progress * .045))).toFixed(3));
      }
    }

    const contact = document.querySelector('.contact');
    if (contact) {
      const rect = contact.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0) root.style.setProperty('--contact-shift', ((innerHeight - rect.top) * .035).toFixed(2));
    }

    if (showreel?.classList.contains('is-inview') && lanes.length === 2) {
      const impulse = velocity * .62;
      laneA = wrapLane(laneA - (.42 + Math.max(0, impulse)) * dt, lanes[0].scrollWidth);
      laneB = wrapLane(laneB + (.36 + Math.max(0, -impulse)) * dt, lanes[1].scrollWidth);
      lanes[0].style.setProperty('--lane-x', `${laneA}px`);
      lanes[1].style.setProperty('--lane-x', `${laneB - lanes[1].scrollWidth / 2}px`);
    }

    lastY = y;
    lastTime = now;
    if (running) requestAnimationFrame(render);
  };

  document.addEventListener('visibilitychange', () => {
    running = !document.hidden;
    if (running) {
      lastTime = performance.now();
      requestAnimationFrame(render);
    }
  });

  requestAnimationFrame(render);
})();
