let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("click", function (e) {
  const btn = e.target.closest(".add-cart");
  if (!btn) return;
  e.preventDefault();
  
  const id = Number(btn.dataset.id);
  const title = btn.dataset.title;
  const price = Number(btn.dataset.price);
  const image = btn.dataset.image;
  
  AddtoCart(id, title, price, image);
});

export function AddtoCart(id, title, price, image) {
  const existing = cart.find(item => item.id === id);
  
  if (existing) {
    existing.qty++;
  } else {
    
    cart.push({
      id: id,
      name: title,
      price: price,
      image: image,
      qty: 1
    });
  }
  updateCart();
}

// --- UPDATE CART PANEL ---
function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));

  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");
  const cartCount = document.getElementById("cartCount");

  if (!cartItems || !cartTotal || !cartCount) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div class="d-flex justify-content-between align-items-center mb-2">
        <img src="${item.image}" alt="${item.name}" class="me-2" style="width: 40px; height: 40px; object-fit: cover;">
        <span>${item.name} ($${item.price})</span>
        <div>
          <button class="btn btn-sm btn-secondary" onclick="changeQty(${index}, -1)">-</button>
          <span class="mx-2">${item.qty}</span>
          <button class="btn btn-sm btn-secondary" onclick="changeQty(${index}, 1)">+</button>
          <button class="btn btn-sm btn-danger" onclick="removeItem(${index})"><i class="bi bi-trash"></i></button>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

// --- WINDOW BINDINGS ---
window.changeQty = function(index, delta) {
  cart[index].qty += delta;
  if (cart[index].qty <= 0) cart.splice(index, 1);
  updateCart();
};

window.removeItem = function(index) {
  cart.splice(index, 1);
  updateCart();
};

// --- INIT ---
updateCart();
