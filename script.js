// Seleciona todos os botões de toggle
const toggles = document.querySelectorAll('.book-toggle');

// Adiciona evento de click em cada toggle
toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector('.icon');
    const book = toggle.closest('.book');

    // Verifica se o conteúdo está visível
    const isOpen = content.style.display === 'block';

    // Toggle do conteúdo com transição suave
    if (isOpen) {
      content.style.display = 'none';
      icon.textContent = '+';
      book.classList.remove('book-open');
    } else {
      content.style.display = 'block';
      icon.textContent = '−';
      book.classList.add('book-open');
    }
  });

  // Adiciona suporte para navegação por teclado (acessibilidade)
  toggle.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.click();
    }
  });
});

// Smooth scroll para links âncora (caso adicione no futuro)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Ignora links vazios (#)
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const offsetTop = target.offsetTop - 80; // Ajuste para navbar fixa
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Adiciona classe ao navbar quando usuário faz scroll (opcional)
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Adiciona sombra extra ao fazer scroll
  if (currentScroll > 10) {
    navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
  }

  lastScroll = currentScroll;
});