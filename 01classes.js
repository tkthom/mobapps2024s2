

class Person {

    //fields would be defined here in C#

    //name and age, these are parameters for the constructor
    constructor(name, age) {
        //in javascript
        //we use the this keyword to attach fields

        this.name = name;
        this.age = age;


    }

}

//x and y are parameters
function f(x, y) {


}

//1 and 2 are arguments
f(1, 2);

// primitive: number, String, boolean
// special-builtin: Array ( [] )

//Example 1:
//Constructing a object of a class


let p1 = new Person("Jeff", 32); //When we call 'new', 
    //it allocations memory for the object of a particular type


let p2 = new Person("Alice", 40); //p2 is another instance of Person,
    //So, p1 and p2 are not the same object, they are different.

console.log(p1.name);
console.log(p1.age);

console.log(p2.name);
console.log(p2.age);


//Question 1:
// Are these the same object? -> Different

let p3 = new Person("Kelly", 43); //0x1000
let p4 = new Person("Kelly", 43); //0x2000

p4.name = "Geoff";

//Question 2:
// Are these the same object? -> Same

let p5 = new Person("Ken", 50); //0x3000
let p6 = p5; //p6 is assigned to address 0x3000, which is p5

// p6 refers to p5, because p6 has been aigned the address of p5

p6.name = "Kenneth";

console.log(p5.name);




