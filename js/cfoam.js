const products = [
  {
    id: 1,
    image: "images/category/foam/1.webp",
    title: "Anua Cleasing Oil",
    text: "Anua Heartleaf Pore Control Cleansing Oil and Deep Cleasing",
    price: 23
  },
  {
    id: 2,
    image: "images/category/foam/2.webp",
    title: "ANUA Cleasing Foam",
    text: "ANUA Heartleaf Quercetinol Pore Deep Cleansing Foam (150 ml)",
    price: 20
  },
  {
    id: 3,
    image: "images/category/foam/3.webp",
    title: "Anua Gentle Cleanser",
    text: "Anua Hyaluronic 8 + Squalane Acid Moisturizing Gentle Gel Cleanser",
    price: 11
  },
  {
    id: 4,
    image: "images/category/foam/4.webp",
    title: "Axis-Y Cleansing Foam",
    text: "Axis-Y Sunday Morning Refreshing Cleansing Foam 120Ml",
    price: 11
  },
  {
    id: 5,
    image: "images/category/foam/5.webp",
    title: "Cosrx Low Ph",
    text: " Cosrx Low Ph Good Morning Gel Cleanser 150Ml",
    price: 13
  },
  {
    id: 6,
    image: "images/category/foam/6.webp",
    title: "Joseon Green Plum Cleanser ",
    text: "Beauty of Joseon Green Plum Refreshing Cleanser 100Ml",
    price: 14
  },
  {
    id: 7,
    image: "images/category/foam/7.webp",
    title: "Matcha Hydrating Foam Cleanser",
    text: " B:Lab Matcha Hydrating Foam Cleanser 120ml",
    price: 14
  },
  {
    id: 8,
    image: "images/category/foam/8.webp",
    title: "Cosrx Salicylic Acid",
    text: "cosrx Salicylic Acid Daily Gentle Cleanser 150Ml",
    price: 12
  },
  {
    id: 9,
    image: "images/category/foam/9.webp",
    title: "Salicylic Acid Cleanser",
    text: "Face Republic Calming Salicylic Acid Cleanser 150ML",
    price: 11
  },
  {
    id: 10,
    image: "images/category/foam/10.webp",
    title: "Gold Mineral Cleanse",
    text: "Face Republic Glow Gold Mineral Cleanse 150ML",
    price: 11
  },
  {
    id: 11,
    image: "images/category/foam/11.webp",
    title: "Hydro Derma Gentle Cleanser",
    text: "Face Republic Hydro Derma Gentle Cleanser 150ML",
    price: 16
  },
  {
    id: 12,
    image: "images/category/foam/12.webp",
    title: "Isntree Cleanser",
    text: "Isntree Green Tea Fresh Deep Cleanser for all skin type 120ML",
    price: 15
  },
];

const productContainer = document.getElementById("cfoam-container");


// Display products

products.forEach(product => {
    const productCol = document.createElement('div');
    productCol.className = 'col-12 col-sm-6 col-md-4 col-lg-4 mb-4';

    productCol.innerHTML = `
        <div class="card h-100 shadow-sm border" id="product-${product.id}">

            <!-- Product Image -->
            <div class="position-relative overflow-hidden bg-light" style="padding-top: 100%;">
                <img src="${product.image}"
                     class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                     alt="${product.title}">
            </div>

            <!-- Card Body -->
            <div class="card-body d-flex flex-column p-3">

                <!-- Product Info -->
                <div class="flex-grow-1 mb-3">
                    <a href="#"
                       class="text-decoration-none text-dark hover-color d-block mb-1">
                        <h5 class="card-title fs-6 fw-bold m-0">
                            ${product.title}
                        </h5>
                    </a>

                    <a href="#"
                       class="text-decoration-none text-muted hover-color d-block">
                        <p class="card-text small text-clamp m-0">
                            ${product.text}
                        </p>
                    </a>
                </div>

                <!-- Price & Icons -->
                <div class="d-flex justify-content-between align-items-center pt-2 border-top">

                    <div class="fs-5 fw-bold text-danger d-flex align-items-center">
                        <p class="m-0">
                            <i class="bi bi-currency-dollar"></i>${product.price}
                        </p>
                    </div>

                    <div class="d-flex gap-3 fs-5">
                        <a href="#"
                           class="text-dark hover-color p-0 add-cart"
                           data-id="${product.id}"
                           data-title="${product.title}"
                           data-price="${product.price}"
                           data-image="${product.image}">
                            <i class="bi bi-cart3"></i>
                        </a>

                        <a href="#"
                           class="text-dark hover-color p-0"
                           aria-label="Add to Wishlist">
                            <i class="bi bi-heart"></i>
                        </a>
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