// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const subtotal = product.querySelector('.subtotal span');
  
  const priceValue = price.innerHTML;
  const quantityValue = quantity.value;
  const subtotalValue = priceValue * quantityValue;
  subtotal.innerHTML = subtotalValue.toFixed(2);
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  let totalValue = 0;
  for (let i = 0; i < allProducts.length; i += 1) {
    totalValue += updateSubtotal(allProducts[i]);
  }

  // ITERATION 3
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalValue.toFixed(2);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const product = target.parentNode.parentNode;
  // const tbody = document.querySelector('#cart tbody');
  const tbody = product.parentNode;
  tbody.removeChild(product);
}

// ITERATION 5

function createProduct() {
  const inputs = document.querySelectorAll('tfoot input');
  const name = inputs[0].value;
  const price = inputs[1].value;
  
  const product = document.createElement('tr');
  product.classList.add('product');
  product.innerHTML = `
    <td class="name">
      <span>${name}</span>
    </td>
    <td class="price">$<span>${parseFloat(price).toFixed(2)}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  `;
  product.querySelector('.btn-remove').addEventListener('click', removeProduct);
  
  const tbody = document.querySelector('#cart tbody');
  tbody.appendChild(product);
  inputs[0].value = '';
  inputs[1].value = 0;

  console.log(name, price);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  for (let i = 0; i < removeButtons.length; i += 1) {
    removeButtons[i].addEventListener('click', removeProduct)
  }

  const createButton = document.querySelector('#create');
  createButton.addEventListener('click', createProduct);
});
