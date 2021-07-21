function rotation_point_helper(arr,low,high){
    if(low>high){
        return "No points"
    }
    mid = low + Math.floor((high - low)/2)
    if(arr[mid]>arr[mid+1]){
        return (mid+1)
    }
    if(arr[mid-1]>arr[mid]){
        return (mid)
    }
    if(a[mid]<a[high]){
        return rotation_point_helper(arr,low,mid-1)
    }
    return rotation_point_helper(arr,mid+1,high)
    
}

function rotation_point(arr){
    return rotation_point_helper(arr,0,(arr.length-1))
}

function binary_helper(arr,val,low,high){
   if(high < low ){
       return "no match";
   }
   mid = low + Math.floor((high-low)/2)
   if(val == arr[mid]){
       return mid
   }else if(val > arr[mid]){
       return binary_helper(arr,val,mid+1,high)
   }else{
       return binary_helper(arr,val,low,mid-1)
   }
}

function binary_searcher(arr,val){
    pivot = rotation_point(arr)
    if(val < arr[arr.length-1]){
        return binary_helper(arr,val,pivot,arr.length-1)
    }else{
        return binary_helper(arr,val,0,pivot-1)
    }
}

arr = [4,5,6,1,2,3]

console.log(binary_searcher(arr,4))

