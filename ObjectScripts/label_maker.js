function printContact(c){
  //template string alternative include, + concatenation, or multiple .logs()
  console.log(`
  ${c.name}
  ${c.address}
  ${c.city}, ${c.state} ${c.zip}
  `);
  // Pursalane Faye
  // 121 Main Street
  // Benbrook, Texas 76126
}

//TESTS
let myInfoX = {
  name : "Abel Zewdie",
  address: "123 Shola Gebeya",
  city : "Addis Ababa",
  state : "A.A",
  zip : "09234",

}

let myInfoY = {
  name : "Nina Marie",
  address: "456 Biana Avenue",
  city : "Colomiba City",
  state : "OR",
  zip : "97018",

}



printContact(myInfoX);
printContact(myInfoY);