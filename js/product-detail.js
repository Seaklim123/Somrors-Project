    let unitPrice = 15;   
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