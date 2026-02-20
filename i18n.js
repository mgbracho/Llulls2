(function () {
  'use strict';

  var STORAGE_KEY = 'llulls_lang';

  var translations = {
    en: {
      promo_banner: 'FREE shipping in Europe on orders over €100 — Spain orders over €60',
      nav_greyhound: 'Greyhound ▼',
      nav_whippet: 'Whippet ▼',
      nav_accesorios: 'Accesorios ▼',
      nav_sizes_guide: 'Sizes guide',
      nav_contact: 'Contact',
      nav_home: 'Home',
      nav_shop: 'Shop',
      nav_sleeveless: 'Sleeveless Shirts',
      nav_long_sleeve: 'Long Sleeve Shirts',
      nav_sweatshirts: 'Sweatshirts',
      nav_raincoats: 'Raincoats',
      nav_fleece: 'Fleece',
      nav_all: 'All',
      nav_cuellos: 'Cuellos / Buffs',
      hero_title: 'Colorful Clothes for Greyhounds and Whippets',
      hero_view_store: 'View Store',
      view_all: 'View all',
      section_whippet_title: 'New Whippet Clothing Collection',
      section_whippet_subtitle: 'We present the new collection of clothing for whippets.',
      snoods_title: 'Snoods',
      snoods_text: 'These snoods are the perfect accessory to add style and color to your greyhound. Made with **jersey knit fabric**, soft, stretchy, and very comfortable.',
      snoods_cta: 'Discover them',
      about_lead: 'We specialize in dog clothing for sighthounds, combining style, comfort, and a perfect fit for their slender bodies. Discover our sweatshirts, t-shirts, and pajamas designed to protect their sensitive skin all year round.',
      about_title: 'Handcrafted design for unique greyhounds',
      about_text: "Handmade from the pattern to the final stitch. Our designs are created to meet their standard. That's why we sew with intention and with emotion.",
      footer_quick_links: 'Quick Links',
      footer_useful: 'Useful information',
      footer_contact: 'Contact',
      footer_greyhound_clothes: 'Greyhound Clothes',
      footer_greyhound_sleeveless: 'Greyhound Sleeveless Shirts',
      footer_greyhound_long: 'Greyhound Long Sleeve Shirts',
      footer_whippet_clothes: 'Whippet Clothes',
      footer_whippet_fleece: 'Whippet Fleece',
      footer_sizes: 'Sizes guide',
      footer_shipping: 'Shipping & returns',
      footer_about: 'About us',
      footer_faq: 'FAQ',
      footer_privacy: 'Privacy policy',
      footer_terms: 'Terms of service',
      footer_shipping_policy: 'Shipping policy',
      copyright: "© 2026 Llull's. Handmade with care.",
      cart_title: 'Your Cart',
      cart_empty: 'Your cart is empty.',
      cart_total: 'Total',
      product_back: 'Back',
      product_size: 'Size',
      product_add_to_cart: 'Add to Cart',
      product_not_found: 'Product not found.',
      product_back_to_shop: 'Back to shop',
      meta_title_home: "Llull's | Dog Clothing for Greyhounds & Whippets",
      meta_title_product: "Product | Llull's",
      size_label: 'Size',
      size_guide_link: 'Size Guide',
      size_guide_title: 'Greyhound Size Guide',
      size_guide_size: 'Size',
      size_guide_chest: 'Chest (cm)',
      size_guide_back: 'Back (cm)',
      size_guide_small: 'SMALL',
      size_guide_medium: 'MEDIUM',
      size_guide_large: 'LARGE',
      size_guide_how_title: 'How to measure',
      size_guide_how_text: 'Measure your greyhound with a soft tape measure. **Chest**: wrap the tape around the widest part of the chest, just behind the front legs. **Back**: measure from the base of the neck (where the collar sits) along the spine to the base of the tail. Keep the tape snug but not tight. Compare your measurements with the table above to find the best fit.',
      size_guide_notice: 'If your dog\'s measurements fall between two sizes, choose the larger size for a more comfortable fit.',
      meta_title_size_guide: "Size Guide | Llull's",
      'product_fleece-cielo_name': 'Fleece Cielo - Greyhound',
      'product_fleece-cielo_description': 'Full-body fleece with ergonomic fit for deep chests. Soft, warm, and perfect for cooler days. Features our signature rainbow pattern in comfortable, breathable fabric.',
      'product_fleece-confeti-blanco_name': 'Fleece Confeti Blanco - Greyhound',
      'product_fleece-confeti-blanco_description': 'Full-body fleece in white with a playful confetti pattern. Handmade, cozy, and thermal—ideal for greyhounds who feel the cold.',
      'product_fleece-blue_name': 'Fleece Blue - Greyhound',
      'product_fleece-blue_description': 'Classic blue fleece with red trim details. Ergonomic cut for the greyhound body—comfortable and warm for year-round layering.',
      'product_long-sleeve-domingo_name': 'Long-Sleeve Shirt Domingo - Greyhound',
      'product_long-sleeve-domingo_description': 'Navy and white striped long-sleeve shirt with ergonomic fit. Lightweight and perfect for mild weather or layering under a coat.',
      'product_raincoat-nimbus_name': 'Raincoat Nimbus - Greyhound',
      'product_raincoat-nimbus_description': 'Water-resistant raincoat in blue, green, and yellow stripes. Keeps your greyhound dry and visible on rainy walks.',
      'product_raincoat-iris_name': 'Raincoat Iris - Greyhound',
      'product_raincoat-iris_description': 'Bold rainbow-striped raincoat with hood. Waterproof and designed for the greyhound silhouette—stylish and practical.',
      'product_sleeveless-kawaii_name': 'Sleeveless Shirt Kawaii - Greyhound',
      'product_sleeveless-kawaii_description': 'Fun sleeveless shirt in a cute print. Light and breathable for warmer days—easy to put on and comfortable for all-day wear.',
      'product_sleeveless-flower-power_name': 'Sleeveless Shirt Flower Power - Greyhound',
      'product_sleeveless-flower-power_description': 'Vibrant flower-print sleeveless shirt. Soft fabric with a flattering fit for the greyhound chest and waist.',
      'product_sleeveless-pink-latte_name': 'Sleeveless Shirt Pink Latte - Greyhound',
      'product_sleeveless-pink-latte_description': 'Soft pink sleeveless shirt with a subtle ribbed texture. A timeless piece that pairs with any outfit or season.',
      'product_long-sleeve-lilax-whippet_name': 'Long-Sleeve Shirt Lilax - Whippet',
      'product_long-sleeve-lilax-whippet_description': 'Elegant long-sleeve shirt for whippets. Designed for their slender build with a comfortable, non-restrictive fit.',
      'product_long-sleeve-celeste-whippet_name': 'Long-Sleeve Shirt Celeste - Whippet',
      'product_long-sleeve-celeste-whippet_description': 'Sky-blue long-sleeve shirt tailored for whippets. Lightweight and perfect for spring and autumn walks.',
      'product_fleece-white-confetti-whippet_name': 'Fleece White Confetti - Whippet',
      'product_fleece-white-confetti-whippet_description': 'White fleece with confetti pattern, made for whippets. Full-body coverage with a snug, comfortable fit.',
    },
    es: {
      promo_banner: 'Envío gratis en Europa en pedidos de más de €100 — España pedidos de más de €60',
      nav_greyhound: 'Greyhound ▼',
      nav_whippet: 'Whippet ▼',
      nav_accesorios: 'Accesorios ▼',
      nav_sizes_guide: 'Guía de tallas',
      nav_contact: 'Contacto',
      nav_home: 'Inicio',
      nav_shop: 'Tienda',
      nav_sleeveless: 'Camisetas sin mangas',
      nav_long_sleeve: 'Camisetas manga larga',
      nav_sweatshirts: 'Sudadera',
      nav_raincoats: 'Chubasqueros',
      nav_fleece: 'Polar',
      nav_all: 'Todos',
      nav_cuellos: 'Cuellos / Buffs',
      hero_title: 'Ropa de colores para galgos y whippets',
      hero_view_store: 'Ver tienda',
      view_all: 'Ver todo',
      section_whippet_title: 'Nueva colección de ropa para whippets',
      section_whippet_subtitle: 'Presentamos la nueva colección de ropa para whippets.',
      snoods_title: 'Cuellos',
      snoods_text: 'Estos cuellos son el complemento perfecto para dar estilo y color a tu galgo. Con **tejido de punto**, suaves, elásticos y muy cómodos.',
      snoods_cta: 'Descubrirlos',
      about_lead: 'Nos especializamos en ropa para lebreles, combinando estilo, confort y un ajuste perfecto para su cuerpo esbelto. Descubre nuestras sudaderas, camisetas y pijamas para proteger su piel sensible todo el año.',
      about_title: 'Diseño artesanal para galgos únicos',
      about_text: 'Hecho a mano, desde el patrón hasta la última puntada. Nuestros diseños están creados a su medida. Por eso cosemos con intención y con emoción.',
      footer_quick_links: 'Enlaces rápidos',
      footer_useful: 'Información útil',
      footer_contact: 'Contacto',
      footer_greyhound_clothes: 'Ropa para galgos',
      footer_greyhound_sleeveless: 'Camisetas sin mangas galgo',
      footer_greyhound_long: 'Camisetas manga larga galgo',
      footer_whippet_clothes: 'Ropa para whippets',
      footer_whippet_fleece: 'Polar whippet',
      footer_sizes: 'Guía de tallas',
      footer_shipping: 'Envíos y devoluciones',
      footer_about: 'Sobre nosotros',
      footer_faq: 'Preguntas frecuentes',
      footer_privacy: 'Política de privacidad',
      footer_terms: 'Términos de uso',
      footer_shipping_policy: 'Política de envíos',
      copyright: "© 2026 Llull's. Hecho con cuidado.",
      cart_title: 'Tu carrito',
      cart_empty: 'Tu carrito está vacío.',
      cart_total: 'Total',
      product_back: 'Volver',
      product_size: 'Talla',
      product_add_to_cart: 'Añadir al carrito',
      product_not_found: 'Producto no encontrado.',
      product_back_to_shop: 'Volver a la tienda',
      meta_title_home: "Llull's | Ropa para galgos y whippets",
      meta_title_product: "Producto | Llull's",
      size_label: 'Talla',
      size_guide_link: 'Guía de tallas',
      size_guide_title: 'Guía de tallas para galgos',
      size_guide_size: 'Talla',
      size_guide_chest: 'Pecho (cm)',
      size_guide_back: 'Lomo (cm)',
      size_guide_small: 'PEQUEÑA',
      size_guide_medium: 'MEDIANA',
      size_guide_large: 'GRANDE',
      size_guide_how_title: 'Cómo medir',
      size_guide_how_text: 'Mide a tu galgo con una cinta métrica flexible. **Pecho**: rodea la cinta por la parte más ancha del pecho, justo detrás de las patas delanteras. **Lomo**: mide desde la base del cuello (donde va el collar) a lo largo del lomo hasta la base de la cola. Mantén la cinta ajustada pero no apretada. Compara tus medidas con la tabla para encontrar la talla adecuada.',
      size_guide_notice: 'Si las medidas de tu perro están entre dos tallas, elige la talla más grande para un mejor ajuste.',
      meta_title_size_guide: "Guía de tallas | Llull's",
      'product_fleece-cielo_name': 'Polar Cielo - Galgo',
      'product_fleece-cielo_description': 'Polar de cuerpo entero con ajuste ergonómico para pecho profundo. Suave, cálido e ideal para días fríos. Con nuestro estampado arcoíris en tejido cómodo y transpirable.',
      'product_fleece-confeti-blanco_name': 'Polar Confeti Blanco - Galgo',
      'product_fleece-confeti-blanco_description': 'Polar blanco de cuerpo entero con estampado de confeti. Artesanal, acogedor y térmico, ideal para galgos que pasan frío.',
      'product_fleece-blue_name': 'Polar Azul - Galgo',
      'product_fleece-blue_description': 'Polar azul clásico con detalles en rojo. Corte ergonómico para el cuerpo del galgo, cómodo y cálido para usar en capas todo el año.',
      'product_long-sleeve-domingo_name': 'Camiseta manga larga Domingo - Galgo',
      'product_long-sleeve-domingo_description': 'Camiseta de rayas azul marino y blanco con ajuste ergonómico. Ligera y perfecta para tiempo suave o bajo el abrigo.',
      'product_raincoat-nimbus_name': 'Chubasquero Nimbus - Galgo',
      'product_raincoat-nimbus_description': 'Chubasquero resistente al agua en rayas azul, verde y amarillo. Mantiene a tu galgo seco y visible en los paseos bajo la lluvia.',
      'product_raincoat-iris_name': 'Chubasquero Iris - Galgo',
      'product_raincoat-iris_description': 'Chubasquero con capucha en rayas arcoíris. Impermeable y diseñado para la silueta del galgo: elegante y práctico.',
      'product_sleeveless-kawaii_name': 'Camiseta sin mangas Kawaii - Galgo',
      'product_sleeveless-kawaii_description': 'Camiseta sin mangas con estampado divertido. Ligera y transpirable para días cálidos, fácil de poner y cómoda todo el día.',
      'product_sleeveless-flower-power_name': 'Camiseta sin mangas Flower Power - Galgo',
      'product_sleeveless-flower-power_description': 'Camiseta sin mangas con estampado de flores. Tejido suave y ajuste favorecedor para el pecho y cintura del galgo.',
      'product_sleeveless-pink-latte_name': 'Camiseta sin mangas Pink Latte - Galgo',
      'product_sleeveless-pink-latte_description': 'Camiseta sin mangas rosa suave con textura acanalada. Un básico que combina con cualquier look o temporada.',
      'product_long-sleeve-lilax-whippet_name': 'Camiseta manga larga Lilax - Whippet',
      'product_long-sleeve-lilax-whippet_description': 'Camiseta de manga larga para whippets. Diseñada para su cuerpo esbelto, cómoda y sin restricciones.',
      'product_long-sleeve-celeste-whippet_name': 'Camiseta manga larga Celeste - Whippet',
      'product_long-sleeve-celeste-whippet_description': 'Camiseta celeste de manga larga para whippets. Ligera y perfecta para paseos en primavera y otoño.',
      'product_fleece-white-confetti-whippet_name': 'Polar Confeti Blanco - Whippet',
      'product_fleece-white-confetti-whippet_description': 'Polar blanco con estampado confeti para whippets. Cobertura de cuerpo entero con ajuste cómodo.',
    },
  };

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || null;
    } catch (e) {
      return null;
    }
  }

  function getBrowserLang() {
    var n = navigator;
    var lang = (n.language || n.userLanguage || '').toLowerCase();
    if (lang.indexOf('es') === 0) return 'es';
    return 'en';
  }

  function getLang() {
    return getStoredLang() || getBrowserLang();
  }

  function setStoredLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function t(key) {
    var lang = currentLang;
    var text = (translations[lang] && translations[lang][key]) || (translations.en && translations.en[key]) || key;
    return text;
  }

  function applyLanguage(lang) {
    currentLang = lang;
    setStoredLang(lang);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = t(key);
      if (value !== key) {
        if (el.getAttribute('data-i18n-html')) {
          el.innerHTML = value.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        } else {
          el.textContent = value;
        }
      }
    });

    document.documentElement.lang = lang === 'es' ? 'es' : 'en';
    var href = window.location.href;
    if (href.indexOf('product.html') !== -1) {
      /* product page title set by product.js */
    } else if (href.indexOf('guia-tallas') !== -1) {
      document.title = t('meta_title_size_guide');
    } else {
      document.title = t('meta_title_home');
    }

    try {
      window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
    } catch (e) {}
  }

  function updateSelector() {
    document.querySelectorAll('.lang-option').forEach(function (btn) {
      var opt = btn.getAttribute('data-lang');
      btn.classList.toggle('is-active', opt === currentLang);
      btn.setAttribute('aria-pressed', opt === currentLang);
    });
  }

  var currentLang = getLang();

  function init() {
    applyLanguage(currentLang);

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var lang = this.getAttribute('data-lang');
        if (lang && (lang === 'es' || lang === 'en')) {
          applyLanguage(lang);
          updateSelector();
        }
      });
    });

    updateSelector();
  }

  window.LlullsI18n = {
    getLang: function () { return currentLang; },
    t: t,
    setLang: function (lang) {
      if (lang === 'es' || lang === 'en') {
        applyLanguage(lang);
        updateSelector();
      }
    },
    applyLanguage: applyLanguage,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
