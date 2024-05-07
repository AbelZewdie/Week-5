//array of individual values
// empty array defining
list = []

//array leteral defining
list = [32,45,36]

//Add new array
list.push(99)




//object of property (key: value, pairs)
//define empty object
person = {} 

//define object literal
person = {name:"Abel", age: 56}

//Add new object
person.color = "black"


//COMBINE FOR THE WIN  
catalog = [
  {product:"pencil", price: 1.99},
  {product:"tablet", price: 9.99},
];



console.log(catalog[0].price);
console.log(catalog[0].product);


//For Loop
for(i=0; < catalog.length; i++){
  console.log(catalog[i].price);
  console.log(catalog[i].product);

}