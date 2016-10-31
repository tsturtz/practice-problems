/**
 * Created by taylo on 10/31/2016.
 */

var myArray = ['mouse', 'cat', 'dog', 'human'];

function sort (arr) {
    var sorted = true;
    while (sorted == true) {
        for (var i = 1; i < myArray.length; i++) {
            if (arr[i-1] > arr[i]) {
                var temp = arr[i-1];
                arr[i-1] = arr[i];
                arr[i] = temp;
                sorted = true;
            }
        }
        sorted = false;
    }
    return arr;
}

sort(myArray);
console.log(sort(myArray));