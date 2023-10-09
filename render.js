
document.body.style.backgroundColor = `rgb(${80} , ${19} , ${19})`;
let root = document.querySelector(".container");
let btn = document.querySelector(".favorite");
let favoriteBooks = [];

function render() {
    let template = BOOKS.map((item) => {
        const { imgSrc, id, title, author, published_date, language, genre } = item;
        return `<div class ="card">
                <img src = "./image/${imgSrc}">    
                <span class = "title-id">${id}</span>
                <div class = "main-title">
                <div class="topic">
                <h1>${title}</h1>
                <h2>${author}</h2>
                </div>
                <button class="favorite" onclick="addFavoriteBooks(${id})">افزودن به علاقمندی</button>
                </div>
                <div class="detail">
                <span class = "title-date">${published_date}</span>
                <span class = "title-lang">${language}</span>
                <span class = "title-genre">${genre}</span>
                </div>
                </div>`;
    });

    root.innerHTML = template.join("");
}

function addFavoriteBooks(favoriteId) {
    favoriteBooks.push(favoriteId)
    localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks))
    let result = JSON.parse(localStorage.getItem("favoriteBooks"));
    // console.log(result)
}

addFavoriteBooks()
window.addEventListener("load", render);

function renderFavorite() {
    let favoriteTemplate = favoriteBooks.map((item) => {
        return BOOKS.find(book => book.id === item)
    })
    favoriteTemplate.shift()
    let resultTemplateFavorite = favoriteTemplate.map((item) => {

        const { imgSrc, id, title, author, published_date, language, genre } = item;
        return `<div class ="card">
        <span class = "title-id">${id}</span>
        <img src = "./image/${imgSrc}">    
        <div class = "main-title">
                <div class="topic">
                <h1>${title}</h1>
                <h2>${author}</h2>
                </div>
                <button class="favorite" onclick="addFavoriteBooks(${id})">افزودن به علاقمندی</button>
                </div>
                <div class="detail">
                <span class = "title-date">${published_date}</span>
                <span class = "title-lang">${language}</span>
                <span class = "title-genre">${genre}</span>
                </div>
                </div>`;
    });

    root.innerHTML = resultTemplateFavorite.join("");
    // console.log(favoriteTemplate);
}
