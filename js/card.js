var products = [
    { 
        id: 1,
        image: "images/best-seller/best1.jpg",
        title: "product 1",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        price: 10
    },
    { 
        id: 2,
        image: "images/best-seller/best2.jpg",
        title: "product 2",
        text: "This is another longer card with supporting text below as a natural lead-in to additional content.",
        price: 20
    },
    { 
        id: 3,
        image: "images/best-seller/best3.jpg",
        title: "product 3",
        text: "This is yet another longer card with supporting text below as a natural lead-in to additional content.",
        price: 30
    },
    { 
        id: 1,
        image: "images/best-seller/best1.jpg",
        title: "product 1",
        text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
        price: 10
    },
    { 
        id: 2,
        image: "images/best-seller/best2.jpg",
        title: "product 2",
        text: "This is another longer card with supporting text below as a natural lead-in to additional content.",
        price: 20
    },
    { 
        id: 3,
        image: "images/best-seller/best3.jpg",
        title: "product 3",
        text: "This is yet another longer card with supporting text below as a natural lead-in to additional content.",
        price: 30
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
                <div class="d-flex justify-content-between">
                    <div class="justify-content-start">
                        <p><i class="bi bi-currency-dollar"></i>${product.price}</p>
                    </div>
                    <div class="justify-content-end">
                        <a class="hover-color" href="#"><i class="bi bi-cart3"></i></a>
                        <a class="hover-color" href="#"><i class="bi bi-heart"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    productContainer.appendChild(productCol);
});
