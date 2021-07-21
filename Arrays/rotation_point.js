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

arr = [5,6,7,1,2,3]

console.log(rotation_point(arr))