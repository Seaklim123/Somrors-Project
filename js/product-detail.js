const product = JSON.parse(localStorage.getItem("selectedProduct"));

if (product) {

    document.getElementById("productImage").src = product.image;

    document.getElementById("productTitle").textContent = product.text;

    document.getElementById("specialty").textContent = product.specialty || "";

    document.getElementById("skinType").textContent = product.skinType || "";

    document.getElementById("targetProblem").textContent = product.targetProblem || "";

    document.getElementById("brand").textContent = "by " + (product.brand || "");

    document.getElementById("type").textContent = product.type || "";

} 

let unitPrice = product ? product.price : 0;
let count = 1;        

    const numberElement = document.getElementById("number");
    const priceElement = document.getElementById("price");
    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const heart = document.getElementById("heart");

    priceElement.textContent = unitPrice * count;
    
    increaseBtn.addEventListener("click", () => {
      count++;
      numberElement.textContent = count;
      priceElement.textContent = unitPrice * count;
    });

    decreaseBtn.addEventListener("click", () => {
      if (count > 0) {
        count--;
        numberElement.textContent = count;
        priceElement.textContent = unitPrice * count;
      }
    });
   
    heart.addEventListener("click", () => {
    heart.classList.toggle("bi-heart");
    heart.classList.toggle("bi-heart-fill");
    });