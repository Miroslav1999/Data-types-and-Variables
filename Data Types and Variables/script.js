// Problem 1. Starts Here

var intLiterals = 24;
var floatLiterals = 51.0159;
var stringLiterals = 'Kotka';
var boolLiterals = false;
var objectLiterals = {
	name: 'Dimitar',
	age: '48'
	};
var arrayLiterals = [15, 12, 14];
var undefinedLiterals = undefined;
var nullLiterals = null;

// Problem 2. Starts Here

var stringQuoted = " `'How you doin'?', Joey said'.";

// Problem 3. Starts Here

var typeIntLiterals = typeof(intLiterals);
var typeFloatLiterals = typeof(floatLiterals);
var typeStringLiteralss = typeof(stringLiterals);
var typeBoolLiterals = typeof(boolLiterals);
var typeObjectLiterals = typeof(objectLiterals);
var typeArrayLiterals = typeof(arrayLiterals);
var typeNullLiterals = typeof(nullLiterals);
var typeUndefinedLiterals = typeof(undefinedLiterals);

// Problem 4. Starts Here

var typeUndefinedLiterals = typeof(undefinedLiterals);
var typeNullLiterals = typeof(nullLiterals);

// Print in WEB 

var firstElementOfProblem = document.getElementById('firstContainer');
var secondElementOfProblem = document.getElementById('secondContainer');
var thirdElementOfProblem = document.getElementById('thirdContainer');
var fourthElementOfProblem = document.getElementById('fourthContainer');
firstElementOfProblem.innerHTML += "Integer Literal = " + intLiterals + " <br />";
firstElementOfProblem.innerHTML += "Floating Literal = " + floatLiterals + " <br />";
firstElementOfProblem.innerHTML += "String Literal = " + stringLiterals + " <br />";
firstElementOfProblem.innerHTML += "Boolean Literal = " + boolLiterals + " <br />";
firstElementOfProblem.innerHTML += "Object Literal = " + JSON.stringify(objectLiterals) + " <br />";
firstElementOfProblem.innerHTML += "Array Literal = ["+ arrayLiterals + "] <br />";
firstElementOfProblem.innerHTML += "Undefined Literal = " + undefinedLiterals + " <br />";
firstElementOfProblem.innerHTML += "Null Literal = " + nullLiterals;

secondElementOfProblem.innerHTML += stringQuoted;

thirdElementOfProblem.innerHTML += "TypeOf(intLiterals) = " + typeof(intLiterals) + " <br />";
thirdElementOfProblem.innerHTML += "TypeOf(floatLiterals) = " + typeof(floatLiterals) + " <br />";
thirdElementOfProblem.innerHTML += "TypeOf(stringLiterals) = " +typeof(stringLiterals) + " <br />";
thirdElementOfProblem.innerHTML += "TypeOf(boolLiterals) = " + typeof(boolLiterals) + " <br />";
thirdElementOfProblem.innerHTML += "TypeOf(objectLiterals) = " + typeof(objectLiterals) + " <br />";
thirdElementOfProblem.innerHTML += "TypeOf(arrayLiterals) = " + typeof(arrayLiterals) + " <br />";
thirdElementOfProblem.innerHTML += "TypeOf(nullLiterals) = " + typeof(nullLiterals) + " <br />";
thirdElementOfProblem.innerHTML += "TypeOf(undefinedLiterals) = " + typeof(undefinedLiterals);

fourthElementOfProblem.innerHTML += "Type Of Null = " + typeof(nullLiterals) + " <br />";
fourthElementOfProblem.innerHTML += "Type Of Undefined = " + typeof(undefinedLiterals); 
