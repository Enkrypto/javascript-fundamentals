// ES5 Syntax
function Person(firstName,lastName,age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;

	this.sayName = function() {
		return 'Hello, my name is ' + this.firstName + ' ' + this.lastName + '.';
	}
}
var bob = new Person('Bob', 'Elroy', 36);
console.log(bob.sayName());

// ES6 Syntax
class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;

		this.sayName = () => `Hello, my name is ${this.firstName} ${this.lastName}.`
	}
}
const bob = new Person('Bob', 'Elroy', 36);
console.log(bob, bob.sayName());

// Object Literal
const bob = {
	firstName: 'Bob',
	lastName: 'Elroy',
	age: 36,

	// 'this' is bound to global object in the case of objet literals.
	// Thus, the object literal's name must be specifically referenced instead.
	sayName: () => `Hello, my name is ${bob.firstName} ${bob.lastName}.`
}
console.log(bob.sayName());