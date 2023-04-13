
var valueDefault = [25, 25];//Y,X inicial;
var walkSpeed = 1;
var powerUps = [];

document.addEventListener("DOMContentLoaded", function (e) {
    let pups = document.getElementsByClassName("powersUps");
    for (var i in pups) {
        var powerUp = {
            id: i,
            position: {
                x: Math.floor(Math.random() * 99) + 1 + "%",
                y: Math.floor(Math.random() * 99) + 1 + "%"
            }
        };
        if (!isCloseTo({
            x: Number(powerUp.position.x.replace("%", "")),
            y: Number(powerUp.position.y.replace("%", "")),
        },
            {
                x: valueDefault[1],
                y: valueDefault[0]
            },
        ), 20) {
            pups[i].id = i;
            pups[i].style.marginTop = powerUp.position.x;
            pups[i].style.marginLeft = powerUp.position.y;
            powerUps.push(powerUp);
        } else {
            window.alert(1)
        }


    }
});
function isCloseTo(Pos1, Pos2, tolerance) {
    console.log(Pos1, Pos2);
    if (Math.abs(Pos1.x - Pos2.x) < tolerance && Math.abs(Pos1.y - Pos2.y) < tolerance || Pos1 == Pos2) return true;

    return false;
}
document.addEventListener("keypress", (key) => {
    let variables = document.querySelector(':root');
    let char = document.getElementById("char");

    switch (key.key) {
        case "w":
            valueDefault[0] -= walkSpeed;
            break;
        case "s":
            valueDefault[0] += walkSpeed;
            break;
        case "a":
            valueDefault[1] -= walkSpeed;
            break;
        case "d":
            valueDefault[1] += walkSpeed;
            break;
    }
    variables.style.setProperty('--top', valueDefault[0].toString() + "%");
    variables.style.setProperty('--left', valueDefault[1].toString() + "%");
    char.style.marginTop = valueDefault[0] + "%";
    char.style.marginLeft = valueDefault[1] + "%";
    for (var i of powerUps) {

        if (isCloseTo({
            x: Number(i.position.x.replace("%", "")),
            y: Number(i.position.y.replace("%", "")),

        },
            {
                x: valueDefault[1],
                y: valueDefault[0]
            },
        ), 5) {
            window.alert("Chegou");
        
        }
    }
})

