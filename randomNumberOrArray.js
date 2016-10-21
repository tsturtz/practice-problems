/**
 * Created by taylo on 10/14/2016.
 */


function random_range(start_num,end_num){
    if (typeof start_num == "number"){
        var result = Math.floor(Math.random() * (end_num - start_num)+start_num);
        console.log(result);
    }
    else{
        var result = start_num[Math.floor(Math.random() * (start_num.length))];
        console.log(result);
    }
    return result;
}

random_range(2,15);
random_range(1,100);
random_range(['a','b','c','d','e']);