// null, undefined, boolean, number, string, object, symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof '')
// console.log(typeof {})
// console.log(typeof undefined)
// console.log(typeof Symbol('JS'))
// console.log(typeof null)
// console.log(typeof function() {})
// console.log(typeof(NaN))

// let str = ""
// str = null
// console.log(typeof str)

// Приведение типов
// let language = 'JavaScript'

// if (language) {
//     console.log('The best language is: ', language)
// }

// '', null, undefined, Nan, false
// console.log(Boolean(''))
// console.log(Boolean('Hello'))
// console.log(Boolean(' '))
// console.log(Boolean('0'))
// console.log(Boolean(0))
// console.log(Boolean(null))
// console.log(Boolean([]))
// console.log(Boolean({}))
// console.log(Boolean(function() {}))

// строки и числа
// console.log(1 + '2') //string 12
// console.log('' + 1 + 0)
// console.log('' - 1 + 0)
// console.log('3'*'8')
// console.log(4+10+'px')
// console.log('px' + 5 + 10)
// console.log('42'-40)
// console.log('42px'-2) //NaN
// console.log(null+2) //2
// console.log(undefined +42) //NaN

// == vs ===

// console.log(2 == '2')
// console.log(2 === '2')
// console.log(undefined == null)
// console.log(undefined === null)

// console.log('0' == false)
// console.log('0' == 0)
// console.log(0 == 0)


// =========
console.log(false == '') //true
console.log(false == []) //true
console.log(false == {})//false

console.log('' == 0) //true
console.log('' == []) //true
console.log('' == {})//false

console.log(0 == []) //true
console.log(0 == {}) //false
console.log(0 == null)//false