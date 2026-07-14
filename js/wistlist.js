export function setupWishlist() {
    const hearts = document.querySelectorAll(".heart");

    hearts.forEach((heart) => {
        heart.addEventListener("click", () => {
            heart.classList.toggle("bi-heart");
            heart.classList.toggle("bi-heart-fill");
            heart.classList.toggle("active");
        });
    });

}