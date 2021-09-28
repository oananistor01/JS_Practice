//EX. 1. Using control structures, do the following:

//a. display in the console the numbers from 1 to 20
function display1To20() {
  var displayNumbers = [];

  for (var i = 1; i <= 20; i++) {
    console.log(i);
    displayNumbers.push(i);
  }

  document.getElementById("output1").innerHTML = displayNumbers;
}

//b. display in the console the odd numbers from 1 to 20
function displayOdd1To20() {
  var displayNumbers = [];
  for (var i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
      console.log("The odd numbers are: ", i);
      displayNumbers.push(i);
    }
  }
  document.getElementById("output2").innerHTML = displayNumbers;
}

//EX. 2.   For var list = [2, 3, 5, 7, 5, 3];

//a. compute the sum of the elements of an array and display it in the console

var list = [2, 3, 5, 7, 5, 3];

function sumOfElemOfArray(list) {
  var sum = 0;
  if (list == "undefined") {
    return;
  }
  if (typeof list != "object") {
    return;
  }

  for (var i = 0; i < list.length; i++) {
    sum = sum + list[i];
  }
  console.log("Sum = ", sum);
  document.getElementById("output3").innerHTML = "The sum is = " + sum;
}

//b. compute the maximum of the elements of an array and display it in the console
var list = [2, 3, 5, 7, 5, 3];

function maxOfElemOfArr(list) {
  var max = list[0];

  if (list == "undefined") {
    return;
  }
  if (typeof list != "object") {
    return;
  }

  for (var i = 1; i < list.length; i++) {
    if (list[i] > max) {
      max = list[i];
    }
  }
  console.log("Max is: ", max);
  document.getElementById("output4").innerHTML = "The max is = " + max;
}

//c. compute how many times a certain element appears in an array
var list = [2, 3, 5, 7, 5, 3];

function nrOfElemInArr(list) {
  var count = 0;
  var elemOfArray = Number(document.getElementById("userInput").value);

  for (var i = 0; i < list.length; i++) {
    if (list[i] === elemOfArray) {
      count += 1;
    }
  }
  console.log(
    "The element ",
    elemOfArray,
    " appears ",
    count,
    " times in the array."
  );
  document.getElementById("output5").innerHTML =
    "The element " + elemOfArray + " appears " + count + " times in the array.";
}

// EX. 3.  Write a program to print Fibonacci series of the first 50 terms:
// 0 1 1 2 3 5 8 13 21 34 .....

function showFibonacci(n) {
  var nr1 = 0;
  var nr2 = 1;
  var nextNr = 0;
  var fibonacci = [];

  for (var i = 1; i <= n; i++) {
    console.log("Fibonacci nr", i, "is: ", nr1);
    fibonacci.push(nr1);
    nextNr = nr1 + nr2;
    nr1 = nr2;
    nr2 = nextNr;
  }
  document.getElementById("output6").innerHTML = fibonacci;
  console.log(fibonacci);
}

// EX. 4. Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.

// For numbers which are multiples of both three and five print “FizzBuzz”.
function fizzBuzz(n) {
  var nrFrom1To100 = [];

  for (var i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
      nrFrom1To100.push("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
      nrFrom1To100.push("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
      nrFrom1To100.push("Buzz");
    } else {
      console.log(i);
      nrFrom1To100.push(i);
    }
  }
  document.getElementById("output7").innerHTML = nrFrom1To100;
  console.log(nrFrom1To100);
}
