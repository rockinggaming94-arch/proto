(() => {
  if (!matchMedia('(pointer:fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.magnetic').forEach(element => {
    let frame;
    element.addEventListener('pointermove', event => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = (event.clientX - rect.left - rect.width / 2) * .12;
        const y = (event.clientY - rect.top - rect.height / 2) * .12;
        element.style.transform = `translate3d(${x}px,${y}px,0)`;
      });
    }, { passive:true });
    element.addEventListener('pointerleave', () => {
      cancelAnimationFrame(frame); element.style.transition = 'transform .45s cubic-bezier(.16,1,.3,1)'; element.style.transform = 'translate3d(0,0,0)';
      setTimeout(() => { element.style.transition = ''; }, 450);
    });
  });
})();
