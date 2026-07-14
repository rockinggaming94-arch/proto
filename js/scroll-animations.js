(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && window.Lenis) { const lenis = new Lenis({ duration: 1.05, smoothWheel: true }); const raf = time => { lenis.raf(time); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  const reveals = document.querySelectorAll('.reveal'); const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold:.12 }); reveals.forEach(el=>observer.observe(el));
  if (!reduced && window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to('.gallery-lane--forward',{xPercent:-20,ease:'none',scrollTrigger:{trigger:'.showreel',scrub:1,start:'top bottom',end:'bottom top'}});
    gsap.fromTo('.gallery-lane--reverse',{xPercent:-20},{xPercent:0,ease:'none',scrollTrigger:{trigger:'.showreel',scrub:1,start:'top bottom',end:'bottom top'}});
    gsap.utils.toArray('.split-text').forEach(el=>gsap.from(el,{y:80,opacity:0,duration:1,scrollTrigger:{trigger:el,start:'top 85%'}}));
    const preview = document.querySelector('.project-preview'); window.addEventListener('pointermove',e=>{ if(preview.classList.contains('is-active')) gsap.to(preview,{x:e.clientX,y:e.clientY,opacity:1,duration:.45,ease:'power3.out'}); else gsap.to(preview,{opacity:0,duration:.2}); });
  }
})();
