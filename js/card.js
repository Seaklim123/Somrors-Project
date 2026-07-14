import { setupWishlist } from "./wistlist.js";
var products = [
    { 
        id: 1,
        image: "images/best-seller/best1.jpg",
        title: "product 1",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        price: 10,
        brand: "Laneige",
        link: "product-detail.html"
    },
    { 
        id: 2,
        image: "images/best-seller/best2.jpg",
        title: "product 2",
        text: "This is another longer card with supporting text below as a natural lead-in to additional content.",
        price: 20,
        brand: "Medicube"
    },
    { 
        id: 3,
        image: "images/best-seller/best3.jpg",
        title: "product 3",
        text: "This is yet another longer card with supporting text below as a natural lead-in to additional content.",
        price: 30,
        brand: "Beauty of Joseon"
    },
    { 
        id: 1,
        image: "images/best-seller/best1.jpg",
        title: "product 1",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        price: 10,
        brand: "Anua"
    },
    { 
        id: 2,
        image: "images/best-seller/best2.jpg",
        title: "product 2",
        text: "This is another longer card with supporting text below as a natural lead-in to additional content.",
        price: 20,
        brand: "SKIN1004"
    },
    { 
        id: 3,
        image: "images/best-seller/best3.jpg",
        title: "product 3",
        text: "This is yet another longer card with supporting text below as a natural lead-in to additional content.",
        price: 30,
        brand: "Torriden"
    }
];

const productContainer = document.getElementById('product-container');

products.forEach(product => {
    const productCol = document.createElement('div');
// FIX: Changed col-lg-3 to col-lg-4 to force exactly 3 cards per row on desktop viewports
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
                <a class="text-decoration-none text-dark hover-color d-block mb-1" href="${product.link}">
                    <h5 class="card-title fs-6 fw-bold m-0 hover-color">${product.title}</h5>
                </a>
                <a class="text-decoration-none text-muted d-block" href="${product.link}">
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
                    <a class="text-secondary hover-color transition-all" href="#" aria-label="Add to Cart">
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

setupWishlist();





