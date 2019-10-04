// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

function newTabs(newInfo) {
  // define new elements
  const tab = document.createElement('div');
  // set class names
  tab.classList.add('tab');
  // set text content
  tab.textContent = newInfo;
  // set up structure of elements

  return tab;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
  console.log(response.data);
  response.data.topics.forEach(topic => {
    topics.appendChild(newTabs(topic));
  });
});
