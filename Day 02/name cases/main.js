// *Question 3:* Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase, uppercase, and titlecase.
// *Explain & TIP:* Save a name in a variable. Show it in all small letters, 
// ALL BIG LETTERS, and First Letter Big for each word. This helps learn how to change text style.
// *Answer: Please try to do it yourself first
var person_name = "Ashrab";
console.log(person_name.toLocaleLowerCase()); //chota abc me
console.log(person_name.toLocaleUpperCase()); //bara abc
console.log(person_name.replace(/\b,w /g, function (c) { return c.toLocaleUpperCase(); })); //
