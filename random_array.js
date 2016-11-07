/**
 * Created by taylo on 10/31/2016.
 */

var input_array = [5,3,2,5,1]; // original array

function randomize_list(arr) {
    for (var i = 0; i < arr.length; i++) { // iterate through array
        var randomIndex = Math.floor(Math.random() * (i + 1)); // randomize an index position between 0 and (i+1)
        var temp = arr[i]; // assign current index position to temp
        arr[i] = arr[randomIndex]; // assign previously decided random index position to the current index position
        arr[randomIndex] = temp; // take what is stored in temp and place it where the random index position was
    }
    return arr;
}

//var output = randomize_list(input_array);
//console.log(output);

////////////////////////////////////////

function randomize_array(arr) {
    var random_index = Math.floor(Math.random() * arr.length);
    var random_value = arr[random_index];
    console.log(random_value);
    arr.splice(random_index,1);
    arr.splice(random_index,0,random_value);
    return arr;
}

var output2 = randomize_array(input_array);
console.log(output2);