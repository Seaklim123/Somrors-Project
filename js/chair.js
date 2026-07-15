const products = [
  {
    id: 1,
    image: "images/category/Hair/1.webp",
    title: "Peach Hair Cream",
    text: "DARIYA Momori Peach Moist & Cohesive Hair Cream",
    price: 11
  },
  {
    id: 2,
    image: "images/category/Hair/2.webp",
    title: "Hair Sparay",
    text: "KAO Cape 3D Super Long-Lasting Volumizing Hair Spray",
    price: 17
  },
  {
    id: 3,
    image: "images/category/Hair/3.webp",
    title: "Hair Sparay",
    text: "KAO Cape 4D Super Hard Unscented hair spray",
    price: 17
  },
  {
    id: 4,
    image: "images/category/Hair/4.webp",
    title: "Fino",
    text: "Shiseido Fino Premium Touch Hair Mask best for long hair",
    price: 10
  },
  {
    id: 5,
    image: "images/category/Hair/5.webp",
    title: "Shampoo",
    text: " Aromatica Rosemary Scalp Scaling Shampoo 400Ml",
    price: 18
  },
  {
    id: 6,
    image: "images/category/Hair/6.webp",
    title: "Hair spray ",
    text: "Aromatica Rosemary Root Enhancer 100Ml besr recommend for short hair",
    price: 11
  },
  {
    id: 7,
    image: "images/category/Hair/7.webp",
    title: "Hair Mask",
    text: " Aurora Daily Silk Repair Hair Mask Free Dry Towel",
    price: 10
  },
  {
    id: 8,
    image: "images/category/Hair/8.webp",
    title: "Hair mask",
    text: "Aromatica Rosemary Active V Anti-hairloss Tonic 100ml",
    price: 16
  },
  {
    id: 9,
    image: "images/category/Hair/9.webp",
    title: "Hair Spray",
    text: "Blume Beauty Hair Straight Hair Moisturizing Spray 180ml",
    price: 18
  },
  {
    id: 10,
    image: "images/category/Hair/10.webp",
    title: "Hair Care Set",
    text: "Hair Styling Set: Velgro Roller + Electric Bang Curler + Heatless Hair curler + Hair brush ",
    price: 23
  },
  {
    id: 11,
    image: "images/category/Hair/11.webp",
    title: "Kesar Shampoo",
    text: "Kesar lamore Bamboo Charcoal Shampoo best for short hair",
    price: 12
  },
  {
    id: 12,
    image: "images/category/Hair/12.webp",
    title: "Kesar Shampoo",
    text: "Kesar lamore Menthol Macadamia Oil Shampoo",
    price: 12
  },
];

const productContainer = document.getElementById("chair-container");


// Display products

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

// Show all products
displayProducts(products);

// Search
const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function () {

  const keyword = this.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(keyword)
  );

  displayProducts(filteredProducts);

});