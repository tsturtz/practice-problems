/*
 Igpay Atinlay

 Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

 Write a function that takes one parameter
 Parameter 1 - A string
 The function should output your input string translated into Pig Latin
 Example:
 var myString = "Hello my name is Stu"
 `translate(myString);
 Output - "ellohay ymay ameya siay tusay"
 Making it better!

 There are several more rules to Pig Latin, try incorporating as many as you can into your function.
 There are different rules for words that start with vowel sounds or silent letters for example.
 Here is a link to an explanation of all the rules.
 Also try maintaining capitalization of words that are capitalized in your input string.
 Example:
 "Hello there" would be "Ellohay heretay"
 */

function ranslatetay(string) {
    var words = string.split(' ');
    var first;
    var last;
    var tempLast;
    var translation = [];
    var translationString;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var i = 0; i < words.length; i++) {
        if (vowels.indexOf(words[i][0]) == -1) {
            first = words[i].slice(0, 1);
            last = words[i].slice(1, words[i].length);
            if (first == first.toUpperCase()) {
                first = first.toLowerCase();
                tempLast = last[0].toUpperCase();
                last = last.slice(1, last.length);
                last = tempLast + last;
            }
            translation.push(last + first + 'ay');
        } else {
            translation.push(words[i] + 'way');
        }
        translationString = translation.join(' ');
    }
    console.log(translationString);
}

var myString = "Hello my name is Stu";
ranslatetay(myString);
ranslatetay("Hello there");