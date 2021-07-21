function selection(arr){
    for(i=0 ; i<arr.length-1 ; i++){
        index = arr[i] 
        for(j=i+1; j < arr.length-1 ; j++ ){
            if(arr[j] < arr[index]){
                index = j
                console.log(index)
            }
        }
        let temp = arr[i]
        arr[i] = index
        index = temp
        
    }
    return arr
}

console.log(selection([4,5,7,3,2,1]))