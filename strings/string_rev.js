function strrev(sentence){ 
    words = sentence.split(' ');
    reversed = (words.reverse()).join(' ')
    return reversed;
}

let answer = strrev("hello world");
console.log (answer);