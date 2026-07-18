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
      <div class="d-flex align-items-center justify-content-between border-bottom py-2">
  
        <div class="d-flex align-items-center">
          <img src="${item.image}" 
               alt="${item.name}" 
               style="width:50px;height:50px;object-fit:cover;"
               class="me-2">
  
          <div>
            <div style="font-size:14px;">${item.name}</div>
            <div class="text-danger fw-bold">$${item.price.toFixed(2)}</div>
  
            <div class="d-flex align-items-center mt-1">
              <button class="btn btn-sm btn-light border rounded-circle px-2 py-0"
                      onclick="changeQty(${index}, -1)">−</button>
  
              <span class="mx-2">${item.qty}</span>
  
              <button class="btn btn-sm btn-light border rounded-circle px-2 py-0"
                      onclick="changeQty(${index}, 1)">+</button>
            </div>
          </div>
        </div>
  
        <button class="btn btn-sm text-danger"
                onclick="removeItem(${index})">
          <i class="bi bi-trash"></i>
        </button>
  
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
