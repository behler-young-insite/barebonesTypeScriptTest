// interface Person {
//     firstName: string;
//     lastName: string;
// }
// let greeter = (person: Person)=>{
//     // return "Hello, " + person.firstName + " " + person.lastName;
//     return `Hello, ${person.firstName} ${person.lastName}`; // looks like it handles string interpolation
// }
// let user = { firstName: "Jane", lastName: "User" };
// document.body.textContent = greeter(user);
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    // return "Hello, " + person.firstName + " " + person.lastName;
    console.log("Hello, " + person.firstName + " " + person.lastName);
}
var rocker = new Student("Billy", "J.", "Idol");
var formalGreeting = function () {
    console.log("greetings and salutations " + rocker.fullName + ", it is soo good to see you!");
};
greeter(rocker);
formalGreeting();
// document.body.textContent = greeter(user);
