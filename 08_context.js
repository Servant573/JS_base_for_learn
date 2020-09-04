// Контекст определяет как функция была вызвана и указывает на ключевое слово this

const person = {
    surname: 'Старк',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surname}`)
        
    }
}

const john = {
    surname: 'Сноу',
}

// person.knows('все', 'Бран')

// person.knows.bind(john)('ничего не', 'Джон')
// person.knows.call(john, 'ничего не', 'Джон')

// person.knows.apply(john, ['ничего не', 'Джон'])

// person.knows.call(john, ...['ничего не', 'Джон'])

Function.prototype.bind2 = function(context, ...args) {
    const fn = this
    return function(...args2) {
        fn.apply(context, args.concat(args2))
    }
}
person.knows.bind2(john, 'ничего не', 'Джон')()

console.log(person.knows.bind2(john, 'ничего не', 'Джон'))

// // =========
// function Person(name, age) {
//     this.name = name
//     this.age = age
//     console.log(this)
// }

// const elena = new Person('Elena', 20)

// // ======= Явный биндинг
// function logThis() {
//     console.log(this)

// }
// const obj = {num: 42}

// logThis.apply(obj)
// logThis.call(obj)
// logThis.bind(obj)()

// // ===== неявный биндинг

// const animal = {
//     legs: 4,
//     logThis: function() {
//         console.log(this)
//     }
// }

// animal.logThis()

// function Cat(color) {
//     this.color = color
//     console.log('This', this)
//     ;(() => console.log('Arrow this', this))()
// }

// new Cat('red')