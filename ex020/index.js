let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
//se colocar o push após a tag sort a ordem dos elementos mudará mudará,ex:
//num.push(1)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(3)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}