(function () {
  'use strict';

  var STORAGE_KEY = 'llulls_cart';

  function getCart() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function setCart(items) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    refreshCartUI();
  }

  function getTotalQuantity() {
    return getCart().reduce(function (sum, item) { return sum + (item.quantity || 1); }, 0);
  }

  function addItem(productId, name, size, price, image) {
    var cart = getCart();
    var priceNum = typeof price === 'string' ? price.replace(',', '.') : price;
    var existing = cart.find(function (item) {
      return item.productId === productId && item.size === size;
    });
    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1;
    } else {
      cart.push({
        productId: productId,
        name: name,
        size: size,
        price: priceNum,
        image: image || '',
        quantity: 1,
      });
    }
    setCart(cart);
  }

  function removeItem(index) {
    var cart = getCart();
    cart.splice(index, 1);
    setCart(cart);
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function renderPanel() {
    var cart = getCart();
    var panel = document.getElementById('cart-panel-body');
    var emptyEl = document.getElementById('cart-empty');
    var listEl = document.getElementById('cart-list');
    var totalEl = document.getElementById('cart-total');
    if (!panel) return;

    if (cart.length === 0) {
      if (emptyEl) emptyEl.hidden = false;
      if (listEl) listEl.hidden = true;
      if (totalEl) totalEl.hidden = true;
      return;
    }

    if (emptyEl) emptyEl.hidden = true;
    if (listEl) listEl.hidden = false;
    if (totalEl) totalEl.hidden = false;

    var t = (window.LlullsI18n && window.LlullsI18n.t) ? window.LlullsI18n.t.bind(window.LlullsI18n) : function (k) { return k; };
    var sizeLabel = t('size_label');
    var total = 0;
    listEl.innerHTML = cart.map(function (item, index) {
      var qty = item.quantity || 1;
      var price = parseFloat(item.price) || 0;
      var lineTotal = price * qty;
      total += lineTotal;
      var lineStr = (lineTotal).toFixed(2).replace('.', ',');
      var displayName = (window.LlullsI18n && item.productId) ? t('product_' + item.productId + '_name') : item.name;
      if (!displayName) displayName = item.name;
      return (
        '<li class="cart-item" data-index="' + index + '">' +
          '<div class="cart-item__image">' +
            (item.image ? '<img src="' + escapeHtml(item.image) + '" alt="" />' : '') +
          '</div>' +
          '<div class="cart-item__details">' +
            '<span class="cart-item__name">' + escapeHtml(displayName) + '</span>' +
            '<span class="cart-item__meta">' + escapeHtml(sizeLabel) + ' ' + escapeHtml(item.size) + (qty > 1 ? ' · ' + qty + '×' : '') + '</span>' +
            '<span class="cart-item__price">€' + lineStr + ' EUR</span>' +
          '</div>' +
          '<button type="button" class="cart-item__remove" aria-label="Remove from cart" data-index="' + index + '">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
          '</button>' +
        '</li>'
      );
    }).join('');

    var totalStr = total.toFixed(2).replace('.', ',');
    totalEl.textContent = (t('cart_total') || 'Total') + ': €' + totalStr + ' EUR';

    listEl.querySelectorAll('.cart-item__remove').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var i = parseInt(btn.getAttribute('data-index'), 10);
        removeItem(i);
      });
    });
  }

  function refreshCartUI() {
    var countEl = document.getElementById('cart-count');
    if (countEl) {
      var n = getTotalQuantity();
      countEl.textContent = n;
      countEl.hidden = n === 0;
    }
    renderPanel();
  }

  function openPanel() {
    var panel = document.getElementById('cart-panel');
    var overlay = document.getElementById('cart-overlay');
    if (panel) { panel.classList.add('is-open'); panel.setAttribute('aria-hidden', 'false'); }
    if (overlay) { overlay.classList.add('is-open'); overlay.setAttribute('aria-hidden', 'false'); }
    document.body.classList.add('cart-open');
  }

  function closePanel() {
    var panel = document.getElementById('cart-panel');
    var overlay = document.getElementById('cart-overlay');
    if (panel) { panel.classList.remove('is-open'); panel.setAttribute('aria-hidden', 'true'); }
    if (overlay) { overlay.classList.remove('is-open'); overlay.setAttribute('aria-hidden', 'true'); }
    document.body.classList.remove('cart-open');
  }

  function init() {
    window.addEventListener('languagechange', function (e) {
      if (e.detail && e.detail.lang) refreshCartUI();
    });
    var trigger = document.querySelector('.cart-trigger');
    var overlay = document.getElementById('cart-overlay');
    if (trigger) {
      trigger.addEventListener('click', function (e) {
        e.preventDefault();
        openPanel();
      });
    }
    if (overlay) {
      overlay.addEventListener('click', closePanel);
    }
    document.getElementById('cart-close')?.addEventListener('click', closePanel);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePanel();
    });
    refreshCartUI();
  }

  window.LlullsCart = {
    getCart: getCart,
    addItem: addItem,
    removeItem: removeItem,
    getTotalQuantity: getTotalQuantity,
    refreshCartUI: refreshCartUI,
    openPanel: openPanel,
    closePanel: closePanel,
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
