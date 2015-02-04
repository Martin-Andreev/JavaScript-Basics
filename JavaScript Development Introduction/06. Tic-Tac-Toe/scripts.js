var count = 0;
var cells = document.getElementsByTagName("td");
var rows = document.getElementsByTagName("tr");

var playerOne = [];
var playerTwo = [];

var playerOneRes = 0;
var playerTwoRes = 0;

var endGame = false;

var winningCombination = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7]
];

function playerOneResult(){
    playerOneRes++;
    document.getElementById("player1-res").innerHTML = playerOneRes;
}

function playerTwoResult(){
    playerTwoRes++;
    document.getElementById("player2-res").innerHTML = playerTwoRes;
}

function cellOrder() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].order = i + 1;
        cells[i].addEventListener("click", function () {
            action(this)
        }, true)
    }
}

function stop() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", function () {
            action(this)
        }, true)
    }
    endGame = true;
}

function newGame(){
    endGame = false;
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }

    document.getElementById("winner").innerHTML = "";
    playerOne = [];
    playerTwo = [];
    count = 0;
}

function clearResult(){
    document.getElementById("player1-res").innerHTML = 0;
    document.getElementById("player2-res").innerHTML = 0;
    playerOneRes = 0;
    playerTwoRes = 0;
}

function isEven(number) {
    return number % 2 == 0;
}

function winner() {
    for (var i = 0; i < winningCombination.length; i++) {
        if (compare(playerOne, winningCombination[i])) {
            document.getElementById("winner").innerHTML = "Player One Wins!";
            playerOneResult();
            stop();
            return;
        } else if (compare(playerTwo, winningCombination[i])) {
            document.getElementById("winner").innerHTML = "Player Two Wins!";
            playerTwoResult();
            stop();
            return;
        }
    }
}

function compare(player, combination) {
    var comboCount = 0;
	
    for (var i = 0; i < combination.length; i++) {
        for (var j = 0; j < player.length; j++) {
            if (player[j] == combination[i]) {
                comboCount++;
                if (comboCount == 3) {
                    return true;
                }
            }
        }
    }
    return false;
}

function action(cell) {
    if (!endGame) {
        var prime = isEven(count);

        if (prime == true && cell.innerHTML == "") {
            cell.innerHTML = "0";
            playerOne.push(cell.order);
            playerOne = playerOne.sort();
        } else if (prime == false && cell.innerHTML == "") {
            cell.innerHTML = "X";
            playerTwo.push(cell.order);
            playerTwo = playerTwo.sort();
        }

        winner();

        count++;
    }
}

