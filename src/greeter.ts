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

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    // return "Hello, " + person.firstName + " " + person.lastName;
    console.log(`Hello, ${person.firstName} ${person.lastName}`)
}

let rocker = new Student("Billy", "J.", "Idol");

let formalGreeting = ()=>{
    console.log(`greetings and salutations ${rocker.fullName}, it is soo good to see you!`);
}

greeter(rocker);
formalGreeting();

// document.body.textContent = greeter(user);