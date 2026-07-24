document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1) DATOS DE PROYECTOS
     -> Sustituye "url" por el enlace real de cada proyecto
        (repositorio de GitHub, demo desplegada, etc.)
  ========================================================= */
  const proyectos = [
    {
      nombre: 'PvZ Wiki',
      descripcion: 'Wiki de PvZ, construida como una SPA en Angular 18, sin backend ni base de datos (usando solo JSON locales).',
      tags: ['Angular'],
      url: 'https://pvzbfn.com'
    },
    {
      nombre: 'SkylandersAPI',
      descripcion: 'Aplicación web que consume una API en tiempo real para buscar Skylanders y filtrar personajes.',
      tags: ['JavaScript', 'API REST'],
      url: 'https://programoreno.github.io/SkylandersAPI/'
    },
    {
      nombre: 'DEMO PsinergiaNR',
      descripcion: 'Es la versión de prueba de un portfolio web diseñado para una psicóloga, mostrando su enfoque terapéutico, servicios y contacto.',
      tags: ['React'],
      url: 'https://psinergianr.vercel.app/'
    },
    {
      nombre: 'SK Akinator',
      descripcion: 'Pagina para poner a prueba tu conocimineto sobre el primero juego de Skylander usando solo JavaScritp y Css',
      tags: ['JavaScript', 'CSS'],
      url: 'https://programoreno.github.io/skaquinator/'
    }
  ];

  /* Degradados discretos para los "thumbnails", en tonos de la propia paleta */
  const degradados = [
    'linear-gradient(135deg, #123821 0%, #3FBE7C 100%)',
    'linear-gradient(135deg, #0F2E1C 0%, #6FD9A3 100%)',
    'linear-gradient(135deg, #16412A 0%, #2FA06B 100%)',
    'linear-gradient(135deg, #0C2717 0%, #58C88E 100%)',
    'linear-gradient(135deg, #123821 0%, #7FE0AC 100%)',
    'linear-gradient(135deg, #103322 0%, #45C283 100%)'
  ];

  const iconoEnlace = `<svg viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7M9 7h8v8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = proyectos.map((p, i) => `
    <a class="project-card" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir el proyecto ${p.nombre}">
      <div class="project-thumb" style="background:${degradados[i % degradados.length]}">
        <span class="project-thumb-mark">${iconoEnlace}</span>
      </div>
      <div class="project-body">
        <div class="project-top">
          <h3>${p.nombre}</h3>
          <span class="project-arrow">↗</span>
        </div>
        <p>${p.descripcion}</p>
        <ul class="project-tags">${p.tags.map(t => `<li>${t}</li>`).join('')}</ul>
      </div>
    </a>
  `).join('');

  /* =========================================================
     2) MENÚ MÓVIL
  ========================================================= */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const abierto = navLinks.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(abierto));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* =========================================================
     3) REVELADO SUAVE AL HACER SCROLL
  ========================================================= */
  const revelables = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revelables.forEach(el => observer.observe(el));

  /* =========================================================
     4) AÑO EN EL FOOTER
  ========================================================= */
  document.getElementById('year').textContent = new Date().getFullYear();

});
