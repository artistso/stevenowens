(() => {
  const root = document.documentElement;
  const body = document.body;
  const progressBar = document.querySelector('#reading-progress-bar');
  const decrease = document.querySelector('#font-decrease');
  const increase = document.querySelector('#font-increase');
  const themeToggle = document.querySelector('#theme-toggle');
  const printButton = document.querySelector('#print-chapter');
  const themes = ['dark', 'light', 'sepia'];
  const sizes = ['small', 'medium', 'large', 'x-large'];

  const savedTheme = localStorage.getItem('steven-reader-theme');
  const savedSize = localStorage.getItem('steven-reader-size');
  root.dataset.theme = themes.includes(savedTheme) ? savedTheme : 'dark';
  body.dataset.readerSize = sizes.includes(savedSize) ? savedSize : 'medium';

  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
    progressBar.style.width = `${progress}%`;
  }

  function changeSize(direction) {
    const current = sizes.indexOf(body.dataset.readerSize || 'medium');
    const next = Math.min(sizes.length - 1, Math.max(0, current + direction));
    body.dataset.readerSize = sizes[next];
    localStorage.setItem('steven-reader-size', sizes[next]);
  }

  decrease?.addEventListener('click', () => changeSize(-1));
  increase?.addEventListener('click', () => changeSize(1));
  themeToggle?.addEventListener('click', () => {
    const current = themes.indexOf(root.dataset.theme || 'dark');
    const next = themes[(current + 1) % themes.length];
    root.dataset.theme = next;
    localStorage.setItem('steven-reader-theme', next);
    themeToggle.textContent = next.charAt(0).toUpperCase() + next.slice(1);
  });
  printButton?.addEventListener('click', () => window.print());
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
