onload=principal;

function principal() {
    let n = prompt('Introduce un numero')
    
    if ((n >= 0) || (n <= 10)){
        for (i in range(1,11)){
            print(n ,"x", i ,"=", (n * i))
    }}else{
        print('error')
    }
}
