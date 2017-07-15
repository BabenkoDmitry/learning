// With bind() we can get different functions from current function with fewer parameters.

function greeting(gender, age, firstName, lastName) {
  var gen = gender === "Male" || gender === "male" ? "Mr." : "Ms.";

  if (age > 25) {
    alert("Hello, " + gen + " " + firstName + " " + lastName + "!");
  } else {
    alert("Hey, " + firstName + " " + lastName + "!");
  }
}


greeting("Male", 37, "John", "Smith"); // Hello, Mr. John Smith!
greeting("Male", 22, "Steven", "Martin"); // Hey, Steven Martin!
greeting("Female", 19, "Ashley", "Turner"); // Hello, Ms. Ashley Turner!
greeting("Female", 56, "Barbara", "Star"); // Hey, Barbar Star!


var newGreeting = greeting.bind(null, "male", 12);


newGreeting("Jeremy", "Stone"); // Hello, Mr. Jeremy Stone!
