/**
 * Created by taylo on 10/20/2016.
 */

function find_middle_letters(string){
    var mid = Math.floor(string.length / 2);
    if (string.length % 2 === 0){
        var result = string.substr(mid-1,2);
        console.log(result);
    }
    else {
        var result = string.substr(mid,1);
        console.log(result);
    }
}

find_middle_letters('seven');
find_middle_letters('dish');