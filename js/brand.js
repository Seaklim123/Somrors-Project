import { setupWishlist } from "./wistlist.js";
var products = [
    {
        id: 1,
        image: "images/category/toners/8.png",
        title: "Bean Toner Pad",
        text: "A gentle toner pad that hydrates skin and improves rough texture.",
        price: 25,
        brand: "Mixsoon",
        type: "Toner Pad",
        specialty: "Bean Ferment Extract",
        skinType: "All Skin Types",
        targetProblem: "Rough Texture and Lack of Moisture"
    },
    {
        id: 2,
        image: "images/category/toners/3.webp",
        title: "Azelaic 10 + Hyaluron Redness Soothing Pad",
        text: "Soothing toner pads that calm redness and hydrate sensitive skin.",
        price: 17,
        brand: "Anua",
        type: "Toner Pad",
        specialty: "Azelaic Acid 10% and Hyaluronic Acid",
        skinType: "Sensitive and Combination Skin",
        targetProblem: "Redness, Acne Marks, and Dryness"
    },
    {
        id: 3,
        image: "images/all-products/sunscreens/17.webp",
        title: "Hyalu-Cica Water-Fit Sun Serum SPF50+",
        text: "Lightweight sunscreen that protects skin while keeping it hydrated.",
        price: 18,
        brand: "SKIN1004",
        type: "Sunscreen",
        specialty: "Hyaluronic Acid",
        skinType: "Dry Skin",
        targetProblem: "UV Protection"
    },
    {
        id: 4,
        image: "images/all-products/masks/3.jpg",
        title: "Water Sleeping Mask",
        text: "An overnight mask that deeply hydrates and refreshes tired skin.",
        price: 32,
        brand: "Laneige",
        type: "Sleeping Mask",
        specialty: "Squalane",
        skinType: "All Skin Types",
        targetProblem: "Dull Skin"
    },
    {
        id: 5,
        image: "images/all-products/cleansers/7.webp",
        title: "Red Foam Cleanser",
        text: "A refreshing cleanser that removes impurities and controls oil.",
        price: 18,
        brand: "Medicube",
        type: "Foam Cleanser",
        specialty: "Salicylic Acid",
        skinType: "Acne-Prone Skin",
        targetProblem: "Acne"
    },
    {
        id: 6,
        image: "images/all-products/serums/5.jpg",
        title: "Collagen Glow Booster Serum",
        text: "A collagen serum that helps improve skin firmness and glow.",
        price: 28,
        brand: "Medicube",
        type: "Serum",
        specialty: "Collagen",
        skinType: "Dry Skin",
        targetProblem: "Loss of Elasticity"
    },
    {
        id: 7,
        image: "images/all-products/moisturizers/6.jpg",
        title: "Deep Vitamin C Capsule Cream",
        text: "A brightening moisturizer that helps reduce dullness and dark spots.",
        price: 29,
        brand: "Medicube",
        type: "Moisturizer",
        specialty: "Vitamin C",
        skinType: "Combination Skin",
        targetProblem: "Dark Spots"
    },
    {
        id: 8,
        image: "images/all-products/serums/9.jpg",
        title: "Glow Serum Propolis + Niacinamide",
        text: "A nourishing serum that brightens skin and improves texture.",
        price: 17,
        brand: "Beauty of Joseon",
        type: "Serum",
        specialty: "Propolis",
        skinType: "Combination Skin",
        targetProblem: "Acne Marks"
    },
    {
        id: 9,
        image: "images/all-products/sunscreens/8.jpg",
        title: "Relief Sun Rice + Probiotics SPF50+",
        text: "A lightweight sunscreen that protects and moisturizes skin.",
        price: 18,
        brand: "Beauty of Joseon",
        type: "Sunscreen",
        specialty: "Rice Extract",
        skinType: "All Skin Types",
        targetProblem: "UV Protection"
    },
    {
        id: 10,
        image: "images/all-products/cleansers/anua-oil.webp",
        title: "Heartleaf Pore Control Cleansing Oil",
        text: "A gentle cleansing oil that removes makeup and unclogs pores.",
        price: 18,
        brand: "Torriden",
        type: "Cleansing Oil",
        specialty: "Heartleaf Extract",
        skinType: "Acne-Prone Skin",
        targetProblem: "Blackheads and Clogged Pores"
    },
    {
        id: 11,
        image: "images/all-products/toners/13.webp",
        title: "Heartleaf 77% Soothing Toner",
        text: "A calming toner that hydrates skin and reduces irritation.",
        price: 22,
        brand: "Anua",
        type: "Toner",
        specialty: "Heartleaf Extract",
        skinType: "Sensitive Skin",
        targetProblem: "Redness"
    },
    {
        id: 12,
        image: "images/all-products/serums/14.webp",
        title: "Niacinamide 10% + TXA 4% Serum",
        text: "A brightening serum that helps improve uneven skin tone.",
        price: 24,
        brand: "Anua",
        type: "Serum",
        specialty: "Niacinamide",
        skinType: "Combination Skin",
        targetProblem: "Dark Spots"
    },
    {
        id: 13,
        image: "images/all-products/ampoules/16.webp",
        title: "Madagascar Centella Ampoule",
        text: "A soothing ampoule that calms sensitive skin and provides hydration.",
        price: 20,
        brand: "SKIN1004",
        type: "Ampoule",
        specialty: "Centella Asiatica",
        skinType: "Sensitive Skin",
        targetProblem: "Irritation"
    },
    {
        id: 14,
        image: "images/all-products/cleansers/18.jpg",
        title: "Madagascar Centella Light Cleansing Oil",
        text: "A lightweight cleansing oil that removes makeup gently.",
        price: 19,
        brand: "SKIN1004",
        type: "Cleansing Oil",
        specialty: "Centella Asiatica",
        skinType: "Sensitive Skin",
        targetProblem: "Makeup Removal"
    },
    {
        id: 15,
        image: "images/all-products/moisturizers/19.webp",
        title: "Probio-Cica Enrich Cream",
        text: "A rich moisturizer that repairs and strengthens skin barrier.",
        price: 24,
        brand: "SKIN1004",
        type: "Moisturizer",
        specialty: "Centella & Ceramide",
        skinType: "Dry Skin",
        targetProblem: "Skin Barrier Repair"
    },
    {
        id: 16,
        image: "images/all-products/lip-care/1.webp",
        title: "Lip Sleeping Mask Berry",
        text: "An overnight lip mask that softens and hydrates dry lips.",
        price: 24,
        brand: "Laneige",
        type: "Lip Mask",
        specialty: "Berry Extract",
        skinType: "All Skin Types",
        targetProblem: "Dry Lips"
    },
    {
        id: 17,
        image: "images/all-products/essences/11.webp",
        title: "Ginseng Essence Water",
        text: "A nourishing essence that hydrates and restores skin glow.",
        price: 19,
        brand: "Beauty of Joseon",
        type: "Essence",
        specialty: "Ginseng",
        skinType: "Normal Skin",
        targetProblem: "Dull Skin"
    },
    {
        id: 18,
        image: "images/all-products/serums/10.jpg",
        title: "Glow Deep Serum Rice + Alpha-Arbutin",
        text: "A brightening serum that helps reduce pigmentation.",
        price: 17,
        brand: "Beauty of Joseon",
        type: "Serum",
        specialty: "Alpha-Arbutin",
        skinType: "All Skin Types",
        targetProblem: "Hyperpigmentation"
    },
    {
        id: 19,
        image: "images/all-products/masks/4.jpg",
        title: "Heartleaf 70% Intense Calming Cream",
        text: "A soothing cream that moisturizes and calms irritated skin.",
        price: 25,
        brand: "Anua",
        type: "Moisturizer",
        specialty: "Heartleaf Extract",
        skinType: "Sensitive Skin",
        targetProblem: "Irritation"
    },
    {
        id: 20,
        image: "images/all-products/sunscreens/5.jpg",
        title: "Hyalu-Cica Water-Fit Sun Serum",
        text: "A hydrating sunscreen with lightweight daily protection.",
        price: 18,
        brand: "SKIN1004",
        type: "Sunscreen",
        specialty: "Hyaluronic Acid",
        skinType: "Dry Skin",
        targetProblem: "UV Protection"
    }
    
];

const productContainer = document.getElementById('product-container');
const filterButtons = document.querySelectorAll('.btn-filter');
window.saveProduct = function (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
};

function renderProducts(productsToDisplay) {
    productContainer.innerHTML = '';
    if (productsToDisplay.length === 0) {
    productContainer.innerHTML = `
        <div class="not-found-wrapper">
            <div class="not-found">
                <h3 class="text-muted">No Products Found</h3>
                <p class="text-secondary">
                    Sorry, there are no products available for this brand.
                </p>
            </div>
        </div>
    `;
    return;
}
productsToDisplay.forEach(product => {
    const productCol = document.createElement('div');
    productCol.className = 'col-12 col-sm-6 col-md-4 col-lg-4 mb-4';
    
    productCol.innerHTML = `
        <div class="card h-100 shadow-sm border" id="product-${product.id}">
            <!-- Aspect-ratio locked image frame container -->
            <div class="position-relative overflow-hidden bg-light" style="padding-top: 100%;">
                <img src="${product.image}" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="${product.title}">
            </div>
            
            <!-- Flex column layout distributes title space and footer alignment -->
            <div class="card-body d-flex flex-column p-3">
                <div class="flex-grow-1 mb-3">
                    <a class="text-decoration-none text-dark hover-color d-block mb-1" href="product-detail.html" onclick='saveProduct(${JSON.stringify(product)})'>
                        <h5 class="card-title fs-6 fw-bold m-0 hover-color">${product.title}</h5>
                    </a>
                    <a class="text-decoration-none text-muted d-block" href="product-detail.html" onclick='saveProduct(${JSON.stringify(product)})'>
                        <!-- Connected to your text-clamp CSS width rule -->
                        <p class="card-text small text-clamp m-0 hover-color">
                            ${product.text}
                        </p>
                    </a>
                </div>
                
                <div class="d-flex justify-content-between align-items-center pt-2 border-top">
                    <!-- Price section display block -->
                    <div class="fs-5 fw-bold text-danger icon-size m-0 d-flex align-items-center">
                        <p class="m-0"><i class="bi bi-currency-dollar text-danger"></i>${product.price}</p>
                    </div>
                    
                    
                    <div class="d-flex gap-3 fs-5 icon-size">
                        <a class="text-dark hover-color p-0 add-cart" 
                            href="#"
                            data-id="${product.id}"
                            data-title="${product.title}"
                            data-price="${product.price}"
                            data-image="${product.image}">
                            <i class="bi bi-cart3"></i>
                        </a>
                        <a class="text-dark hover-color p-0" aria-label="Add to Wishlist"><i class="bi bi-heart heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    productContainer.appendChild(productCol);
});

}

function filterProducts(brand) {
    if (brand === 'all') {
        return products;
    } else {
        return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
    }
}

filterButtons.forEach(button => {
    button.onclick = function(event) {
        event.preventDefault();

        filterButtons.forEach(btn => btn.classList.remove('button-color-active'));
        this.classList.add('button-color-active');

        const selectedBrand = this.getAttribute('data-value');

        const filteredData = filterProducts(selectedBrand);
        renderProducts(filteredData);

        setupWishlist();
    };
});

function saveProduct(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
}
renderProducts(products);
setupWishlist();
/* Search */
const searchBox = document.getElementById("searchInput");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase().trim();

        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(keyword) ||
            product.text.toLowerCase().includes(keyword) ||
            product.brand.toLowerCase().includes(keyword) ||
            product.type.toLowerCase().includes(keyword)
        );

        productContainer.innerHTML = "";

        filteredProducts.forEach(product => {

            const productCol = document.createElement("div");
            productCol.className = "col-12 col-sm-6 col-md-4 col-lg-4 mb-4";

            productCol.innerHTML = `
                <div class="card h-100 shadow-sm border" id="product-${product.id}">
                    <div class="position-relative overflow-hidden bg-light" style="padding-top:100%;">
                        <img src="${product.image}"
                            class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                            alt="${product.title}">
                    </div>

                    <div class="card-body d-flex flex-column p-3">

                        <div class="flex-grow-1 mb-3">
                            <a class="text-decoration-none text-dark hover-color d-block mb-1"
                               href="product-detail.html"
                               onclick='saveProduct(${JSON.stringify(product)})'>
                                <h5 class="card-title fs-6 fw-bold m-0">
                                    ${product.title}
                                </h5>
                            </a>

                            <a class="text-decoration-none text-muted d-block"
                               href="product-detail.html"
                               onclick='saveProduct(${JSON.stringify(product)})'>
                                <p class="card-text hover-color small text-clamp-safe m-0"
                                   style="display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
                                    ${product.text}
                                </p>
                            </a>
                        </div>

                        <div class="d-flex justify-content-between align-items-center pt-2 border-top">

                            <div class="fs-5 fw-bold text-danger">
                                $${product.price}
                            </div>

                            <div class="d-flex gap-3 fs-5">
                                <a class="text-dark hover-color p-0 add-cart"
                                   href="#"
                                   data-id="${product.id}"
                                   data-title="${product.title}"
                                   data-price="${product.price}"
                                   data-image="${product.image}">
                                    <i class="bi bi-cart3"></i>
                                </a>

                                <button class="border-0 bg-transparent text-secondary hover-color">
                                    <i class="bi bi-heart heart"></i>
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            `;

            productContainer.appendChild(productCol);
        });

        setupWishlist();
    });
}
