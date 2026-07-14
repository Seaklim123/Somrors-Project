import { setupWishlist } from "./wistlist.js";
var products = [
    { 
        id: 1,
        image: "images/category/foam/1.webp",
        title: "Anua Cleasing Oil",
        text: "Anua Heartleaf Pore Control Cleansing Oil and Deep Cleasing",
        price: 23,
        brand: "Anua",
        link: "product-detail.html"
    },
    { 
        id: 2,
        image: "images/category/foam/6.webp",
        title: "Joseon Green Plum Cleanser ",
        text: "Beauty of Joseon Green Plum Refreshing Cleanser 100Ml",
        price: 14,
        brand: "Beauty of Joseon",
        link: "product-detail.html"
    },
    { 
        id: 3,
        image: "images/category/hair/4.webp",
        title: "Fino",
        text: "Shiseido Fino Premium Touch Hair Mask best for long hair",
        price: 30,
        brand: "Shiseido",
        link: "product-detail.html"
    },
    { 
        id: 4,
        image: "images/category/hair/11.webp",
        title: "Kesar Shampoo",
        text: "Kesar lamore Bamboo Charcoal Shampoo best for short hair",
        price: 12,
        brand: "Kesar Lamore",
        link: "product-detail.html"
    },
    { 
        id: 5,
        image: "images/category/toners/11.png",
        title: "Torriden Dive In Multi Pad",
        text: "This is Torriden Dive In Multi Pad use for combination skin.",
        price: 16,
        brand: "Torriden",
        link: "product-detail.html"
    },
    { 
        id: 6,
        image: "images/category/toners/8.png",
        title: "mixsoon",
        text: "This is Mixsoon Bean Toner Pad.",
        price: 25,
        brand: "Torriden",
        link: "Mixsoon"
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





