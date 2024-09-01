const api_key = 'd5c1f62034384dd49b05fc6668fe60fc';
const url = 'https://newsapi.org/v2/everything?q=';
const topics =[]


window.addEventListener('load', () => {
    fetchNews('marvel');
});

async function fetchNews(query) {
    try {
        const response = await fetch(`${url}${query}&apiKey=${api_key}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        bindData(data.articles);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

function bindData(articles) {
    const template = document.getElementById('template-news-card');
    const newsCardContainer = document.getElementById('news-container');
    newsCardContainer.innerHTML = '';

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const clone = template.content.cloneNode(true);
        fillDataInCard(clone, article);
        newsCardContainer.appendChild(clone);
    });
}

function fillDataInCard(cardClone, article) {
    const img = cardClone.querySelector('.news-img');
    const title = cardClone.querySelector('.news-title');
    const source = cardClone.querySelector('.news-source');
    const description = cardClone.querySelector('.news-desc');

    img.src = article.urlToImage;
    title.innerHTML = article.title;
    source.innerHTML = `${article.source.name} · ${new Date(article.publishedAt).toLocaleDateString()}`;
    description.innerHTML = article.description;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}


