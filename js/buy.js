document.addEventListener('DOMContentLoaded', () => {
  const cart = [];
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const totalPriceElement = document.getElementById('total-price');
  const cartItemsList = document.getElementById('cart-items');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const productElement = event.target.closest('.product');
      const price = parseFloat(productElement.getAttribute('data-price'));
      const name = productElement.getAttribute('data-name');
      cart.push({ name, price });
      updateTotalPrice();
    });
  });

  function updateTotalPrice() {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    totalPriceElement.textContent = totalPrice;

    // Clear cart items list before updating
    cartItemsList.innerHTML = '';

    // Add list item for each product in cart with remove button
    cart.forEach((item, index) => {
      const listItem = document.createElement('li');
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      listItem.textContent = `${item.name} - ₱${item.price} `;
      listItem.appendChild(removeButton);
      cartItemsList.appendChild(listItem);

      // Add click event listener to remove button
      removeButton.addEventListener('click', () => {
        cart.splice(index, 1);
        updateTotalPrice();
      });
    });
  }
});
