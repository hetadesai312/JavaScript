//1
Let x = 0.1 + 0.2 === 0.3 // false

//It will return false as javascript uses binary floating point number and return endless representation.

//2
Console.log("1");
setTimeout(() => { console.log("2");} , 2500);
Console.log("3");

/*o/p

1
3
2
*/
//3
Function first(){
	Console.log("1St function executed !");
	Second();
	Console.log("Again 1St function executed !");
}

Function second(){
	Console.log("2nd function executed !");
}

First();
Console.log("Global execution context !");

/*o/p

1St function executed !
2nd function executed !
Again 1St function executed !
Global execution context !
*/

//4
For(let i=0; i<5;i++)
{
	Console.log("Count is : "+ i);
}
Console.log("Final value of I : " + i);

/*o/p
Count is : 1
Count is : 2
Count is : 3
Count is : 4
Error : Uncaught ReferenceError : i is not defined

You are getting error becaue let is having block scope and that is why you can not access I outside of for loop block.

If you use var instead of let, last line will give you "Final value of I : 5" because var is having function scope.
*/
//5
Console.log(x);
Var x = 10;

/*o/p
Undefined

It is getting undefine as output because of javascript hoisting.
Hoisting is javascript default behaviout which will move javascript function and variable declaration up before any code. So when x declaration move up nothing is assign to x and that is why it is undefined and not throwing ant error.

If you use let instead of var, it will throw error :
Error : Uncaught ReferenceError: Cannot access 'x' before initialization
*/
//6
//Reverse each other word of given string
//"I really don’t like reversing strings!"
// o/p " I yllaer don’t ekil reversing !sgnirts"

Function ReverseString(str){
	Console.log(str);
	Let wordArray = str.split(' ');
	Console.log(wordArray);
	Let newArray = [];
	For(let i= wordArray.length;I >= 0; i--){
		If(i%2 !== 0){
			Let reverseWord = wordArray[i].split('').reverse().join('');
			newArray.push(reverseWord);
		} else {
			newArray.push(wordArray[i]);
		}
	}
	Return newArray.reverse().join(' ');
}
Console.log(ReverseString("I really don’t like reversing strings!"));

//7

Var first_var = "42";
Var second_var = 42

Console.log(first_var == secod_var); // true
Console.log(first_var ===  secod_var); //false

//8

Var first_var = "42";
Var second_var = "42";

//How to get 84

Console.log(first_var + secod_var); // 4242
Console.log(eval(first_var) + eval(secod_var)); //84

//9
Var product = {name:"Laptop", price:"70,000"};
Var newProduct = Object.create(product);
Delete newProduct.price;
Console.log(newProduct.price);
Console.log(product.price);

/*o/p
70,000
70,000
*/
/*Delete opratoor delete object own propery and value . Here newProduct still show 70000 as price is it prototype property not its own property.

Delete opratoor does not delete prototype property.

If you write "delete product.price"
o/p
Undefined
Undefined*/

//10
Const product = {
	Name:"laptop"
};

Let accessories = {
	name = "Headphone"
};

Product = accessories;

/*o/p
Error : Uncaught TypeError : Assignment to constant variable.

Product is const and its read only.
*/
//11
Let x = this;
Console.log(x);

/*o/p
[object window] // return global object
*/
//12

//How to add in the end of the array and How to add in the beginning of array

//In ES5

Var myArray = ['a', 'b', 'c'];
myArray.push("end");
myArray.unshift('start');
Console.log(myArray);

/*o/p
['start', 'a', 'b', 'c', 'end']
*/
//In ES6

Var myArray = ['a', 'b', 'c'];
myArray = ["start",…myArray];
myArray = […myArray, "end"];
//above two sentences or below one sentence are same.
myArray = ["start",…myArray, "end"]; // using spread operator

Console.log(myArray);
['start', 'a', 'b', 'c', 'end']

//13
//How do you create a private variable in javascript ?
//Declare variable inside function scope and return from function.
	
Function secretVariable(){
	Var private = "super secret code";
	Return function(){
		Return private;
	}
}
Var getPrivateVariable = secretVariable();

Console.log(secretVariable());
/*o/p
/ (){
Return private;
}
Undefined 


Console.log(getPrivateVariable()); // o/p super secret code
*/

//14
//What is the output of this function?

Var Num = 4;
Function Outer(){
	Var Num = 2;
	Function Inner(){
		Num++;
		Var Num = 3;
		Console.log(Num);
	}
	Inner();
}
Outer();

/*o/p
3
*/

//15
//What is the output ?
	
	Console.log(typeof typeof 1);
	
/*o/p
String
*/

//16
//What is the output >

Var hero = {
	_name : 'Heta Desai',
	getSecretIdentity: function(){
		Return this._name;
	}
};

Var stoleSecretIdentity = hero.getSecretIdentity;

Console.log(stoleSecretIdentity());
Console.log(hero.getSecretIdentity());

/*o/p
Undefined
Heta Desai
*/

//Need to bind the object literal to new assignment

Var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

Console.log(stoleSecretIdentity());
Console.log(hero.getSecretIdentity());

/*o/p
Heta Desai
Heta Desai
*/

//17
//Write a javascript program to sort an array of javascript objects ?

Var library = [
	{
		Title:'the Road',
		Author:'Bill gates',
		libraryId: 1254
	},
	{
		Title:'Walter Isaacson',
		Author:'Steve Jobs',
		libraryId: 4264
	},
	{
		Title:'',My Experiments with trut
		Author:'Mahatma Gandhi',
		libraryId: 3245
	}
]

//18
// How can we implement Singleton Pattern in ES6	
	class Singleton {
	static #instance = null;
	static getInstance() {
	return Singleton.#instance | (Singleton.#instance = this);
	}
	constructor() {
	if (this.constructor === Singleton)
	throw new Error('Cannot create instance of Singleton. Use Singleton.getInstace()');
	}
	}
	var x = Singleton.getInstance();
	var y = Singleton.getInstance();
	console.log(Object.is(x, y));
	//console.log(Singleton.#instance);
	try {
	var z = new Singleton();
	console.log(z);
	} catch(ex) {
	console.log(ex.message);
	}



//19
//How to flatten the array ?

Var uglyArray = [[1, 2, [3,[5]]], 4];

Function flatten(items){
	Const flat = [];
	Items.forEach(item => {
		If(Array.isArray(item)){
			Flat.push(…flatten(item));
		} else {
			Flat.push(item);
		}
	});
	Return flat;
}

Flatten(uglyArray);


//20

Const x = [1,2,3];

X[-1] = -1;

Console.log(x[x.indexOf(10000)]);

/*o/p
-1
*/
//21

Const ary = [1,2,15,30,5, 45,7];
Ary.sort();
/*
o/p
1,15,2,30,45,5,7

Above example to sort desending(<) or assending(>) order you need to apply callback function
*/
Console.log(arr.sort((a,b) => {
	Return a>1;
}));

//22
// run this in node v4 to see the expected behavior

this.test = "attached to the module";

var foo = {
  test: "attached to an object"
};

// a method to create methods
foo.method = function(name, cb){
  this[name] = cb;
};

// use standard callback function and get
// the expected "this"
foo.method("bar", function(){
  // this one will be what you expected
  console.log(this.test); 
});

foo.bar(); // => "attached to an object"
/*
o/p
attached to an object
*/

//Here o/p is  "attached to an object" because we are using normal call back function. If you use arrow function output will be different because  You Can’t Override An Arrow Function’s “this”. See below example

// run this in node v4 to see the "expected" behavior

this.test = "attached to the module";
var foo = {
  test: "attached to an object"
};

foo.method = function(name, cb){
  
  // bind the value of "this" on the method
  // to try and force it to be what you want
  this[name] = cb.bind(this);
  
};

foo.method("bar", () => {
  console.log(this.test); 
});

foo.bar();

/*o/p
Normally, having the .bind call on line 12 would force the value of “this” to always be the object that I want, on the method I am creating. But with arrow functions, this isn’t the case. No matter how hard I try to .bind the method to a specific context, it will not change. The ES6 arrow function syntax will always override any previously bound or dynamically determined value of “this”.

It seems, then, that arrow functions have a pretty severe limitation in their use. This limitation introduces yet another scenario where the specific behavior of a feature related to “this” has to be understood completely, or it will drive more developers to madness.
*/




