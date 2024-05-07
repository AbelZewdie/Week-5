

//GIVEN

let products = [
  {name: "Gummy Worms", price: 5.79},
  {name: "Plain M&Ms", price: 2.89},
  {name: "Peanut M&Ms", price: 2.89},
  {name: "Swedish Fish", price: 3.79},
  // TODO: fill the array with 10 candies of various
  // price ranges
  ];

// FUNCTIONS
function showProperty(item, propertyName){
  console.log(item[propertyName])
}

function showPropertyForList(list, propertyName){
  for(item of list){
      showProperty(item, propertyName);
  }
}


///LIST FUNCTIONS
function itemOfProducts(costLimit){
  const outputList = [];
  for(item of products){ 
    if(Number(item.price) <= costLimit){
      outputList.push(item);
    }
  }
  return outputList;
}

//QUESTIONS

// Which candies costs less than $4.00?
// showPropertyForList(itemOfProducts(4), "name");


let results = itemOfProducts(4);
console.log(results); 
showPropertyForList(results, "name");
// Which candies has "M&M" its name?
// Do we carry "Swedish Fish"?