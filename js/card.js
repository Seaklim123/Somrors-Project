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
        text: "This is yet another longer card with supporting text below as a natural lead-in to additional content.yet another longer card with supporting text below as a natural lead-in to additional content.",
        price: 30,
        brand: "Torriden"
    }
];

const productContainer = document.getElementById('product-container');

products.forEach(product => {
    const productCol = document.createElement('div');
    productCol.classList.add('col');
    
    productCol.innerHTML = `
        <div class="card card-hight" id="product-${product.id}">
            <img src="${product.image}" class="card-img-top card-image" alt="${product.title}">
            <div class="card-body">
                <a class="nav-link active hover-color" aria-current="page" href="${product.link}">
                    <h5 class="card-title">${product.title}</h5>
                </a>
                <a class="nav-link hover-color" href="${product.link}">
                    <p class="card-text text-clamp-safe">${product.text}</p>
                </a>
                <div class="d-flex justify-content-between align-items-end text-danger mt-3">
    <!-- Left Side: Price -->
    <div class="icon-size mb-0">
        <p class="m-0 d-flex align-items-center">
            <i class="bi bi-currency-dollar text-danger"></i>
            <span>${product.price}</span>
        </p>
    </div>
    
    <!-- Right Side: Icons -->
    <div class="icon-size d-flex gap-2">
        <a class="text-dark hover-color" href="#"><i class="bi bi-cart3"></i></a>
        <a class="text-dark hover-color" href="#"><i class="bi bi-heart"></i></a>
    </div>
</div>

            </div>
        </div>
    `;
    
    productContainer.appendChild(productCol);
});



