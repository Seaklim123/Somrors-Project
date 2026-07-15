// Load cart from Local Storage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Save cart
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Display cart
function displayCart() {

    const cartContainer = document.getElementById("cartItem");
    const cartCount = document.getElementById("cartCount");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartContainer) return;

    cartCount.innerHTML = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="bi bi-cart-x display-1 text-secondary"></i>
                <h3 class="mt-3">Your Cart is Empty</h3>
            </div>
        `;

        totalPrice.innerHTML = "$0";
        return;
    }

    let html = "";
    let total = 0;

    cart.forEach(item => {

        const subtotal = item.price * item.quantity;
        total += subtotal;

        html += `
        <div class="card mb-3 shadow-sm">
            <div class="row g-0 align-items-center">

                <div class="col-md-2 text-center">
                    <img src="${item.image}" class="img-fluid p-2" style="height:100px;object-fit:contain;">
                </div>

                <div class="col-md-4">
                    <div class="card-body">
                        <h5>${item.name}</h5>
                        <p class="text-success">$${item.price}</p>
                    </div>
                </div>

                <div class="col-md-3 text-center">

                    <button class="btn btn-outline-secondary"
                    onclick="changeQty(${item.id},-1)">-</button>

                    <span class="mx-3">${item.quantity}</span>

                    <button class="btn btn-outline-secondary"
                    onclick="changeQty(${item.id},1)">+</button>

                </div>

                <div class="col-md-2 text-center">

                    <h5>$${subtotal}</h5>

                </div>

                <div class="col-md-1 text-center">

                    <button class="btn btn-danger"
                    onclick="removeItem(${item.id})">

                    <i class="bi bi-trash"></i>

                    </button>

                </div>

            </div>
        </div>
        `;
    });

    cartContainer.innerHTML = html;
    totalPrice.innerHTML = "$" + total.toFixed(2);

    saveCart();
}

// Change quantity
function changeQty(id, change) {

    const item = cart.find(p => p.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {

        cart = cart.filter(p => p.id !== id);

    }

    saveCart();
    displayCart();
}

// Remove item
function removeItem(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    displayCart();

}

// Checkout
function checkout() {

    if (cart.length === 0) {

        Swal.fire({
            icon: "warning",
            title: "Your cart is empty"
        });

        return;
    }

    Swal.fire({

        icon: "success",
        title: "Order Successful",

        text: "Thank you for your purchase!"

    }).then(() => {

        cart = [];

        saveCart();

        displayCart();

    });

}

// Run when page opens
displayCart();