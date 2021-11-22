const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LWo7HWmutVGAz5qOU2mXFsJTZ2Ga8d3A"

axios.get(url).then(response => {
    const article = response.data.results;

    article.forEach(article => {
        const main = document.querySelector('main');

        const section = document.createElement('section');
        section.classList.add("category__items")
        section.setAttribute('id', article.id);

        const categoryTitle = document.createElement('article');
        categoryTitle.classList.add("category__title");

        const swipeItem = document.createElement("article");
        swipeItem.classList.add("swipeItem");

        const deleteItem = document.createElement('div');
        deleteItem.classList.add("deleteItem");

        
      
        const archiveItem = document.createElement('i');
        archiveItem.classList.add('fas', 'fa-inbox', 'archiveItem')

        swipeItem.textContent = article.title;
        section.appendChild(deleteItem)
        section.appendChild(swipeItem)
        deleteItem.appendChild(archiveItem);
        main.appendChild(section);

    });
    console.log(article);
});
