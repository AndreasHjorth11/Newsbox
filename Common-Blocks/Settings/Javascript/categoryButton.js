const section = document.querySelector("#section")

section.addEventListener("click", (e) => {
    const target = e.target;
    const targetParent = target.parentElement;
    if (target.classList.contains("category__circle")) {
        targetParent.classList.toggle("category__button_active");
        target.classList.toggle("category__circle_active");
    }
})