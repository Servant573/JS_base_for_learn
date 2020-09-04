// Замыкание это когда функция замыкает в себе определенные значения из вышестоящего Scope
// Функция внутри другой функции

// function sayHelloTo(name) {
//     const message = 'Hello ' + name

//     return function() {
//         console.log(message)
//     }
// }

// const HelloToElena = sayHelloTo('Elena')
// const HelloToIgor = sayHelloTo('Igor')

// console.log(typeof HelloToElena)
// HelloToElena()
// HelloToIgor()

// function createFrameworkManager() {
//     const fw = ['Angular', 'React']

//     return {
//         print: function() {
//             console.log(fw.join(' '))
//         },
//         add: function(framework) {
//             fw.push(framework)
//         }
//     }
// }

// const manager = createFrameworkManager()
// manager.print()
// manager.add('VueJS')
// manager.print()


// setTimeout

const fib = [1, 2, 3, 5, 8, 13]

for (var i = 0; i < fib.length; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(`fib ${j} = ${fib[j]}`)
        }, 1500)

    })(i)
}