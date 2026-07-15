(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const animated = document.querySelectorAll('.reveal, .split-text, .image-reveal');
  animated.forEach((element, index) => element.style.setProperty('--delay', `${Math.min(index % 4, 3) * 45}ms`));

  if (reduced) { animated.forEach(element => element.classList.add('is-visible')); return; }

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
    });
  }, { rootMargin:'0px 0px -8% 0px', threshold:.08 });
  animated.forEach(element => revealObserver.observe(element));

  const pausable = document.querySelectorAll('.ticker, .showreel');
  const motionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-paused', !entry.isIntersecting));
  }, { rootMargin:'150px' });
  pausable.forEach(element => motionObserver.observe(element));

  if (matchMedia('(pointer:fine) and (min-width: 801px)').matches) {
    const title = document.querySelector('.hero__title');
    let ticking = false;
    const updateHero = () => {
      const offset = Math.min(scrollY, innerHeight) * .075;
      title.style.transform = `translate3d(0,${offset}px,0)`;
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(updateHero); } }, { passive:true });
  }
})();
