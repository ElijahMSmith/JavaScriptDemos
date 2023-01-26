/*
// ------------------- Variables -------------------
const x = 3;
x = 5; // ERROR!

let y = 2;
y = 1; // Fine!

var z = 9;
z = 7; // Also fine!

for(let x = 0; x < 3; x++){
    console.log(x);
}

while(true){
    console.log("Hi!");
    break;
}

// ------------------- Functions -------------------

function test1() {
	console.log("Hello, World!");
}
test1();

(function test2() {
	console.log("Hello, World Again!");
})();

const test3 = () => {
	let x = 3;
	console.log(x);
};
console.log(test3);
test3();

const test4 = () => console.log("One-Liner");
test4();

function scopeError() {
	if (true) {
		let x = 3;
	}
	console.log(x); // Error!
}
scopeError();

function notAScopeError() {
	if (true) {
		var x = 3;
	}
	console.log(x); // This works. Beware!
}
notAScopeError();

function functionArg(otherFn) {
	otherFn();
}

functionArg(() => console.log("This Works!"));
functionArg(3); // TypeError: otherFn is not a function!

function noArgs(testArg) {
	console.log(testArg);
}

noArgs();

// ------------------- Arrays -------------------
const arr = [];

// Common functions
arr.push("3");
arr.push(5);
console.log(arr.join(" "));
console.log(arr);

console.log(arr.map((oldVal) => Number(oldVal)));

arr.forEach((thing) => console.log(thing));

// Destructuring
const [thing1, thing2, thing3] = arr;
console.log(thing1, thing2, thing3);

// Spread
const newArray = [5, ...arr];
console.log(newArray);

// ------------------- Objects -------------------

const literal = {
	foo: "bar",
	name: "Eli",
};

console.log(literal);
console.log(literal["foo"], literal["bar"]);

// ------------------- Equals -------------------
console.log(null === undefined);
console.log(null == undefined);
console.log(5 === "5");
console.log(5 == "5");

// Destructuring
const { foo, name } = literal;
console.log(foo, bar);

// Spread
const newObj = {
	fizz: "buzz",
	...literal,
};
console.log(newObj);

// ------------------- Classes -------------------

class Rectangle {
	static name = "Rectangle";

	constructor(length, width) {
		this.length = length;
		this.width = width;
	}

	getArea() {
		return this.length * this.width;
	}

	get perimeter() {
		return 2 * this.length + 2 * this.width;
	}
}

const rect = new Rectangle(10, 5);
console.log(rect.getArea());
console.log(rect.perimeter);

*/
