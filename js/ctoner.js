const products = [
  {
    id: 1,
    image: "images/category/toners/1.webp",
    title: "Abib",
    text: "Abib Glutathiosome Dark Spot Pad Vita Touch",
    price: 14,
    brand: "Abib",
    type: "Toner Pad",
    specialty: "Glutathione and Vitamin C",
    skinType: "All Skin Types",
    targetProblem: "Dark Spots and Uneven Skin Tone"
  },
  {
    id: 2,
    image: "images/category/toners/2.webp",
    title: "Abib",
    text: "Abib Heartleaf Spot Pad Calming Touch 150Ml 80 Pads",
    price: 17,
    brand: "Abib",
    type: "Toner Pad",
    specialty: "Heartleaf Extract and Panthenol",
    skinType: "Sensitive and Acne-Prone Skin",
    targetProblem: "Redness, Irritation, and Acne"
  },
  {
    id: 3,
    image: "images/category/toners/3.webp",
    title: "Anua Soothing Pad",
    text: "Anua Azelaic 10 + Hyaluron Redness Soothing Pad",
    price: 17,
    brand: "Anua",
    type: "Toner Pad",
    specialty: "Azelaic Acid 10% and Hyaluronic Acid",
    skinType: "Sensitive and Combination Skin",
    targetProblem: "Redness, Acne Marks, and Dryness"
  },
  {
    id: 4,
    image: "images/category/toners/4.webp",
    title: "Cosrx",
    text: "This is Cosrx AHA/BHA Clarifying Treatment Toner 150Ml",
    price: 11,
    brand: "COSRX",
    type: "Liquid Toner",
    specialty: "AHA, BHA, and Mineral Water",
    skinType: "Oily and Combination Skin",
    targetProblem: "Clogged Pores, Blackheads, and Rough Skin"
  },
  {
    id: 5,
    image: "images/category/toners/5.webp",
    title: "Toner Hydro",
    text: "This is Face Republic Hydro Balance Solution Toner",
    price: 13,
    brand: "Face Republic",
    type: "Hydrating Toner",
    specialty: "Hyaluronic Acid and Aloe Vera",
    skinType: "Dry and Sensitive Skin",
    targetProblem: "Dryness and Dehydration"
  },
  {
    id: 6,
    image: "images/category/toners/6.png",
    title: "Medicube Vita C",
    text: "This is Medicube Deep Vita C Pad use for all skin type.",
    price: 25,
    brand: "Medicube",
    type: "Toner Pad",
    specialty: "Vitamin C and Niacinamide",
    skinType: "All Skin Types",
    targetProblem: "Dark Spots, Dull Skin, and Hyperpigmentation"
  },
  {
    id: 7,
    image: "images/category/toners/7.webp",
    title: "Isntree",
    text: "This is Isntree Hyaluronic Acid Toner 200Ml.",
    price: 18,
    brand: "Isntree",
    type: "Hydrating Toner",
    specialty: "Five Types of Hyaluronic Acid",
    skinType: "Dry and Sensitive Skin",
    targetProblem: "Dryness and Weak Skin Barrier"
  },
  {
    id: 8,
    image: "images/category/toners/8.png",
    title: "Mixsoon",
    text: "This is Mixsoon Bean Toner Pad.",
    price: 25,
    brand: "Mixsoon",
    type: "Toner Pad",
    specialty: "Bean Ferment Extract",
    skinType: "All Skin Types",
    targetProblem: "Rough Texture and Lack of Moisture"
  },
  {
    id: 9,
    image: "images/category/toners/9.png",
    title: "Mixsoon",
    text: "This is Mixsoon Galactomyces Toner Pad",
    price: 18,
    brand: "Mixsoon",
    type: "Toner Pad",
    specialty: "Galactomyces Ferment Filtrate",
    skinType: "Normal and Combination Skin",
    targetProblem: "Dull Skin and Uneven Skin Tone"
  },
  {
    id: 10,
    image: "images/category/toners/10.webp",
    title: "Glow Boosting Toner",
    text: "This is Numbuzin No.9+ NAD+ PDRN Glow Boosting Toner.",
    price: 25,
    brand: "Numbuzin",
    type: "Glow Toner",
    specialty: "NAD+, PDRN, and Niacinamide",
    skinType: "All Skin Types",
    targetProblem: "Dullness, Fine Lines, and Uneven Skin Tone"
  },
  {
    id: 11,
    image: "images/category/toners/11.png",
    title: "Torriden Dive In Multi Pad",
    text: "This is Torriden Dive In Multi Pad use for combination skin.",
    price: 16,
    brand: "Torriden",
    type: "Toner Pad",
    specialty: "Low Molecular Hyaluronic Acid",
    skinType: "Combination Skin",
    targetProblem: "Dryness and Skin Barrier Care"
  },
  {
    id: 12,
    image: "images/category/toners/12.webp",
    title: "NOLAHOUR Vegan Watery Toner",
    text: "This is NOLAHOUR Vegan Watery Toner best for all skin type.",
    price: 15,
    brand: "NOLAHOUR",
    type: "Watery Toner",
    specialty: "Vegan Botanical Extracts and Hyaluronic Acid",
    skinType: "All Skin Types",
    targetProblem: "Dryness, Sensitive Skin, and Skin Hydration"
  }
];

const productContainer = document.getElementById("ctoner-container");

// Display products

products.forEach(product => {
    const productCol = document.createElement('div');
    productCol.classList.add('col');
    
    productCol.innerHTML = `
        <div class="card card-hight" id="product-${product.id}">
        <a href="product-detail.html"
        onclick='saveProduct(${JSON.stringify(product)})'>
         <img src="${product.image}" class="card-img-top card-image">
     </a>
            <div class="card-body">
              <a href="product-detail.html"
                 class="nav-link hover-color"
                 onclick='saveProduct(${JSON.stringify(product)})'>
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

function saveProduct(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
}

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