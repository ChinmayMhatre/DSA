function fibo(N,dairy={1:0,2:1}){
    if(N in dairy){
        return dairy[N]
    }
    else{
        dairy[N] = fibo(N-1,dairy) + fibo(N-2,dairy)
        return dairy[N]
    }
}

console.log(fibo(3))