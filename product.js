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

  function renderProduct(product) {
    return (
      '<div class="product-detail__grid">' +
        '<div class="product-detail__image-wrap">' +
          '<img class="product-detail__image" src="' + product.image + '" alt="' + escapeHtml(product.name) + '" />' +
        '</div>' +
        '<div class="product-detail__info">' +
          '<h1 class="product-detail__name">' + escapeHtml(product.name) + '</h1>' +
          '<p class="product-detail__price">€' + product.price + ' EUR</p>' +
          '<p class="product-detail__description">' + escapeHtml(product.description) + '</p>' +
          '<div class="product-detail__size">' +
            '<label class="product-detail__size-label">Size</label>' +
            '<div class="product-detail__size-options">' +
              ['XS', 'S', 'M', 'L', 'XL'].map(function (s) {
                return '<button type="button" class="size-option" data-size="' + s + '">' + s + '</button>';
              }).join('') +
            '</div>' +
          '</div>' +
          '<button type="button" class="btn btn-add-to-cart" id="add-to-cart-btn">Add to Cart</button>' +
        '</div>' +
      '</div>'
    );
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
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

    notFoundEl.hidden = true;
    contentEl.innerHTML = renderProduct(product);
    contentEl.hidden = false;
    document.title = product.name + ' | Llull\'s';

    // Size selector
    var sizeOptions = contentEl.querySelectorAll('.size-option');
    sizeOptions.forEach(function (btn) {
      btn.addEventListener('click', function () {
        sizeOptions.forEach(function (b) { b.classList.remove('selected'); });
        this.classList.add('selected');
      });
    });

    // Add to cart (placeholder)
    var addBtn = document.getElementById('add-to-cart-btn');
    if (addBtn) {
      addBtn.addEventListener('click', function () {
        var selected = contentEl.querySelector('.size-option.selected');
        if (!selected) {
          alert('Please select a size.');
          return;
        }
        alert('Added to cart! (This is a demo—no cart is connected yet.)');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
