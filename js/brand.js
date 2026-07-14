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
const filterButtons = document.querySelectorAll('.btn-filter');

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
