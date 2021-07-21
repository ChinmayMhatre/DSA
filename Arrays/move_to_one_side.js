function move_to_one_side(arr,val){

    let read_s = arr.length-1;
    let write_s = arr.length-1;

    while(read_s >= 0 ){

        if(arr[read_s] != val){
            arr[write_s] = arr[read_s]
            write_s--
        }

        read_s = read_s - 1
    }

    while(write_s >= 0){
        arr[write_s] = val
        write_s--
    }

    return arr

}

arr = [8,4,7,3,5,8,5,6,8,2,3,4,8,4,5,6,8]

console.log(move_to_one_side(arr,8))