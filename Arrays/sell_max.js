function sell_max(arr){

    global_small = arr[0]
    global_profit = 0 

    for(i=0 ; i < arr.length ; i++){
        if(arr[i] < global_small){
            global_small = arr[i]
        }
        current_profit = arr[i]-global_small
        if(current_profit > global_profit){
            global_profit = current_profit
        }
    }
    return global_profit
}

console.log(sell_max([2,3,4,5,6,7,8]));