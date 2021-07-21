function comparison_array(a,b,c){
    let i = 0 
    let j = 0 
    let k = 0 
        
    
        while ( i < a.length && j < b.length && k < c.length  ){
            if(a[i] == b[j] && b[j] == c[k]){  
                return b[j]
            } 
            if (a[i] <= b[j] && a[i] <= c[k] ){
                i = i + 1;
            }
             else if (b[j] <= a[i] && b[j] <= c[k] ){
                j = j + 1;
            }
            else if (c[k] <= a[i] && c[k] <= b[j] ){
                k = k + 1;
            }

            
        }
        return "no match"
    
    
  
}

a = [7,8,9,22,45,67,99]
b = [1,7,8,55,88,99]
c = [0,2,4,7,8,55,66,77]

console.log(comparison_array(a,b,c));