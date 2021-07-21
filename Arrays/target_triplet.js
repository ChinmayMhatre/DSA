function target_triplet(arr,target){
    
    for (i=0 ; i < arr.length-2 ; i++){
        left    =  i+1;
        right   =  arr.length - 1

        while (left < right){
            if(arr[i] + arr[left] + arr[right] == target ){
                return [arr[i] , arr[left] , arr[right]]
            }
            if(arr[i] + arr[left] + arr[right] < target ){
                left++
            }else{
                right--
            }
            
        } 

    }
    return "not found " ;
    
}

let arr = [1,2,3,4,5,6]

ans = target_triplet(arr ,9)
 console.log(ans);
