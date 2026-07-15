(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer:fine)').matches;
  const site = document.querySelector('.site');
  const loader = document.querySelector('.loader');
  const loaderWord = document.querySelector('.loader__word');

  if (reduced) { site.classList.add('is-ready'); loader?.remove(); }
  else {
    const words = ['Hello.', 'नमस्कार.', 'Welcome.', 'Abulfaiz.'];
    let index = 0;
    const cycle = setInterval(() => {
      index += 1; loaderWord.textContent = words[index];
      if (index === words.length - 1) {
        clearInterval(cycle);
        setTimeout(() => { site.classList.add('is-ready'); loader.classList.add('is-done'); setTimeout(() => loader.remove(), 900); }, 350);
      }
    }, 360);
  }

  const projectList = document.querySelector('#project-list');
  const preview = document.querySelector('.project-preview');
  const previewImage = preview.querySelector('img');
  window.PROJECTS.forEach((project) => {
    const link = document.createElement('a');
    link.className = 'project'; link.href = project.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${project.title}, ${project.type}, opens in a new tab`);
    link.innerHTML = `<span class="project__number">${project.n} / ${project.year}</span><span class="project__title">${project.title}</span><span class="project__meta">${project.type}<br>${project.desc}</span><span class="project__arrow" aria-hidden="true">↗</span><span class="project__mobile-image"><img src="${project.image}" loading="lazy" width="960" height="600" alt="${project.title} website preview"></span>`;
    if (finePointer && !reduced) {
      link.addEventListener('pointerenter', () => { previewImage.src = project.image; preview.classList.add('is-active'); document.body.classList.add('viewing-project'); });
      link.addEventListener('pointerleave', () => { preview.classList.remove('is-active'); document.body.classList.remove('viewing-project'); });
    }
    projectList.appendChild(link);
  });

  const card = project => `<a class="gallery-card" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${project.title} website"><figure><div class="gallery-card__image"><img src="${project.image}" loading="lazy" width="960" height="600" alt="Screenshot of ${project.title}"></div><figcaption><span class="gallery-card__title">${project.title}</span><span>${project.type} — ${project.year}</span></figcaption></figure></a>`;
  const forward = window.PROJECTS.map(card).join('');
  const reverse = [...window.PROJECTS].reverse().map(card).join('');
  document.querySelector('#gallery-forward').innerHTML = forward + forward;
  document.querySelector('#gallery-reverse').innerHTML = reverse + reverse;

  const menu = document.querySelector('.menu-toggle');
  const menuLabel = menu.querySelector('.menu-toggle__label');
  const nav = document.querySelector('.nav');
  const setMenu = open => { menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); menuLabel.textContent = open ? 'Close' : 'Menu'; document.body.style.overflow = open ? 'hidden' : ''; };
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });

  const clock = document.querySelector('#clock');
  const updateClock = () => { clock.textContent = `IST ${new Intl.DateTimeFormat('en-IN', { timeZone:'Asia/Kolkata', hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:true }).format(new Date())}`; };
  updateClock(); setInterval(updateClock, 1000);

  if (finePointer && !reduced) {
    const cursor = document.querySelector('.cursor');
    let x = -30, y = -30, px = -30, py = -30, frame = 0;
    const renderPointer = () => {
      px += (x - px) * .22; py += (y - py) * .22;
      cursor.style.transform = `translate3d(${px}px,${py}px,0) translate(-50%,-50%)`;
      if (preview.classList.contains('is-active')) preview.style.transform = `translate3d(${px + 36}px,${py - 22}px,0) translate(-50%,-50%) rotate(-2deg)`;
      if (Math.abs(x - px) > .1 || Math.abs(y - py) > .1) frame = requestAnimationFrame(renderPointer);
      else frame = 0;
    };
    addEventListener('pointermove', event => {
      x = event.clientX; y = event.clientY;
      if (!frame) frame = requestAnimationFrame(renderPointer);
    }, { passive:true });
  }
})();
