function fatorial(x){
    var fat = 1
    for (var n = x; n >1; n--){
        fat *= n
    }
    return fat
}
console.log(fatorial(1))