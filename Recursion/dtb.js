function dtb(val){
    if(val <= 1){
        return val.toString()
    }else{
        return dtb(Math.floor(val/2)) + dtb(val%2)
    }
}


console.log(dtb(4))