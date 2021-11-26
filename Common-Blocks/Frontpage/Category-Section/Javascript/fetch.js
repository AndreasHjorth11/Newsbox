const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LWo7HWmutVGAz5qOU2mXFsJTZ2Ga8d3A"

axios.get(url).then(response => {
    const news = response.data.results;

    // const result = news.filter(CheckCategory);
    // function CheckCategory(category) {
    //     return category >= news.title;
    // }
    // console.log(result);

    let link = document.querySelector("#link");

    news.forEach(news => {
        const main = document.querySelector('main');

        const section = document.createElement('section');
        section.classList.add("category__items")
        section.setAttribute('id', news.id);

        const categoryTitle = document.createElement('article');
        categoryTitle.classList.add("category__title");

        const swipeItem = document.createElement("article");
        swipeItem.classList.add("swipeItem");

        const archiveItem = document.createElement('div');
        archiveItem.classList.add("archiveItem");

        const archiveIcon = document.createElement('i');
        archiveIcon.classList.add('fas', 'fa-inbox', 'archiveIcon')

        swipeItem.textContent = news.title;
        section.appendChild(archiveItem)
        section.appendChild(swipeItem)
        archiveItem.appendChild(archiveIcon);
        main.appendChild(section);

    });

    
    console.log(news);
});
