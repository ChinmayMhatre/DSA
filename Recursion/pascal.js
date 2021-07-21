
//! error   


function pascal1(line_num){
    let line = [1]
    if(line_num == 0){
        return [1]
    }else{
        
        let prev_line = pascal1(line_num - 1)
        console.log(typeof(prev_line));
        

        for (i=0 ; i < prev_line.length - 1 ; i++){
            line.push(prev_line[i] + prev_line[i+1])
        }
        line += [1]
        
    }
    return line
}
 console.log(pascal1(5)); 
