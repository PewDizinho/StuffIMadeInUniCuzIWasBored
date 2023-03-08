let thisTime = "X";
let game = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]

function test(id) {
    console.log(thisTime);

    if (document.getElementById(id).innerHTML == " ") {
        document.getElementById(id).innerHTML = thisTime;
        game[id] = thisTime;
        verifyIfSomeoneWon(thisTime)

        if (thisTime == "X") {
            thisTime = "O";
        } else {
            thisTime = "X";
        }
        document.getElementById('vez').innerHTML = `Agora é vez do ${thisTime}`;

    } else {
        alert("Alguém já usou esse bloco");
    }

}


function reset() {
    for (var i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = " ";
    }
    thisTime = "X";
    game = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];
    console.log("Resetou!")
    console.log(thisTime);
    console.log(game)
}


function verifyIfSomeoneWon(v) {

    if (game[0] == v && game[1] == v && game[2] == v ||
        game[0] == v && game[3] == v && game[6] == v ||
        game[0] == v && game[4] == v && game[8] == v ||

        game[1] == v && game[4] == v && game[7] ||
        game[3] == v && game[4] == v && game[5] ||
        game[6] == v && game[7] == v && game[8] ||

        game[2] == v && game[4] == v && game[6] ||
        game[2] == v && game[5] == v && game[8]
    ) {
        const confirm = window.confirm(`"${v}" ganhou`)
        if (confirm == true || confirm == false) {
            reset();
        }
    }
}
