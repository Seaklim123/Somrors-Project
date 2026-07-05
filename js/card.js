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
    productCol.classList.add('col');
    
    productCol.innerHTML = `
        <div class="card card-hight" id="product-${product.id}">
            <img src="${product.image}" class="card-img-top card-image" alt="${product.title}">
            <div class="card-body">
                <a class="nav-link active hover-color" aria-current="page" href="#">
                    <h5 class="card-title">${product.title}</h5>
                </a>
                <a class="nav-link hover-color" href="#">
                    <p class="card-text text-clamp">${product.text}</p>
                </a>
                <div class="d-flex justify-content-between text-danger mt-3">
                    <div class="justify-content-start icon-size">
                        <p><i class="bi bi-currency-dollar text-danger"></i>${product.price}</p>
                    </div>
                    <div class="justify-content-end">
                        <a class="hover-color text-dark icon-size" href="#"><i class="bi bi-cart3"></i></a>
                        <a class="hover-color text-dark icon-size" href="#"><i class="bi bi-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    productContainer.appendChild(productCol);
});


function filterProducts(products, brand) {
    let filteredBrands = products.getAttribute('data-value');
    if (brand === 'all') {
        return products;
    } else {
        return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
    }
}

const filterButtons = document.querySelectorAll('.btn-filter');