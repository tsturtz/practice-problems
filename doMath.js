/**
 * Created by taylo on 10/14/2016.
 */

do_math(5,3,'/');

function do_math(num1,num2,operator){
    var result;
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if(operator == '*' || operator == 'x' || operator == 'X'){
        result = num1 * num2;
    }else if(operator == '/'){
        result = num1 / num2;
    }
    console.log(result);
    return result;
}