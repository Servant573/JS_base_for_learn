// let
// let a = 'Variable a'

// let b = 'Variable b'

// {
//     a = 'New Variable A'
//     let b = 'Local Variable B'
//     console.log('Scoped A:', a)
//     console.log('Scoped B:', b)
// }

// console.log('A:', a)
// console.log('B:', b)

// const
const PORT = 8080
const array = ['JavaScript', 'is', 'awesome']

array.push('!')
array[0] = 'JS'
console.log(array)

const obj = {}

obj.name = 'Vladislav'
obj.age = 25
console.log(obj)

obj.age = 21

console.log(obj)

delete obj.name

console.log(obj)