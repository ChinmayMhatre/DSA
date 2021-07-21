function binarySearch(arr,val){
    
    low = 0
    high = (arr.length) - 1

    while(low <= high){
        mid = low + Math.floor((high-low)/2)

        if(val == arr[mid]){
            return mid
        }else if(val < arr[mid]){
            high = mid - 1
        }else{
            low = mid + 1
        }
    }

    return "not found"
    
}

let arr = [1,2,3,4,5,6]

ans = binarySearch(arr ,7)
 console.log(ans);