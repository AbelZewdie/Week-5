
const fruitList = ["apple", "orange", "pear"];

for (text of fruitList) {
  console.log(text);
}

for (item in fruitList) {
  console.log(item);
}

//////////////////////////////////////////////

const peopleList = [
{name:"Abel", amount: 123},
{name:"Kevin", amount: 456},
{name:"Derrick", amount: 789},
]

for (person of peopleList){
  console.log(person.name);
}