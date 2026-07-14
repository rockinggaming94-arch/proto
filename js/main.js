(() => {
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const site = document.querySelector('.site');
  const loader = document.querySelector('.loader');
  const loaderWord = document.querySelector('.loader__word');
  const words = ['Hello.', 'नमस्कार.', 'Welcome.', 'Proofy Studio.'];
  if (reduceMotion) { site.classList.add('is-ready'); loader.remove(); }
  else {
    let i = 0;
    const cycle = setInterval(() => { i += 1; loaderWord.textContent = words[i]; if (i === words.length - 1) { clearInterval(cycle); setTimeout(() => { site.classList.add('is-ready'); loader.classList.add('is-done'); setTimeout(() => loader.remove(), 1100); }, 500); } }, 500);
  }

  const projectList = document.querySelector('#project-list');
  const preview = document.querySelector('.project-preview');
  const previewImage = preview.querySelector('img');
  window.PROJECTS.forEach((project) => {
    const link = document.createElement('a');
    link.className = 'project'; link.href = project.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${project.title}, ${project.type}, opens in a new tab`);
    link.innerHTML = `<span class="project__number">${project.n}</span><span class="project__title">${project.title}</span><span class="project__meta">${project.type}<br>${project.desc}</span><span class="project__arrow" aria-hidden="true">↗</span><span class="project__mobile-image"><img src="${project.image}" loading="lazy" alt="${project.title} project preview"></span>`;
    if (matchMedia('(pointer:fine)').matches) {
      link.addEventListener('mouseenter', () => { previewImage.src = project.image; preview.classList.add('is-active'); });
      link.addEventListener('mouseleave', () => preview.classList.remove('is-active'));
    }
    projectList.appendChild(link);
  });

  const images = window.PROJECTS.map(project => `<figure class="gallery-card"><img src="${project.image}" loading="lazy" alt="Screenshot of ${project.title}"></figure>`).join('');
  document.querySelector('#gallery-forward').innerHTML = images + images;
  document.querySelector('#gallery-reverse').innerHTML = [...window.PROJECTS].reverse().map(project => `<figure class="gallery-card"><img src="${project.image}" loading="lazy" alt="Screenshot of ${project.title}"></figure>`).join('') + images;

  const menu = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav');
  menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') === 'true'; menu.setAttribute('aria-expanded', String(!open)); nav.classList.toggle('is-open', !open); });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('is-open'); menu.setAttribute('aria-expanded', 'false'); }));

  const clock = document.querySelector('#clock');
  const updateClock = () => { clock.textContent = `IST ${new Intl.DateTimeFormat('en-IN', { timeZone:'Asia/Kolkata', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true }).format(new Date())}`; };
  updateClock(); setInterval(updateClock, 1000);

  if (matchMedia('(pointer:fine)').matches) { const cursor = document.querySelector('.cursor'); window.addEventListener('pointermove', e => { cursor.style.left = `${e.clientX}px`; cursor.style.top = `${e.clientY}px`; }); }
})();
