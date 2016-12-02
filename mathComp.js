/*
 function dan_combo_problem4(N, N2){
 var operators = ['+','-','*','/'];
 var result = null;
 var array = [];
 for(var i=0; i<4; i++){
 switch(operators[i]){
 case '+':
 result = N + N2;
 break;
 case '-':
 result = N - N2;
 break;
 case '*':
 result = N * N2;
 break;
 case '/':
 result = N / N2;
 break;
 }

 var equate = ''+N+operators[i]+N2+'='+result;
 array.push(equate);
 }
 return array;
 }

 function davidg_combo_problem4(x, y){
 var arr = [];
 var result1, result2, result3, result4
 var result1 = x+'+'+y+'='+(x+y);
 var result2 = x+'-'+y+'='+(x-y);
 var result3 = x+'*'+y+'='+(x*y);
 var result4 = x+'/'+y+'='+(x/y);
 arr.push(result1, result2, result3, result4);
 return arr;
 }

 function andrew_combo_problem4(num1,num2){
 var output_arr = [];
 var add = num1 + num2;
 output_arr.push(""+(num1+"+"+num2)+("="+add));
 var subtract = num1 - num2;
 output_arr.push(""+(num1+"-"+num2)+("="+subtract));
 var multiply = num1 * num2;
 output_arr.push(""+(num1+"*"+num2)+("="+multiply));
 var divide = num1 / num2;
 output_arr.push(""+(num1+"/"+num2)+("="+multiply));
 return output_arr;
 }
 */

/*
 Given the following function call:

 math_sequences(2,5);
 And the resulting output:

 ["2+5=7", "2-5=-3", "2*5=10", "2/5=0.4"];
 Create a function definition that achieves the output with the given input.
 */

function math_sequences(num1,num2) {

}

math_sequences(2,5);