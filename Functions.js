// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(a,b){
    // Your answer here
    if (a < b) {
    return  b;
    } else {
      return a;
    }
  }
console.log (max(5,10));




// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(a, b, c){
  if (a > b && a > c){
    return a;
  }else if (b > a && b > c){
     return b;
  }else if (c > a && c > b){
     return c;
  }
}
     console.log(maxOfThree(3,5,10));

    // Your answer here



// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    // Your answer here
    if (char === 'a' || 'e' || 'i' || 'o' || 'u' ){
    return true;
  }else {
   return false;
 }
}

console.log (isVowel('a'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(1,2) {
return (1 + 2);
}
console.log(sum);

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(2, 4, 6) {
return (2 + 4 + 6) / 3;

}
console.log(avg(2, 4, 6));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength("string") {
  return string.length;
}


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(a, b) {
if (b > a) {
return true;
 } else {
  return false;
 }

}
console.log(greaterThan(2, 4));

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(parameter) {
  return "Hello, " + parameter + "!";

}
console.log(greet("Myron"))


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib(word1, word2, word3, word4)
return "When" + word1 + " " + words2 + " " + word3 + " " + "Marching" + " " + word4 + "!"
console.log(madlib("the", "Saints", "go", "in"));
