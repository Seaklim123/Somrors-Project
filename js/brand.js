import { setupWishlist } from "./wistlist.js";
var products = [
    {
        id: 1,
        image: "images/category/toners/8.png",
        title: "Mixsoon",
        text: "This is Mixsoon Bean Toner Pad.",
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
        title: "Anua Soothing Pad",
        text: "Anua Azelaic 10 + Hyaluron Redness Soothing Pad",
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
        title: "SKIN1004",
        text: "Hyalu-Cica Water-Fit Sun Serum SPF50+",
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
        title: "Laneige",
        text: "Laneige Water Sleeping Mask",
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
        title: "Medicube",
        text: "Medicube Red Foam Cleanser",
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
        title: "Medicube",
        text: "Medicube Collagen Glow Booster Serum",
        price: 28,
        brand: "Medicube",
        type: "Serum",
        specialty: "Collagen",
        skinType: "Dry Skin",
        targetProblem: "Loss of Elasticity"
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
                
                <!-- Action bottom footer row alignment split -->
                <div class="d-flex justify-content-between align-items-center pt-2 border-top">
                    <!-- Price section display block -->
                    <div class="fs-5 fw-bold text-danger icon-size m-0 d-flex align-items-center">
                        <p class="m-0"><i class="bi bi-currency-dollar text-danger"></i>${product.price}</p>
                    </div>
                    
                    <!-- Action utility shopping icons wrapper -->
                    <div class="d-flex gap-3 fs-5 icon-size">
                        <a class="text-dark hover-color p-0" href="#" aria-label="Add to Cart"><i class="bi bi-cart3"></i></a>
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
