
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
var msTime = 0;
function processKeyDown(e) {
    if (!start) {
        start = (new Date()).getTime();
    }
    ++counter;
    document.getElementById("counter").innerHTML = "Consecutive keyDown events: " + counter + "\n";
    
};

function processKeyUp(e) {
    if (start != 0) {
        msTime = (new Date()).getTime() - start;
        document.getElementById("time").innerHTML = "Time between first keyDown and keyUp: " + msTime + " ms\n";
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
    cell1.innerHTML = counter;
    cell2.innerHTML = msTime;

    counter = 0;
};

function saveData() {
    var i=0;
    const cntArr = [];
    const timeArr = [];
    cntArr[i] = counter;
    timeArr[i] = msTime;
    i++;
}

function mergeArrays() {

}