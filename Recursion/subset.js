function subset(s,index,holder){
    if(index == s.length ){
        console.log("here : " + holder);
        return  
    }

    subset(s,index+1, holder + s[index] )
    subset(s,index+1, holder)
    
}

s = "123".split("")

holder = []
index = 0

// console.log(s)

subset(s,index,holder)