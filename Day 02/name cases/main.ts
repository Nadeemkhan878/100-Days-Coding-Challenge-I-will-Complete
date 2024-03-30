
// *Question 3:* Name Cases: Store a person’s name in a variable, and then print that 
// person’s name in lowercase, uppercase, and titlecase.

// *Explain & TIP:* Save a name in a variable. Show it in all small letters, 
// ALL BIG LETTERS, and First Letter Big for each word. This helps learn how to change text style.

// *Answer: Please try to do it yourself first

let person_name:string="Ashrab"

console.log(person_name.toLocaleLowerCase()); //chota abc me(ashrab)
console.log(person_name.toLocaleUpperCase());//bara abc (ASHRAB)
console.log(person_name.replace(/\b,w /g, c =>c.toLocaleUpperCase())); //pehla latter bara abc me hai (Ashrab)