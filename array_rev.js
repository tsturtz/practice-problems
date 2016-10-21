/**
 * Created by taylo on 10/21/2016.
 */

function array_rev(arr){
    //var another_arr = arr.reverse();
    var another_arr = [];
    for(var i = arr.length-1; i >= 0; i--){
        another_arr.push(arr[i]);
        console.log(another_arr);
    }
    return another_arr;
}

var an_arr = ['hello',45,'bob','what','23'];
array_rev(an_arr);
