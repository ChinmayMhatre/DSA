function nearby_duplicates(s){
    if(s.length == 1){
        return s
    }
     else if(s[0] == s[1]){
            return nearby_duplicates(s.slice(1))
        }
    return nearby_duplicates(s[0]) + nearby_duplicates(s.slice(1))
    
   
}
console.log(nearby_duplicates("myllccoo"));