const brands = [
    { name: "Laneige", page: "laneige.html" },
    { name: "Medicube", page: "medicube.html" },
    { name: "Beauty of Joseon", page: "beautyofjoseon.html" },
    { name: "Anua", page: "anua.html" },
    { name: "SKIN1004", page: "skin1004.html" },
    { name: "Torriden", page: "torriden.html" }
];

const searchInput = document.getElementById("searchInput");
const suggestions = document.getElementById("suggestions");

searchInput.addEventListener("input", function () {

    const keyword = this.value.trim().toLowerCase();

    suggestions.innerHTML = "";

    if (keyword === "") {
        return;
    }

    const matchedBrands = brands.filter(brand =>
        brand.name.toLowerCase().startsWith(keyword)
    );

    matchedBrands.forEach(brand => {

        const item = document.createElement("a");

        item.href = "#";
        item.classList.add(
            "list-group-item",
            "list-group-item-action"
        );

        item.textContent = brand.name;

        item.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.href = brand.page;
        });

        suggestions.appendChild(item);
    });
});