// DOM Variables

const itemSelector = document.getElementById('item-type'),
    outputname = document.getElementById('output-name'),
    textarea = document.getElementById('output-textarea'),
    generate = document.getElementById('enhance-button'),

// Variables

var itemResult = {
  name: 'Name',
  type: 'Item',
  rarity: 'Rarity',
};

// Name



// Itemtype Matcher

var matches = itemDB.filter(item => item.subtype === itemSelector);

// Random Selection from matches

function itemNamer() {
  let randomItem = Math.floor(Math.random() * matches.length);
  itemResult.name = matches[randomItem].name;
}

// activation

generate.addEventListener('click', function() {
    itemNamer();
    outputname.innerText = itemResult.name;
    console.log(itemResult.name);
})
