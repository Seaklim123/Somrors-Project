// Renders wishlist.html using whatever's been saved by the heart icons
// on other pages. All the save/remove logic lives in wistlist.js — this
// file only paints the cards and repaints after a heart click here.

import { getWishlist } from "./wistlist.js";

const wishlistContainer = document.getElementById('wishlist-container');
const savedCountText = document.getElementById('saved-count');

function renderWishlist() {
    const wishlist = getWishlist();

    wishlistContainer.innerHTML = '';

    if (savedCountText) {
        savedCountText.textContent = `${wishlist.length} saved Item${wishlist.length === 1 ? '' : 's'}`;
    }

    if (wishlist.length === 0) {
        wishlistContainer.innerHTML = `
            <div class="col-12 text-center text-muted py-5">
                <i class="bi bi-heart" style="font-size: 2rem;"></i>
                <p class="mt-3">Your wishlist is empty. Tap the heart on any product to save it here.</p>
            </div>
        `;
        return;
    }

    wishlist.forEach(product => {
        const col = document.createElement('div');
        col.classList.add('col');

        col.innerHTML = `
            <div class="card card-height">
                <img
                    src="${product.image}"
                    class="card-img-top card-image"
                    alt="${product.title}"
                />
                <div class="card-body">
                    <a class="nav-link active hover-color" href="${product.link || '#'}">
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
                            <a class="hover-color" href="#"><i class="bi bi-cart3"></i></a>
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

// wistlist.js's document-level click listener (loaded before this file)
// handles the actual save/remove on heart click. We just notice when a
// click happened inside this container and repaint the list afterward,
// so a removed card disappears right away.
document.addEventListener('click', (e) => {
    if (!wishlistContainer.contains(e.target)) return;
    if (!e.target.closest('.bi-heart-fill, .bi-heart')) return;
    setTimeout(renderWishlist, 0);
});

renderWishlist();
