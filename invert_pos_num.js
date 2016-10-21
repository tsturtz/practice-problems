/**
 * Created by taylo on 10/20/2016.
 */

function invert_negatives(num){
    var result;
    if(num > 0){
        result = num - num * 2;
    }
    else if (typeof num != 'number'){
        result = 'false';
    }
    else {
        result = num;
    }
    console.log(result);
    return result;
}

invert_negatives(-5);
invert_negatives(4000);
invert_negatives('puppies');

invert_negatives(true); //interesting .. because true evaluates as 1
invert_negatives(['a','b','c']);