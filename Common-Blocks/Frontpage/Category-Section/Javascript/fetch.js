const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LWo7HWmutVGAz5qOU2mXFsJTZ2Ga8d3A"
const main = document.querySelector('main');
const sectionName = JSON.parse(localStorage.getItem('selectedCategories'));
console.log(sectionName);

sectionName.forEach(item => {
    console.log(item);
    const sectionName = item;

    const section = document.createElement('section');
    section.classList.add('sectionContainer');
    main.appendChild(section);

    const sectionCategory = document.createElement('section');
    sectionCategory.classList.add('category');
    section.appendChild(sectionCategory);

    const catContainer = document.createElement('div');
    catContainer.classList.add('category__container')
    sectionCategory.appendChild(catContainer);

    const catLogo = document.createElement('i');
    catLogo.classList.add('fab', 'fa-neos', 'category__icon');
    catContainer.appendChild(catLogo);

    const catTitle = document.createElement('h2');
    catTitle.textContent = sectionName;
    catTitle.classList.add('category__title-front');
    catContainer.appendChild(catTitle);

    const angleIcon = document.createElement('i');
    angleIcon.classList.add('fas', 'fa-angle-right', 'angle__icon');
    catContainer.appendChild(angleIcon);

    const divContainer = document.createElement('div');
    divContainer.classList.add('divContainer');
    section.appendChild(divContainer);

    axios.get(url).then(response => {
        const news = response.data.results;
        news.forEach(obj => {
            const imageArray = obj.multimedia;
            const imageUrl = imageArray.map(({ url }) => url)
            const sectionItem = obj.section;
            const titleItem = obj.title;
            const articleItem = obj.abstract;
            const articleUrl = obj.url;
    
            if(sectionItem === sectionName) {
                
                const link = document.createElement('a');
                link.setAttribute('href', articleUrl);
                link.setAttribute('target', '_blank');
                link.classList.add('newsLink');
                divContainer.appendChild(link);
    
                const categoryNews = document.createElement('section');
                categoryNews.classList.add('categoryNews');
                divContainer.appendChild(categoryNews);
    
                const newsImage = document.createElement('img');
                newsImage.src = imageUrl;
                newsImage.classList.add('newsImage');
                categoryNews.appendChild(newsImage);
    
                const articleDiv = document.createElement('div');
                articleDiv.classList.add('articleDiv');
                categoryNews.appendChild(articleDiv)
                
                const swipeItem = document.createElement("article");
                swipeItem.classList.add("swipeItem");
                categoryNews.appendChild(swipeItem);

                const articleTitle = document.createElement('h2');
                articleTitle.textContent = titleItem;
                articleTitle.classList.add('articleTitle');
                articleDiv.appendChild(articleTitle);
    
                const articleText = document.createElement('p');
                articleText.textContent = articleItem;
                articleText.classList.add('articleText');
                articleDiv.appendChild(articleText);

                const archiveItem = document.createElement('div');
                archiveItem.classList.add("archiveItem");
                categoryNews.appendChild(archiveItem);

                // const archiveIcon = document.createElement('i');
                // archiveIcon.classList.add('fas', 'fa-inbox', 'archiveIcon')
                // archiveItem.appendChild(archiveIcon);

                
                    console.log(archiveItem)
                main.appendChild(section);
                
             }
        })
})




    
  
});
