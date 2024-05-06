//OBJECTS - KEYS AND VALUES like words and defs in a dictionary..
let productCodes = {
  aaa: "Apple",
  bbb: "Banana",
  ccc: "Cherry"
}
productCodes["ggg"] = "Grape"; //add one more key value pair

console.log["ggg"];


//I can use this two methods to delete.
// delete productCodes.bbb;
delete productCodes["bbb"];

//accessing by key using square brackets
let key = "ggg";
let value = productCodes[key]
console.log(value);

//accessing by key using dot.notation
console.log(productCodes.ccc); //Cherry

//looping requires a list, but we can get a list of keys.
const keyList = Object.keys(productCodes);
console.log(keyList);
for(let i=0; i < keyList.length; i++){
  const key = keyList[i]; //get the key
  const value = productCodes [key]; // use the key
  console.log(i, key, value);
}


const person = {firstName: "Abel", lastName: "Zewdie"}
person.age = 26; //add new key value pair using dot notation

console.log(person.firstName, person.lastName, person.age);

function displayPerson(p){
  return `
  ${p.lastName}, ${p.firstName} (${p.age})
  `;
}

const dandy = { firstName: "Dandy", lastName: "Yankee Poodle", age: 3 }
console.log(displayPerson(Abel)); //pass arguement from person
console.log(displayPerson(Dandy));