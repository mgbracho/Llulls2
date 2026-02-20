(function () {
  'use strict';

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var navMain = document.querySelector('.nav-main');
  var header = document.querySelector('.header');

  if (menuToggle && navMain) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navMain.classList.contains('is-open');
      navMain.classList.toggle('is-open', !isOpen);
      menuToggle.setAttribute('aria-expanded', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });
  }

  // Mobile: toggle submenus when clicking nav items
  document.querySelectorAll('.nav-main .dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        var dropdown = this.closest('.dropdown');
        if (dropdown && dropdown.querySelector('.dropdown-menu')) {
          e.preventDefault();
          dropdown.classList.toggle('is-open');
        }
      }
    });
  });

  // Optional: close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.dropdown') && !e.target.closest('.header-utils')) {
      document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.classList.remove('is-visible');
      });
    }
  });

  // Smooth scroll for "View Store"
  document.querySelectorAll('a[href="#products"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.getElementById('products');
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
