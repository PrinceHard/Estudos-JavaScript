var array = [1, 2, 3, 6, 8, 5]
array.sort()
console.log(`O valor da nossa array é ${array}`)
console.log(`Nossa array tem ${array.length} elementos`)

for (var pos = 0; pos < array.length; pos++){
    console.log(`Nossa array tem na posição ${pos} o valor ${array[pos]}`)
}

for (let pos in array){
    console.log(array[pos])
}

console.log(`O valor 5 está na posição ${array.indexOf(5)}`)
console.log(`O valor 4 não existe, por isso ele significa ${array.indexOf(4)}`)
