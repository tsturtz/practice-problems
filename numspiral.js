/*
 Numeric Spirals

 Build a function that takes one parameter and prints out the Fibonacci sequence based on the input parameter.

 Write a function that takes one parameter
 Parameter 1 - A number
 The function should output the Fibonacci sequence to the number of spaces set by parameter 1 starting from zero.
 Example:
 fibSequence(12);
 Output - 0 1 1 2 3 5 8 13 21 34 55 89
 */

function fibSequence (num) {
    var fib = [0,1,1];
    for (var i=3; i<=num-1; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    console.log(fib);
}

fibSequence(12);