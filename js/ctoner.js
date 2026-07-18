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
const searchBox = document.getElementById("searchBox");

// Display products

products.forEach(product => {
    const productCol = document.createElement('div');
    productCol.className = 'col-12 col-sm-6 col-md-4 col-lg-4 mb-4';

    productCol.innerHTML = `
        <div class="card h-100 shadow-sm border" id="product-${product.id}">

            <!-- Product Image -->
            <a href="product-detail.html"
               onclick='saveProduct(${JSON.stringify(product)})'
               class="text-decoration-none">
                <div class="position-relative overflow-hidden bg-light" style="padding-top: 100%;">
                    <img src="${product.image}"
                         class="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                         alt="${product.title}">
                </div>
            </a>

            <!-- Card Body -->
            <div class="card-body d-flex flex-column p-3">

                <!-- Title & Description -->
                <div class="flex-grow-1 mb-3">
                    <a href="product-detail.html"
                       class="text-decoration-none text-dark hover-color d-block mb-1"
                       onclick='saveProduct(${JSON.stringify(product)})'>
                        <h5 class="card-title fs-6 fw-bold m-0">
                            ${product.title}
                        </h5>
                    </a>

                    <a href="product-detail.html"
                       class="text-decoration-none text-muted d-block"
                       onclick='saveProduct(${JSON.stringify(product)})'>
                        <p class="card-text small text-clamp m-0 hover-color">
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
                            <i class="bi bi-heart heart"></i>
                        </a>
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
searchBox.addEventListener("keyup", function () {

  const keyword = this.value.toLowerCase();

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(keyword)
  );
});

// Search

if(searchBox){

    searchBox.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase();

        const filteredProducts = products.filter(product =>
            product.title.toLowerCase().includes(keyword)
        );

        productContainer.innerHTML = "";

        filteredProducts.forEach(product => {

            const productCol = document.createElement("div");

            productCol.classList.add("col");

            productCol.innerHTML = `
                <div class="card card-hight" id="product-${product.id}">
                    <a href="product-detail.html"
                    onclick='saveProduct(${JSON.stringify(product)})'>

                    <img src="${product.image}" 
                    class="card-img-top card-image">

                    </a>

                    <div class="card-body">

                    <h5 class="card-title">${product.title}</h5>

                    <p class="card-text text-clamp">
                    ${product.text}
                    </p>


                    <div class="d-flex justify-content-between text-danger mt-3">

                        <p>
                        <i class="bi bi-currency-dollar"></i>
                        ${product.price}
                        </p>


                        <a class="hover-color text-dark icon-size add-cart"
                        href="#"
                        data-id="${product.id}">
                        <i class="bi bi-cart3"></i>
                        </a>

                    </div>


                    </div>
                </div>
            `;


            productContainer.appendChild(productCol);

        });

    });

}




