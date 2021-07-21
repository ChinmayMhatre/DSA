function insertionsort(arr){
    for(i = 1 ; i<arr.length ; i++){
        // value = arr[i]
        while(arr[i-1] > arr[i] && i>0){
            temp = arr[i]
            arr[i] = arr[i-1]
            arr[i-1] = temp
            i--
        }
    }
    return arr
}

console.log(insertionsort([4,5,6,1,2,3]))