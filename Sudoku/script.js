
function selecionar(column, id) {

    let element = document.getElementById(`${column}-${id}`);
    const elementTextAsNumber = Number(element.innerText);
    if (elementTextAsNumber < 9) {
        element.innerText = elementTextAsNumber + 1;
        verifyColumn();
    } else {
        element.innerText = 1;

    }
}
function hasDuplicates(array) {
    for (var j = 0; j <= 8; j++) {
        for (var i = 0; i < array.length; i++) {
            for (var k = 0; k < array[i].length; k++) {
                var newArray = array[i][k];
                const noDups = new Set(newArray);
                if (noDups.size != newArray.length) {
                    return false
                }

            }

        }
    }
    return true;
}


function verifyColumn() {
    let horizontalArray = [];

    let _localHorizontalArray = [];
    for (var _columns = 0; _columns <= 8; _columns++) {
        for (var _id = 0; _id <= 8; _id++) {
            _localHorizontalArray.push(document.getElementById(`${_columns}-${_id}`).innerText);

            if (_id == 8) {
                horizontalArray.push([_localHorizontalArray]);
                _localHorizontalArray = [];
            }
        }
    }
    let verticalArray = [];
    let _localVerticalArray = [];

    for (var _id1 = 0; _id1 <= 8; _id1++) {
        for (var _columns1 = 0; _columns1 <= 8; _columns1++) {
            _localVerticalArray.push(document.getElementById(`${_columns1}-${_id1}`).innerText);

            if (_columns1 == 8) {
                verticalArray.push([_localVerticalArray]);
                _localVerticalArray = [];
            }
        }
    }





    if (hasDuplicates(verticalArray) && hasDuplicates(horizontalArray)) {
        alert("Você ganhou!");
    }




}
