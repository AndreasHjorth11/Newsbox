const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LWo7HWmutVGAz5qOU2mXFsJTZ2Ga8d3A"
const categorySection = document.querySelector("#section");
const categoryArray = [];

axios.get(url).then(response => {
    const article = response.data.results;

    article.forEach(article => {
        if (!categoryArray.includes(article.section)) {
            categoryArray.push(article.section);
        }
    });

    console.log(categoryArray);

    categoryArray.forEach((cat) => {
        if(cat === 'world' || cat === 'sports' || cat === 'business' || cat === 'health' || cat === 'movies' || cat === 'arts' || cat === 'magazine' || cat === 'technology') {
            const wrapper = document.createElement("div");
            wrapper.classList.add("category");
            section.appendChild(wrapper);

            const heading = document.createElement("h2");
            heading.classList.add("categoryTitle")
            heading.textContent = cat;
            wrapper.appendChild(heading)

            
            const button = document.createElement("button");
            button.classList.add("category__button");
            wrapper.appendChild(button);

            const circle = document.createElement("div");
            circle.classList.add("category__circle");
            button.appendChild(circle)
        }
    });
    
});
