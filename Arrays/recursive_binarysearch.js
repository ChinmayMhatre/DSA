function binarysearch_helper(arr,val,low,high){
    if(low>high){
        return "Value not found";
    }
    let mid = low + (Math.floor((high-low)/2))
    if(arr[mid] == val){
        return mid
    }else if(arr[mid] > val){
        return binarysearch_helper(arr,val,low,mid-1);
    }
    else{
        return binarysearch_helper(arr,val,mid+1,high);
    }
}

function binary_search(arr,val){
   return binarysearch_helper(arr,val,0,(arr.length)-1)
}

arr1 = [1,2,3,4,5,6,7]

answer = binary_search(arr1 , 5 );
 console.log(answer)


