function rotation_search_helper(arr,val,low,high){
    if(low > high){
        return "no match"
    }
    mid = low + Math.floor((high-low)/2)
    if(mid == val){
        console.log(mid);
        return mid    
    } 
   
    if( arr[low] <= arr[mid] && val >= arr[low] && val <=arr[mid]){
        console.log(mid);
        return rotation_search_helper(arr,val,low,mid-1)
    }
    else if(arr[high] >= arr[mid] && val >= arr[mid] && val <=arr[high]){
        return rotation_search_helper(arr,val,mid+1,high)
    }else if(arr[high] <= arr [mid]){
        return rotation_search_helper(arr,val,mid+1,high)
   }else if(arr[low] >= arr[mid]){
        return rotation_search_helper(arr,val,low,mid-1)
   }
   return -1
}

function rotation_search(arr,val){
    return rotation_search_helper(arr,val,0,arr.length-1)
}

arr = [3,4,5,1,2]

console.log(rotation_search(arr,1))