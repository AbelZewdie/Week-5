
// always in the last place you look?

const data = [
  { name:"Abel", age: 26},
  { name:"Bob", age: 16},
  { name:"Carol", age: 46},
  { name:"Ted", age: 76},
  { name:"Alice", age: 56},
];

const RETIREMENT_AGE = 65;

//find first person who could retire.
// FOR IS A CLASSIC
let i;
for(i=0; i < data.length; i++){
  const person = data[i];
  if(person.age >= RETIREMENT_AGE){
    console.log("FOUND AT:", i, " Name:", person.name);
    break; //exit loop early as we found our match
  }
}
console.log("LAST LOOKED AT:", i);