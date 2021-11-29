const section = document.querySelector("#section")
let selectedCategory = [];

section.addEventListener("click", (e) => {
    const target = e.target;
    const targetParent = target.parentElement;
    const targetCat = targetParent.parentElement;
    console.log(targetCat);
    if (target.classList.contains("category__circle")) {
        targetParent.classList.toggle("category__button_active");
        target.classList.toggle("category__circle_active");

        const catObject = {
            category: "targetCat",
            enable: target.toggleAttribute('enable'),
        }

        console.log(catObject);

        selectedCategory = selectedCategory.filter((obj => catObject.category !== obj.category))
        if(catObject.enable === true) {
            selectedCategory.push(catObject);
        }

        localStorage.setItem("selectedCategories", JSON.stringify(selectedCategory));
    }
})