/**
 * Created by taylo on 10/23/2016.
 */

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];

var numArr = [];
var boolArr = [];
var stringArr = [];
var sortArr = [];

function groupArray(param) {
    for (var i = 0; i < param.length; i++) {
        if (typeof param[i] === 'number') {
            numArr.push(param[i]);
            console.log(numArr);
        }
        else if (typeof param[i] === 'string') {
            stringArr.push(param[i]);
            console.log(stringArr);
        }
        else if (typeof param[i] === 'boolean') {
            boolArr.push(param[i]);
            console.log(boolArr);
        }
    }
    sortArr.push(stringArr);
    sortArr.push(numArr);
    sortArr.push(boolArr);
    console.log(sortArr);
    return sortArr;
}

groupArray(myArray);