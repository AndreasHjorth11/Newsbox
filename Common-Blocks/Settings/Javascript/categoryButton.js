const section = document.querySelector("#section")
let selectedCategory = [];

section.addEventListener("click", (e) => {
    const target = e.target;
    const targetParent = target.parentElement;
    const targetCat = targetParent.closest('.category').textContent;
    if (target.classList.contains("category__circle")) {
        targetParent.classList.toggle("category__button_active");
        target.classList.toggle("category__circle_active");

        
        selectedCategory = selectedCategory.filter((array) => targetCat !== array);
        if(target.toggleAttribute('enable') === true) {
            selectedCategory.push(targetCat)
            
        };
        console.log(selectedCategory);

        localStorage.setItem("selectedCategories", JSON.stringify(selectedCategory));
    }
})