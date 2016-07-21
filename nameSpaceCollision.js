var greet = "Hello!";
var greet = "Hola!";

console.log(greet);

var english = {
  greetings: {
    basic: "Hello"
  }
};
var spanish = {};

english.greetings.greet = "Hello there";
spanish.greet = "Hola";

console.log(english.greetings.greet);
console.log(english.greetings.basic);
console.log(spanish.greet);