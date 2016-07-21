var person = { firstname: "Nas",
               lastname: "Wahab",
               address: {
                  street: "12571 9th St",
                  city: "Garden Grove",
                  state: "CA"
               }

             };


function greet(person) {
  console.log("Hi " + person.firstname);
}
greet(person);

greet({
  firstname: "Mary",
})

person.address2 = {
  street: "6123 Third St"
}

console.log(person.address2);