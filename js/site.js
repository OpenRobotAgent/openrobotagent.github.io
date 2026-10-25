/* Chinese-first bilingual navigation, adapted from OpenResearchAssets.
   No dependencies or background requests. */
(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.lang-toggle');
  const menu = document.querySelector('.menu-toggle');
  const links = document.querySelector('#site-nav');
  const saved = (() => { try { return localStorage.getItem('ora-site-language'); } catch { return null; } })();
  const fromUrl = new URLSearchParams(location.search).get('lang');
  let lang = ['zh', 'en'].includes(fromUrl) ? fromUrl : (['zh', 'en'].includes(saved) ? saved : 'zh');
  const applyLanguage = () => {
    root.classList.toggle('lang-en', lang === 'en');
    root.classList.toggle('lang-zh', lang === 'zh');
    root.lang = lang === 'en' ? 'en' : 'zh-CN';
    if (toggle) {
      toggle.textContent = lang === 'zh' ? 'EN' : '中文';
      toggle.setAttribute('aria-label', lang === 'zh' ? 'Switch to English' : '切换为中文');
    }
    document.title = lang === 'zh' ? 'Open Robot Agent — 从通用智能到物理智能' : 'Open Robot Agent — Intelligence, beyond the screen.';
  };
  toggle?.addEventListener('click', () => {
    lang = lang === 'zh' ? 'en' : 'zh';
    try { localStorage.setItem('ora-site-language', lang); } catch {}
    applyLanguage();
  });
  const setMenu = open => {
    if (!menu || !links) return;
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? (lang === 'zh' ? '关闭导航' : 'Close navigation') : (lang === 'zh' ? '打开导航' : 'Open navigation'));
    links.classList.toggle('is-open', open);
  };
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  links?.addEventListener('click', event => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') setMenu(false); });
  document.addEventListener('click', event => { if (event.target.closest('.nav-shell') === null) setMenu(false); });
  window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) setMenu(false); });
  const navLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
        }
      }
    }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
    document.querySelectorAll('section[id]').forEach(section => navObserver.observe(section));
  }
  applyLanguage();
})();
