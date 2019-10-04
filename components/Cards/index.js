// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

function articleCreator(articleInfo) {
  // define new elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const authorName = document.createElement('span');

  // set class names
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  // set text content
  headline.textContent = articleInfo.headline;
  img.src = articleInfo.authorPhoto;
  authorName.textContent = `By ${articleInfo.authorName}`;

  // set up structure of elements
  card.appendChild(headline);
  card.appendChild(author);

  return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
  console.log(response.data);
  const articles = response.data.articles;
  for (topic in articles) {
    articles[topic].forEach(article => {
      cardsContainer.appendChild(articleCreator(article));
    });
  }
});
