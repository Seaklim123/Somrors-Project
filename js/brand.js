import { setupWishlist } from "./wistlist.js";
var products = [
    { 
        id: 1,
        image: "images/best-seller/best1.jpg",
        title: "product 1",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        price: 10,
        brand: "Laneige"
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
        id: 4, 
        image: "images/best-seller/best1.jpg",
        title: "product 4",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        price: 10,
        brand: "Anua"
    },
    { 
        id: 5, 
        image: "images/best-seller/best2.jpg",
        title: "product 5",
        text: "This is another longer card with supporting text below as a natural lead-in to additional content.",
        price: 20,
        brand: "SKIN1004"
    },
    { 
        id: 6, 
        image: "images/best-seller/best3.jpg",
        title: "product 6",
        text: "This is yet another longer card with supporting text below as a natural lead-in to additional content.",
        price: 30,
        brand: "Torriden"
    }
];

const productContainer = document.getElementById('product-container');
const filterButtons = document.querySelectorAll('.btn-filter');

function renderProducts(productsToDisplay) {
    productContainer.innerHTML = '';
    
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
                    <a class="text-decoration-none text-dark hover-color d-block mb-1" href="${product.link || '#'}">
                        <h5 class="card-title fs-6 fw-bold m-0 hover-color">${product.title}</h5>
                    </a>
                    <a class="text-decoration-none text-muted d-block" href="${product.link || '#'}">
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

renderProducts(products);
setupWishlist();
