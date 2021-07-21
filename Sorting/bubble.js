function bubble(arr){
    

    for (i=0 ; i < arr.length ; i++){
        for(j=0; j < arr.length-1 ; j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp      
            }
        }
    }
    return arr
}

console.log(bubble([6,4,3,5,8,1]))