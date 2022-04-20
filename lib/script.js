// DOM Variables

const generate = document.getElementById('enhance-button');

var itemSelector = document.getElementById('item-type'),
    itemSelected = itemSelector.options[itemSelector.selectedIndex].value;
    outputname = document.getElementById('output-name'),
    textarea = document.getElementById('output-textarea');

// Variables

var itemResult = {
  name: 'Name',
  type: 'Item',
  rarity: 'Rarity',
};

// Name



// Itemtype Matcher

var matches = itemDB.filter(item => item.subtype === itemSelected);

// Random Selection from matches

function itemPicker() {
  let randomItem = Math.floor(Math.random() * matches.length);
  itemResult.name = matches[randomItem].name;
  itemResult.rarity = matches[randomItem].searchableRarity;
  }

// activation

generate.addEventListener('click', function() {
    itemPicker();
    outputname.innerText = itemResult.name;
    textarea.innerText = itemResult.rarity;
})
