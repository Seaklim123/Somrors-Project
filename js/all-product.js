import { setupWishlist } from "./wistlist.js";
var products =[
      {
            id: 1,
            image: "images/all-products/cleansers/anua-oil.webp",
            title: "Heartleaf Pore Control Cleansing Oil",
            text: "A gentle cleansing oil that removes makeup, sunscreen with heartleaf extract.",
            price: 18,
            brand: "Anua",
            type: "Cleansing Oil",
            specialty: "Heartleaf Extract",
            skinType: "Acne-Prone Skin",
            targetProblem: "Blackheads and Clogged Pores"
      },
      {
            id: 2,
            image: "images/all-products/lip-care/1.webp",
            title: "Lip Sleeping Mask Berry",
            text: "Overnight lip mask that deeply hydrates and softens dry lips.",
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
            title: "Cream Skin Cerapeptide Refiner",
            text: "A moisturizing toner that strengthens the skin barrier and improves hydration.",
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
            title: "Water Sleeping Mask",
            text: "A sleeping mask that provides overnight hydration for fresh and glowing skin.",
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
            title: "Zero Pore Pad 2.0",
            text: "Exfoliating toner pads that help control oil and minimize visible pores.",
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
            title: "Collagen Glow Booster Serum",
            text: "A glow-enhancing serum that helps improve skin firmness and elasticity.",
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
            text: "Vitamin C moisturizer that brightens skin and reduces dullness.",
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
            title: "Red Foam Cleanser",
            text: "Gentle foam cleanser that removes impurities and helps reduce acne.",
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
            title: "Relief Sun Rice + Probiotics SPF50+",
            text: "Lightweight sunscreen that protects skin from UV rays and dryness.",
            price: 18,
            brand: "Beauty of Joseon",
            type: "Sunscreen",
            specialty: "Rice Extract",
            skinType: "All Skin Types",
            targetProblem: "UV Protection"
      },
      {
            id: 10,
            image: "images/all-products/serums/9.jpg",
            title: "Glow Serum Propolis + Niacinamide",
            text: "Nourishing serum that brightens skin and improves skin texture.",
            price: 17,
            brand: "Beauty of Joseon",
            type: "Serum",
            specialty: "Propolis",
            skinType: "Combination Skin",
            targetProblem: "Acne Marks"
      },
      {
            id: 11,
            image: "images/all-products/serums/10.jpg",
            title: "Glow Deep Serum Rice + Alpha-Arbutin",
            text: "Brightening serum that helps reduce dark spots and uneven tone.",
            price: 17,
            brand: "Beauty of Joseon",
            type: "Serum",
            specialty: "Alpha-Arbutin",
            skinType: "All Skin Types",
            targetProblem: "Hyperpigmentation"
      },
      {
            id: 12,
            image: "images/all-products/essences/11.webp",
            title: "Ginseng Essence Water",
            text: "Hydrating essence that nourishes skin and restores natural glow.",
            price: 19,
            brand: "Beauty of Joseon",
            type: "Essence",
            specialty: "Ginseng",
            skinType: "Normal Skin",
            targetProblem: "Dull Skin"
      }
];

const productContainer = document.getElementById('all-products');
window.saveProduct = function (product) {
    localStorage.setItem("selectedProduct", JSON.stringify(product));
};

products.forEach(product => {
    const allProductCol = document.createElement('div');
allProductCol.className = 'col-12 col-sm-6 col-md-4 col-lg-4 mb-4';

allProductCol.innerHTML = `
    <div class="card h-100 shadow-sm border" id="product-${product.id}">
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


    productContainer.appendChild(allProductCol);
});

setupWishlist();
