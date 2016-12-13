/**
 * sort by field

 Create a function, sort_object_list_by_field(), that does the following:

 Takes a list of objects, and returns an array of those objects, sorted by an arbitrary property
 Input:

 input_array: an array of objects
 sort_field: property to sort by
 Output:

 output_array, an array sorted by the given field of each object
 Example:

 var input_array =
 [
 {name: 'John', age:42, gender:'M'},
 {name: 'Jack', age:34, gender:'M'},
 {name: 'Michael',age:40, gender: 'M'},
 {name: 'Kendra',age:48, gender:'F'}
 ]
 output = sort_object_list_by_field(input_array, age); console.log(output); //outputs

 [
 {name: 'Jack', age:34, gender:'M'},
 {name: 'Michael',age:40, gender: 'M'},
 {name: 'John', age:42, gender:'M'},
 {name: 'Kendra',age:48, gender:'F'}
 ]
 Put your solution in answer.js

 hint: Here is an example of a bubble sort in both psuedo-code and javascript which can serve as the basis of your sorting function.
 */

var input_array =
    [
        {name: 'John', age: 42, gender: 'M'},
        {name: 'Jack', age: 34, gender: 'M'},
        {name: 'Michael', age: 40, gender: 'M'},
        {name: 'Kendra', age: 48, gender: 'F'}
    ];

function sort_object_list_by_field(input, sort) {
    var swapped = true;
    while (swapped) {
        swapped = false;
        for (var i = 0; i < input.length -1; i++) {
            if (input[i][sort] > input[i + 1][sort]) {
                var temp = input[i];
                input[i] = input[i + 1];
                input[i + 1] = temp;
                swapped = true;
            }
        }
    }
    var output = input;
    console.log(output);
}

sort_object_list_by_field(input_array, 'age');