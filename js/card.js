import { setupWishlist } from "./wistlist.js";
var products = [
    {
            id: 1,
            image: "images/all-products/cleansers/anua-oil.webp",
            title: "Anua",
            text: "Anua Heartleaf Pore Control Cleansing Oil",
            price: 18,
            brand: "Anua",
            type: "Cleansing Oil",
            specialty: "Heartleaf Extract",
            skinType: "Acne-Prone Skin",
            targetProble: "Blackheads and Clogged Pores"
      },
      {
            id: 2,
            image: "images/all-products/lip-care/1.webp",
            title: "Laneige",
            text: "Laneige Lip Sleeping Mask Berry",
            price: 24,
            brand: "Laneige",
            type: "Lip Mask",
            specialty: "Berry Extract",
            skinType: "All Skin Types",
            targetProblem: "Dry Lips"
      },
      {
            id: 3,
            image: "images/all-products/toners/2.webp",
            title: "Laneige",
            text: "Laneige Cream Skin Cerapeptide Refiner",
            price: 30,
            brand: "Laneige",
            type: "Toner",
            specialty: "Cerapeptide",
            skinType: "Sensitive Skin",
            targetProblem: "Dryness"
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
            image: "images/all-products/toners/4.webp",
            title: "Medicube",
            text: "Medicube Zero Pore Pad 2.0",
            price: 25,
            brand: "Medicube",
            type: "Toner Pad",
            specialty: "AHA & BHA",
            skinType: "Oily Skin",
            targetProblem: "Large Pores"
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
      },
      {
            id: 7,
            image: "images/all-products/moisturizers/6.jpg",
            title: "Medicube",
            text: "Medicube Deep Vitamin C Capsule Cream",
            price: 29,
            brand: "Medicube",
            type: "Moisturizer",
            specialty: "Vitamin C",
            skinType: "Combination Skin",
            targetProblem: "Dark Spots"
      },
      {
            id: 8,
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
            id: 9,
            image: "images/all-products/sunscreens/8.jpg",
            title: "Beauty of Joseon",
            text: "Relief Sun Rice + Probiotics SPF50+",
            price: 18,
            brand: "Beauty of Joseon",
            type: "Sunscreen",
            specialty: "Rice Extract",
            skinType: "All Skin Types",
            targetProblem: "UV Protection"
      }
];

const productContainer = document.getElementById('product-container');
window.saveProduct = function (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
};

products.forEach(product => {
    const productCol = document.createElement('div');
productCol.className = 'col-12 col-sm-6 col-md-4 col-lg-4 mb-4';

productCol.innerHTML = `
    <div class="card h-100 shadow-sm border" id="product-${product.id}">
        <!-- Image Container with a fixed aspect ratio wrapper -->
        <div class="position-relative overflow-hidden bg-light" style="padding-top: 100%;">
            <img src="${product.image}" class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" alt="${product.title}">
        </div>
        
        <!-- Card Body utilizing Flexbox distribution -->
        <div class="card-body d-flex flex-column p-3">
            <!-- Content Block (Title + Text) fills the remaining top space -->
            <div class="flex-grow-1 mb-3">
                <a class="text-decoration-none text-dark hover-color d-block mb-1" href="product-detail.html" onclick='saveProduct(${JSON.stringify(product)})'>
                    <h5 class="card-title fs-6 fw-bold m-0 hover-color">${product.title}</h5>
                </a>
                <a class="text-decoration-none text-muted d-block" href="product-detail.html" onclick='saveProduct(${JSON.stringify(product)})'>
                    <p class="card-text hover-color small text-clamp-safe m-0" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                        ${product.text}
                    </p>
                </a>
            </div>
            
            <!-- Bottom Action Row: Standardized padding and vertical centering -->
            <div class="d-flex justify-content-between align-items-center pt-2 border-top">
                <!-- Price Tag -->
                <div class="fs-5 fw-bold text-danger d-flex align-items-center">
                    <span class="small me-0.5">$</span><span>${product.price}</span>
                </div>
                
                <!-- Quick Actions Icons -->
                <div class="d-flex gap-3 fs-5">
                    <a class="text-dark hover-color p-0 add-cart" 
                        href="#"
                        data-id="${product.id}"
                        data-title="${product.title}"
                        data-price="${product.price}"
                        data-image="${product.image}">
                        <i class="bi bi-cart3"></i>
                    </a>
                    <button class="border-0 bg-transparent text-secondary hover-color transition-all" aria-label="Add to Wishlist">
                        <i class="bi bi-heart heart"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
`;


    productContainer.appendChild(productCol);
});

function saveProduct(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
}
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



