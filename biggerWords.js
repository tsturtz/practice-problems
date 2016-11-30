/*
 Bigger words

 Build a function that takes in a string and an array of strings. The function should output an array of strings that are longer than the single input string.

 Write a function that takes two parameters
 Parameter 1 - A string
 Parameter 2 - An array of strings
 The function should output all the words from the input array (parameter 2) that are longer than the input string (parameter 1)
 Example:
 var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];
 biggerWords('whales', myArray);
 Output - ['reptile', 'mammoth', 'turtles']
 */

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

function fun () {
    console.log('hey');
}

function biggerwords (string,arrOfStrings) {
    var len = string.length;
    for (var i=0; i < arrOfStrings.length; i++) {
        if (arrOfStrings[i].length <= len ) {
            console.log('this word is shorter than or the same length as ' + string + ' : ' + arrOfStrings[i] );
        } else {
            console.log('this word is longer than ' + string + ' : ' + arrOfStrings[i] );
        }
    }
}

biggerwords('whales', myArray);