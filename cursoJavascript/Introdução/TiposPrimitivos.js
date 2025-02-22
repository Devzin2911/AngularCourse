/*
    Tipos Primitivos -String
*/
console.log('------------------------------')
console.log('  Tipos Primitivos - String   ')
console.log('------------------------------')
console.log()
console.log('Olá Mundo')
console.log("Olá, Mundo!")
console.log('"Palavras com aspas"')
console.log(`String com crase`)

let nome = 'Gabriel'
var sobrenome = 'Henrico'
console.log(nome)
console.log(sobrenome)

console.log(String(21245))

console.log()
console.log('------------------------------')
console.log('------------------------------')
console.log('------------------------------')
/*
    Tipos Primitivos - Number
*/

console.log()
console.log('------------------------------')
console.log('  Tipos Primitivos - Number   ')
console.log('------------------------------')
console.log()


console.log(123)
console.log(Number('123') + 1)

console.log(typeof 123)
console.log(typeof Number("123"))
console.log(typeof '123')

console.log()
console.log('------------------------------')
console.log('------------------------------')
console.log('------------------------------')


/*
    Tipos Primitivos - Boolean
*/

console.log()
console.log('------------------------------')
console.log('  Tipos Primitivos - Boolean  ')
console.log('------------------------------')
console.log()


console.log(typeof false)
console.log(true)
console.log(false)

console.log(1 === 2)
console.log(1 == 2)
console.log(1 != 2)

console.log()
console.log('------------------------------')
console.log('------------------------------')
console.log('------------------------------')


/*
    Tipos Primitivos - Undefined/Null
*/

console.log()
console.log('--------------------------------------')
console.log('  Tipos Primitivos - Undefined/Null   ')
console.log('--------------------------------------')
console.log()


let res;

console.log(res)
console.log(null === undefined)

console.log()
console.log('------------------------------')
console.log('------------------------------')
console.log('------------------------------')




/*
    Tipos Primitivos - Array
*/

console.log()
console.log('------------------------------')
console.log('  Tipos Primitivos - Array    ')
console.log('------------------------------')
console.log()

let a = [1, 2, 3]
console.log(typeof a)
console.log(typeof ["Gabriel", "Zoe", "Ana"])
console.log(["Gabriel", "Zoe", "Ana"].length)


console.log()
console.log('------------------------------')
console.log('------------------------------')
console.log('------------------------------')

/*
    Tipos Primitivos - Object   
*/

console.log()
console.log('------------------------------')
console.log('  Tipos Primitivos - Object   ')
console.log('------------------------------')
console.log()


console.log({
    tenis: {
        cor: 'preto',
        tamanho: '39/40',
        marca: 'Vans'
    },
    camisa: {
        cor: 'preto',
        tamanho: 'G',
        marca: 'Vans'
    },
    calca: {
        cor: 'preto',
        tamanho: '42',
        marca: 'Vans'
    }
})

console.log()
console.log('------------------------------')
console.log('------------------------------')
console.log('------------------------------')