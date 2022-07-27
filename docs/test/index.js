function add() {
    console.log(this)
}

add()

function Vue() {
    console.log(this)
}

new Vue()

let obj = {
    a: 1,
    b: function () {
        console.log(this)
    }
}

obj.b()


var a = 1

console.log(window)