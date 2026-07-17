// Somros wishlist engine.
//
// This works across every page automatically: it watches for clicks on any
// heart icon inside a product card (".card") and saves/removes that product
// from localStorage — without needing to know how each page's own script
// (card.js, cfoam.js, chair.js, ctoner.js, brand.js...) built the card.
// It reads the product's info straight out of the rendered card itself.

const WISHLIST_KEY = 'somros_wishlist';

function getWishlist() {
    const saved = localStorage.getItem(WISHLIST_KEY);
    return saved ? JSON.parse(saved) : [];
}

function saveWishlist(list) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
}

function isSaved(id) {
    return getWishlist().some(item => item.id === id);
}

function toggleSaved(product) {
    let list = getWishlist();
    const exists = list.some(item => item.id === product.id);

    if (exists) {
        list = list.filter(item => item.id !== product.id);
    } else {
        list.push(product);
    }

    saveWishlist(list);
    return !exists; // true if just added, false if just removed
}

function extractPrice(card) {
    // Method 1: the dollar-sign icon (used by cfoam.js, chair.js, ctoner.js, brand.js)
    const currencyIcon = card.querySelector('.bi-currency-dollar');
    if (currencyIcon && currencyIcon.parentElement) {
        const digits = currencyIcon.parentElement.textContent.replace(/[^0-9.]/g, '').trim();
        if (digits) return digits;
    }

    // Method 2: a literal "$" in its own element next to the number (card.js's newer markup)
    const dollarEls = Array.from(card.querySelectorAll('span, p, div'))
        .filter(el => el.textContent.trim() === '$');
    for (const dollarEl of dollarEls) {
        const sibling = dollarEl.nextElementSibling;
        if (sibling) {
            const digits = sibling.textContent.replace(/[^0-9.]/g, '').trim();
            if (digits) return digits;
        }
    }

    // Method 3: last resort — find "$123" anywhere in the card's text
    const match = card.textContent.match(/\$\s?(\d+(\.\d+)?)/);
    return match ? match[1] : '';
}

// Reads a product's info straight from its rendered card. Every page's
// cards share .card-title / .card-text / a $ icon for price / an <img>,
// so this same logic works regardless of which script built the card.
function extractProductFromCard(card) {
    const img = card.querySelector('img');
    const titleEl = card.querySelector('.card-title');
    const textEl = card.querySelector('.card-text');
    const price = extractPrice(card);
    const linkEl = card.querySelector('a[href]:not([href="#"])');

    const title = titleEl ? titleEl.textContent.trim() : 'Product';
    const image = img ? img.getAttribute('src') : '';

    return {
        // image + title is stable across pages, so the same product looks
        // the same whether it's clicked from its category page or the wishlist
        id: `${image}::${title}`,
        image,
        title,
        text: textEl ? textEl.textContent.trim() : '',
        price,
        link: linkEl ? linkEl.getAttribute('href') : ''
    };
}

function setHeartVisual(iconEl, saved) {
    const wrapper = iconEl.closest('a, button');

    if (saved) {
        iconEl.classList.remove('bi-heart');
        iconEl.classList.add('bi-heart-fill', 'active', 'text-danger');
        if (wrapper) {
            wrapper.classList.remove('hover-color', 'text-dark', 'text-secondary');
            wrapper.classList.add('text-danger');
        }
    } else {
        iconEl.classList.remove('bi-heart-fill', 'active', 'text-danger');
        iconEl.classList.add('bi-heart');
        if (wrapper) {
            wrapper.classList.remove('text-danger');
            wrapper.classList.add('hover-color', 'text-dark');
        }
    }
}

// Applies the correct filled/empty look to every heart currently on the page
function applyInitialStates(root = document) {
    root.querySelectorAll('.card i.bi-heart, .card i.bi-heart-fill').forEach(icon => {
        const card = icon.closest('.card');
        if (!card) return;
        const product = extractProductFromCard(card);
        setHeartVisual(icon, isSaved(product.id));
    });
}

// One listener on the whole document catches every heart click on every
// page — including cards that get re-rendered later (e.g. brand.html's
// filter buttons rebuild the grid; this still works with no extra wiring)
document.addEventListener('click', (e) => {
    const icon = e.target.closest('.card i.bi-heart, .card i.bi-heart-fill');
    if (!icon) return;

    const card = icon.closest('.card');
    if (!card) return;

    e.preventDefault();

    const product = extractProductFromCard(card);
    const nowSaved = toggleSaved(product);
    setHeartVisual(icon, nowSaved);
});

applyInitialStates();

// Watches for new cards being added anywhere on the page later (e.g. after
// brand.html re-renders its grid on a filter click) and re-applies states
const cardObserver = new MutationObserver(() => applyInitialStates());
cardObserver.observe(document.body, { childList: true, subtree: true });

/* ---------------- product-detail.html special case ----------------
   That page's own script (js/product-detail.js, a teammate's file) already
   toggles its heart icon's class on click. Rather than adding a second click
   handler — which would fire alongside theirs and cancel the visual change
   out — we just watch the icon's class attribute and mirror whatever state
   it ends up in. Their click handling is left completely untouched. */
const singleHeart = document.getElementById('heart');
if (singleHeart) {
    const getDetailPageProduct = () => {
        const titleEl = document.querySelector('.title h2') || document.querySelector('h2');
        const priceEl = document.getElementById('price');
        const imgEl = document.querySelector('.container img') || document.querySelector('img');
        const title = titleEl ? titleEl.textContent.trim() : 'Product';
        const image = imgEl ? imgEl.getAttribute('src') : '';
        return {
            id: `${image}::${title}`,
            image,
            title,
            text: '',
            price: priceEl ? priceEl.textContent.trim() : '',
            link: location.pathname
        };
    };

    // set the icon's initial look on page load without touching their click handler
    if (isSaved(getDetailPageProduct().id)) {
        singleHeart.classList.remove('bi-heart');
        singleHeart.classList.add('bi-heart-fill');
    }

    const heartClassObserver = new MutationObserver(() => {
        const product = getDetailPageProduct();
        const filled = singleHeart.classList.contains('bi-heart-fill');
        const currentlySaved = isSaved(product.id);
        if (filled !== currentlySaved) {
            toggleSaved(product);
        }
    });
    heartClassObserver.observe(singleHeart, { attributes: true, attributeFilter: ['class'] });
}

// Kept so brand.js's existing `import { setupWishlist } from "./wistlist.js"`
// call still works. Initial states are already applied automatically above,
// so calling this again after brand.js re-renders is a safe, cheap no-op refresh.
export function setupWishlist() {
    applyInitialStates();
}

// Exported for the wishlist page itself to build/rebuild the saved list
export { getWishlist, toggleSaved, isSaved };
