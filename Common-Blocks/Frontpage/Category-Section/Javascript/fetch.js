const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LWo7HWmutVGAz5qOU2mXFsJTZ2Ga8d3A"

axios.get(url).then(response => {
    const article = response.data.results;

    article.forEach(article => {
        const main = document.querySelector('main');

        const section = document.createElement('section');
        section.classList.add("category")
        section.setAttribute('id', article.id);

        const categoryTitle = document.createElement('article');
        categoryTitle.classList.add("category__title");

        categoryTitle.textContent = article.name;

    });
    console.log(article);
});
