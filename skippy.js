/**
 * skippy_numbers

 Given the following function call:

 skippy_numbers(2);
 And the resulting output:

 [2,3,5,6,8,9,11,12];
 Create a function definition that achieves the output with the given input.
 */

function skippy_numbers(num) {
    var arr = [];
    var i;
    while (arr.length < 8) {
        arr.push(num);
        arr.push(num + 1);
        i = num+=3;
    }
    console.log(arr);
}

skippy_numbers(2);
skippy_numbers(5);