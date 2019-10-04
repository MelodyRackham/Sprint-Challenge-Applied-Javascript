// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function newHeader(info) {
  // define new elements
  const header = document.createElement('div'),
    date = document.createElement('span'),
    lambdaTimes = document.createElement('h1'),
    temp = document.createElement('span');

  // set class names
  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  // set text content
  date.textContent = 'March 28, 2019';
  lambdaTimes.textContent = 'Lambda Times';
  temp.textContent = '98°';

  // setup structure of elements
  header.appendChild(date);
  header.appendChild(lambdaTimes);
  header.appendChild(temp);
  return header;
}
// add it to the DOM in the .header-container component
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(newHeader());
