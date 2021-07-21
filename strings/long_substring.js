function long_substring(s){

    let global_max = 0
    let dairy = {}
    let start = 0

    for (end = 0 ; end < s.length ; end++) {
        if(s[end] in dairy){
            start = Math.max(start , dairy[s[end]] + 1)
        }
        dairy[s[end]] = end
        global_max = Math.max(global_max,(end-start)+1)
    }     
    console.log(dairy);
    return global_max
}

console.log(long_substring("abcdeabcb"))