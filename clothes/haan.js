document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsList = document.querySelector('.cart-items');
  const totalElement = document.getElementById('total');
  let totalAmount = 0;

  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const product = button.parentElement;
      const img = product.querySelector('img').src;
      const title = product.querySelector('h2').textContent;
      const price = parseFloat(product.querySelector('.price').textContent.replace('₱', ''));

      const cartItem = document.createElement('li');

      // Create remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-from-cart');
      removeButton.addEventListener('click', function () {
        cartItem.remove();
        totalAmount -= price;
        totalElement.textContent = `₱${totalAmount.toFixed(2)}`;
      });

      // Append remove button to cart item
      cartItem.textContent = `${title} - ₱${price}`;
      cartItem.appendChild(removeButton);

      cartItemsList.appendChild(cartItem);

      totalAmount += price;
      totalElement.textContent = `₱${totalAmount.toFixed(2)}`;
    });
  });
});
