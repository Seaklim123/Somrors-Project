const products = [
  {
    id: 1,
    image: "images/category/toners/1.webp",
    title: "Abib",
    text: "Abib Glutathiosome Dark Spot Pad Vita Touch",
    price: 14
  },
  {
    id: 2,
    image: "images/category/toners/2.webp",
    title: "Abib",
    text: "Abib Heartleaf Spot Pad Calming Touch 150Ml 80 Pads",
    price: 17
  },
  {
    id: 3,
    image: "images/category/toners/3.webp",
    title: "Anua Soothing Pad",
    text: "Anua Azelaic 10 + Hyaluron Redness Soothing Pad",
    price: 17
  },
  {
    id: 4,
    image: "images/category/toners/4.webp",
    title: "Cosrx",
    text: "This is Cosrx Aha/Bha Clarifying Treatment Toner 150Ml",
    price: 11
  },
  {
    id: 5,
    image: "images/category/toners/5.webp",
    title: "Toner Hydro",
    text: " This is Face Republic Hydro Balance Solution Toner",
    price: 13
  },
  {
    id: 6,
    image: "images/category/toners/6.png",
    title: "Medicube Vita C ",
    text: "This is Medicube Deep Vita C Pad use for all skin type.",
    price: 25
  },
  {
    id: 7,
    image: "images/category/toners/7.webp",
    title: "Isntree",
    text: " This is Isntree Hyaluronic Acid Toner 200Ml.",
    price: 18
  },
  {
    id: 8,
    image: "images/category/toners/8.png",
    title: "mixsoon",
    text: "This is Mixsoon Bean Toner Pad.",
    price: 25
  },
  {
    id: 9,
    image: "images/category/toners/9.png",
    title: "mixsoon",
    text: "This is Mixsoon Galactomyces Toner Pad",
    price: 18
  },
  {
    id: 10,
    image: "images/category/toners/10.webp",
    title: "Glow Boosting Toner",
    text: "This is Numbuzin No.9+ NAD+ PDRN Glow Boosting Toner lead-in to additional content.",
    price: 25
  },
  {
    id: 11,
    image: "images/category/toners/11.png",
    title: "Torriden Dive In Multi Pad",
    text: "This is Torriden Dive In Multi Pad use for combination skin.",
    price: 16
  },
  {
    id: 12,
    image: "images/category/toners/12.webp",
    title: "NOLAHOUR Vegan Watery Toner",
    text: "This is NOLAHOUR Vegan Watery Toner best for all skin type",
    price: 15
  },
];

const productContainer = document.getElementById("ctoner-container");

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

productCol.innerHTML = `
<div class="card card-hight">

    <img src="${product.image}" class="card-img-top card-image">

    <div class="card-body">

        <h5>${product.title}</h5>

        <p>${product.text}</p>

        <div class="d-flex justify-content-between align-items-center">

            <h4 class="text-danger">$${product.price}</h4>

            <div>

                <button class="btn btn-outline-dark add-cart"
                        data-id="${product.id}">
                    <i class="bi bi-cart3"></i>
                </button>

                <button class="btn btn-outline-danger">
                    <i class="bi bi-heart"></i>
                </button>

            </div>

        </div>

    </div>

</div>
`;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("click", function (e) {

    const btn = e.target.closest(".add-cart");

    if (!btn) return;

    const id = Number(btn.dataset.id);

    const product = products.find(p => p.id === id);

    const exist = cart.find(item => item.id === id);

    if (exist) {

        exist.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart!");

});