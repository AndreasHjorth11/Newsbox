let recycle = JSON.parse(localStorage.getItem('deletedItem'));

recycle.forEach(recycleItem => {    
    const main = document.querySelector('main');

    const section = document.createElement('section');
    section.classList.add("category__items")
    section.setAttribute('id', recycleItem.title);

    const categoryTitle = document.createElement('article');
    categoryTitle.classList.add("category__title");

    const swipeItem = document.createElement("article");
    swipeItem.classList.add("swipeItem");

    const deletedItem = document.createElement('div');
    deletedItem.classList.add("deletedItem");

    const archiveIcon = document.createElement('i');
    archiveIcon.classList.add('far', 'fa-trash-alt', 'trashIcon')

    swipeItem.textContent = recycleItem.name;
    section.appendChild(deletedItem)
    section.appendChild(swipeItem)
    deletedItem.appendChild(archiveIcon);
    main.appendChild(section);
    console.log(recycleItem);
});