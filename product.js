(function () {
  'use strict';

  function getProductId() {
    var params = new URLSearchParams(window.location.search);
    return params.get('id') || '';
  }

  function findProduct(id) {
    var products = window.LlullsProducts || [];
    return products.find(function (p) { return p.id === id; });
  }

  function getT(key) {
    return (window.LlullsI18n && window.LlullsI18n.t) ? window.LlullsI18n.t(key) : key;
  }

  function renderProduct(product) {
    var name = (window.LlullsI18n && product.id) ? getT('product_' + product.id + '_name') : product.name;
    var desc = (window.LlullsI18n && product.id) ? getT('product_' + product.id + '_description') : product.description;
    if (!name) name = product.name;
    if (!desc) desc = product.description;
    var sizeLabel = getT('product_size');
    var addText = getT('product_add_to_cart');
    return (
      '<div class="product-detail__grid">' +
        '<div class="product-detail__image-wrap">' +
          '<img class="product-detail__image" src="' + product.image + '" alt="' + escapeHtml(name) + '" />' +
        '</div>' +
        '<div class="product-detail__info">' +
          '<h1 class="product-detail__name">' + escapeHtml(name) + '</h1>' +
          '<p class="product-detail__price">€' + product.price + ' EUR</p>' +
          '<p class="product-detail__description">' + escapeHtml(desc) + '</p>' +
          '<div class="product-detail__size">' +
            '<label class="product-detail__size-label">' + escapeHtml(sizeLabel) + '</label>' +
            '<div class="product-detail__size-options">' +
              ['XS', 'S', 'M', 'L', 'XL'].map(function (s) {
                return '<button type="button" class="size-option" data-size="' + s + '">' + s + '</button>';
              }).join('') +
            '</div>' +
          '</div>' +
          '<button type="button" class="btn btn-add-to-cart" id="add-to-cart-btn">' + escapeHtml(addText) + '</button>' +
        '</div>' +
      '</div>'
    );
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  var currentProductId = null;

  function attachProductListeners(contentEl, product) {
    var sizeOptions = contentEl.querySelectorAll('.size-option');
    sizeOptions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        sizeOptions.forEach(function (b) { b.classList.remove('selected'); });
        this.classList.add('selected');
      });
    });
    var addBtn = document.getElementById('add-to-cart-btn');
    if (addBtn && window.LlullsCart) {
      addBtn.addEventListener('click', function () {
        var selected = contentEl.querySelector('.size-option.selected');
        if (!selected) {
          alert(window.LlullsI18n && window.LlullsI18n.getLang() === 'es' ? 'Elige una talla.' : 'Please select a size.');
          return;
        }
        var size = selected.getAttribute('data-size');
        var name = (window.LlullsI18n && product.id) ? getT('product_' + product.id + '_name') : product.name;
        window.LlullsCart.addItem(product.id, name || product.name, size, product.price, product.image);
        window.LlullsCart.openPanel();
      });
    }
  }

  function renderCurrentProduct() {
    if (!currentProductId) return;
    var product = findProduct(currentProductId);
    var contentEl = document.getElementById('product-content');
    var notFoundEl = document.getElementById('product-not-found');
    if (!product || !contentEl) return;
    notFoundEl.hidden = true;
    contentEl.innerHTML = renderProduct(product);
    contentEl.hidden = false;
    var name = (window.LlullsI18n && product.id) ? getT('product_' + product.id + '_name') : product.name;
    document.title = (name || product.name) + ' | Llull\'s';
    attachProductListeners(contentEl, product);
  }

  function init() {
    var id = getProductId();
    var contentEl = document.getElementById('product-content');
    var notFoundEl = document.getElementById('product-not-found');

    if (!id) {
      contentEl.innerHTML = '';
      notFoundEl.hidden = false;
      return;
    }

    var product = findProduct(id);
    if (!product) {
      contentEl.innerHTML = '';
      notFoundEl.hidden = false;
      return;
    }

    currentProductId = product.id;
    notFoundEl.hidden = true;
    contentEl.innerHTML = renderProduct(product);
    contentEl.hidden = false;
    var name = (window.LlullsI18n && product.id) ? getT('product_' + product.id + '_name') : product.name;
    document.title = (name || product.name) + ' | Llull\'s';

    attachProductListeners(contentEl, product);

    window.addEventListener('languagechange', function () {
      renderCurrentProduct();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
