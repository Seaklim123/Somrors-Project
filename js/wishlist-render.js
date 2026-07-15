// Renders wishlist.html using whatever's been saved by the heart icons
// on other pages. All the save/remove logic lives in wistlist.js — this
// file only paints the cards and repaints after a heart click here.

import { getWishlist } from "./wistlist.js";

const wishlistContainer = document.getElementById("wishlist-container");
const savedCountText = document.getElementById("saved-count");

function renderWishlist() {
    const wishlist = getWishlist();

    // Reset the container every time we render
    wishlistContainer.innerHTML = "";
    wishlistContainer.classList.remove("empty-state");

    // Update saved item count
    if (savedCountText) {
        savedCountText.textContent =
            `${wishlist.length} saved Item${wishlist.length === 1 ? "" : "s"}`;
    }

    // Empty wishlist message
    if (wishlist.length === 0) {
        wishlistContainer.classList.add("empty-state");

        wishlistContainer.innerHTML = `
            <div class="text-center text-muted">
                <i class="bi bi-heart" style="font-size:2.5rem;"></i>
                <p class="mt-3 mb-0 fw-semibold">
                    Your wishlist is empty. Tap the heart on any product to save it here.
                </p>
            </div>
        `;
        return;
    }

    // Render all saved products
    wishlist.forEach((product) => {
        const col = document.createElement("div");
        col.classList.add("col");

        col.innerHTML = `
            <div class="card card-height">
                <img
                    src="${product.image}"
                    class="card-img-top card-image"
                    alt="${product.title}"
                />

                <div class="card-body">
                    <a class="nav-link active hover-color" href="${product.link || "#"}">
                        <h5 class="card-title">${product.title}</h5>
                    </a>

                    <p class="card-text">
                        ${product.text}
                    </p>

                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <p class="text-danger mb-0">
                                <i class="bi bi-currency-dollar"></i>${product.price}
                            </p>
                        </div>

                        <div>
                            <a class="hover-color" href="#">
                                <i class="bi bi-cart3"></i>
                            </a>

                            <a class="text-danger" href="#">
                                <i class="bi bi-heart-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;

        wishlistContainer.appendChild(col);
    });
}

// Re-render after removing a product from the wishlist
document.addEventListener("click", (e) => {
    if (!wishlistContainer.contains(e.target)) return;
    if (!e.target.closest(".bi-heart-fill, .bi-heart")) return;

    // Wait for wistlist.js to update localStorage first
    setTimeout(renderWishlist, 0);
});

// Initial render
renderWishlist();