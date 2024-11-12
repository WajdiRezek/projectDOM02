function RandomColor(){
    var tab = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]

    var color = "#"

    for (var i = 0; i < 6; i++) {
    color = color + tab[Math.floor(Math.random() * tab.length)]
    }

    return color
}

var box = document.querySelector('#box')
var button = document.querySelector('button')

button.addEventListener('click',function(){
    box.style.backgroundColor = RandomColor()
})