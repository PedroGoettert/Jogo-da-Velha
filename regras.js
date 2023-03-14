document.addEventListener("DOMContentLoaded", start())

let reset = document.querySelector(".reset")


function start() {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        square.addEventListener("click", handleClick)
    })
}


function handleClick(e) {

    let square = e.target
    let position = square.id


    if (handleMove(position)) {
        setTimeout(() => {
            if (gameOver && result === true) {
                alert("Jogador " + symbols[playerTime] + " ganhou")
            }
        }, 100);
    }
    updateSquare(position)

}

function updateSquare(position) {

    let square = document.getElementById(position.toString())
    let symbol = board[position]

    square.innerHTML = `<div class="${symbol}"></div>`

}



reset.addEventListener("click", () => {
    var x = document.querySelectorAll('.X')
    var o = document.querySelectorAll('.O')

    for (index in x) {
        if (x[index].parentNode) {
            x[index].parentElement.removeChild(x[index])
        }
    }

    for (index in o) {
        if (o[index].parentNode) {
            o[index].parentElement.removeChild(o[index])
        }
    }

    board = ["", "", "", "", "", "", "", "", ""]

    playerTime = 0
    gameOver = false
    result = false
})
















