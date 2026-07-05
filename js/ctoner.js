// Products
const products = [
  {
    id: 1,
    image: "images/best-seller/best1.jpg",
    title: "Product 1",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
    price: 10
  },
  {
    id: 2,
    image: "images/best-seller/best2.jpg",
    title: "Product 2",
    text: "This is another longer card with supporting text below as a natural lead-in to additional content.",
    price: 20
  },
  {
    id: 3,
    image: "images/best-seller/best3.jpg",
    title: "Product 3",
    text: "This is yet another longer card with supporting text below as a natural lead-in to additional content.",
    price: 30
  },
  {
    id: 4,
    image: "images/best-seller/best1.jpg",
    title: "Product 4",
    text: "This is a longer card with supporting text below as a natural lead-in to additional content.",
    price: 15
  },
  {
    id: 5,
    image: "images/best-seller/best2.jpg",
    title: "Product 5",
    text: "This is another longer card with supporting text below as a natural lead-in to additional content.",
    price: 18
  },
  {
    id: 6,
    image: "images/best-seller/best3.jpg",
    title: "Product 6",
    text: "This is yet another longer card with supporting text below as a natural lead-in to additional content.",
    price: 25
  }
];

const productContainer = document.getElementById("ctoner-container");

// Display products
function displayProducts(list) {
  productContainer.innerHTML = "";

  list.forEach(product => {
    const productCol = document.createElement("div");
    productCol.classList.add("col");

    productCol.innerHTML = `
      <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">

          <div class="card-body">
              <h5 class="card-title">${product.title}</h5>

              <p class="card-text">
                  ${product.text}
              </p>

              <div class="d-flex justify-content-between align-items-center">
                  <span class="fw-bold">$${product.price}</span>

                  <div>
                      <a href="#" class="text-dark me-2">
                          <i class="bi bi-cart3"></i>
                      </a>

                      <a href="#" class="text-dark">
                          <i class="bi bi-heart"></i>
                      </a>
                  </div>
              </div>
          </div>
      </div>
    `;

    productContainer.appendChild(productCol);
  });
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