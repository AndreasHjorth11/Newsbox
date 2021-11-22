const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LWo7HWmutVGAz5qOU2mXFsJTZ2Ga8d3A"

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
        if(cat === 'world' || cat === 'sports' || cat === 'business' || cat === 'climate') {
            console.log(cat);
        }
    });
    
});
