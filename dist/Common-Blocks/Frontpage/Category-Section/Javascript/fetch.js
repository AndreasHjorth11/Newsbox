"use strict";

var url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LWo7HWmutVGAz5qOU2mXFsJTZ2Ga8d3A";
axios.get(url).then(function (response) {
  var article = response.data.results;
  article.forEach(function (article) {
    var main = document.querySelector('main');
    var section = document.createElement('section');
    section.classList.add("category");
    section.setAttribute('id', article.id);
    var categoryTitle = document.createElement('article');
    categoryTitle.classList.add("category__title");
    categoryTitle.textContent = article.name;
  });
  console.log(article);
});