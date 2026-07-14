const categories = [
  {
      name: "Toners",
      image: "images/category/toner.jpg",
      link: "ctoner.html"
  },
  {
      name: "Hair Products",
      image: "images/category/shampoo.jpg",
      link: "chair.html"
  },
  {
      name: "Foam",
      image: "images/category/foam.jpg",
      link: "cfoam.html"
  },
  {
      name: "Moisturizers",
      image: "images/category/moisturizers.jpg",
      link: "#"
  },
  {
      name: "Sunscream",
      image: "images/category/sunscreen.jpg",
      link: "#"
  },
  {
      name: "Teeth Whitening",
      image: "images/category/toothpaste.jpg"
  },
  {
      name: "Serum",
      image: "images/category/serum.jpg"
  },
  {
      name: "Pimple Patches",
      image: "images/category/pimple Patches.jpg"
  },
  {
      name: "Eye Care",
      image: "images/category/eye.jpg"
  },
  {
      name: "Perfume",
      image: "images/category/perfume.jpg"
  },
  {
      name: "Body Oil",
      image: "images/category/bodyoil.jpg"
  },
  {
      name: "Mask",
      image: "images/category/mask.jpg"
  },
  {
      name: "Sun Body",
      image: "images/category/sbody.jpg"
  },
  {
      name: "Cushion",
      image: "images/category/cushion.jpg"
  },
  {
      name: "LipStick",
      image: "images/category/lipstick.jpg"
  },
  {
      name: "Scrub",
      image: "images/category/scrub.jpg"
  },
    {
      name: "Seft-Care",
      image: "images/category/scare.jpg"
  },
  {
      name: "Makeup",
      image: "images/category/makeup.jpg"
  },

];

const container = document.getElementById("category-container");

categories.forEach(category => {
  container.innerHTML += `
  <div class="col">
    <a href="${category.link || '#'}" class="text-decoration-none text-dark">
      <div class="d-flex flex-column align-items-center">
        <div class="rounded-circle bg-light d-flex align-items-center justify-content-center mb-2"
             style="width:100px; height:100px; border:1px solid #e0e0e0; overflow:hidden;">
          <img src="${category.image}"
               alt="${category.name}"
               class="category-img">
        </div>
        <span>${category.name}</span>
      </div>
    </a>
  </div>
  `;
});