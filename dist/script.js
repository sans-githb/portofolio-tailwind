AOS.init();
    window.addEventListener('load', () => {
      setTimeout(() => document.getElementById('loader').classList.add('hidden'), 3000);
    });

    const hamburger = document.getElementById('hamburger');
    const line1 = document.getElementById('line1');
    const line2 = document.getElementById('line2');
    const line3 = document.getElementById('line3');
    const menuMobile = document.getElementById('menuMobile');

    function closeMobile() {
      menuMobile.classList.remove('scale-y-100','opacity-100');
      menuMobile.classList.add('scale-y-0','opacity-0');
      hamburger.setAttribute('aria-expanded','false');
      line1.style.transform = 'translateY(0) rotate(0)';
      line3.style.transform = 'translateY(0) rotate(0)';
      line2.style.opacity = '1';
    }

    function openMobile() {
      menuMobile.classList.remove('scale-y-0','opacity-0');
      menuMobile.classList.add('scale-y-100','opacity-100');
      hamburger.setAttribute('aria-expanded','true');
      line1.style.transform = 'translateY(8px) rotate(45deg)';
      line3.style.transform = 'translateY(-8px) rotate(-45deg)';
      line2.style.opacity = '0';
    }

    hamburger.addEventListener('click', () => {
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      if (expanded) closeMobile(); else openMobile();
    });
    window.addEventListener('scroll', closeMobile);
    document.querySelectorAll('#menuMobile a').forEach(a => a.addEventListener('click', closeMobile));
