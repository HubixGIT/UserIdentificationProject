
function countChar(val) {
    var len = val.value.length;
    if (len >= 151) {
        val.value = val.value.substring(0, 150);
    } else {
        $('.numbersofChar').text(150 - len);
    }
};

var start = 0;
var counter = 0;
var delta = 0;
function processKeyDown(e) {
    if (!start) {
        start = (new Date()).getTime();
    }
    ++counter;
    document.getElementById("counter").innerHTML = "Consecutive keyDown events: " + counter + "\n";
    if (counter > 1) {

    }
};

function processKeyUp(e) {
    if (start != 0) {
        delta = (new Date()).getTime() - start;
        document.getElementById("time").innerHTML = "Time between first keyDown and keyUp: " + delta + " ms\n";
    }

    start = 0;

    if (counter != 0) {
        addRowCell();
    }
    
};

function addRowCell() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = counter + "";
    cell2.innerHTML = delta;

    counter = 0;
}