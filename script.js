(function () {
  const toast = document.getElementById('toast');
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.style.display = 'block';
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => { toast.style.display = 'none'; }, 2600);
  };

  // Copy TG
  const copyBtn = document.getElementById('copyTg');
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('@yanovich');
        showToast('Скопировано: @yanovich');
      } catch {
        showToast('Не удалось скопировать. Ник: @yanovich');
      }
    });
  }

  // Demo form
  const form = document.getElementById('demoForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Форма демо. Напиши в Telegram: @yanovich');
      form.reset();
    });
  }

  // Toast links
  document.querySelectorAll('[data-toast]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      showToast(el.getAttribute('data-toast'));
    });
  });

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = lb?.querySelector('.lightbox__img');
  const lbClose = lb?.querySelector('.lightbox__close');

  const openLb = (src) => {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeLb = () => {
    if (!lb) return;
    lb.setAttribute('aria-hidden', 'true');
    if (lbImg) lbImg.src = '';
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-lightbox]').forEach((btn) => {
    btn.addEventListener('click', () => openLb(btn.getAttribute('data-lightbox')));
  });

  lb?.addEventListener('click', (e) => {
    if (e.target === lb) closeLb();
  });
  lbClose?.addEventListener('click', closeLb);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLb();
  });
})();
