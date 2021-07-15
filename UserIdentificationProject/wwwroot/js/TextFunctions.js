var startTime = (new Date()).getTime();
var pressTime = 0;
var keys = 0;
var repeat = false;
var arr = [];
var startTimeArr = [];
var nextKeyTimeArr = [];
var checkKeyArr = [];
var dataArr = [];
const txt = document.getElementById("TextArea");
const char = document.getElementById('Znak');
const msTime = document.getElementById('ms');
const next = document.getElementById('next');
    
txt.addEventListener('keydown', event => {
    if (!event.repeat) {
        var keyCode = event.keyCode;
        var t = startTime;
        startTime = (new Date()).getTime();
        var nextKeyTime = startTime - t;
        arr[keyCode] = 1;
        nextKeyTimeArr[keyCode] = nextKeyTime;
        startTimeArr[keyCode] = startTime;
    }
    //else {
    //    if (!repeat) {
    //        startTime = (new Date()).getTime();
    //    }
    //    repeat = true;
    //    keys = event.code;
    //    pressTime = null;

    //    log.textContent += `${keys}        `;
    //    ms.textContent += `${pressTime}        `;   
    //}
});

txt.addEventListener('keyup', event => {
    //if (repeat) {
    //    pressTime = ((new Date()).getTime() - startTime);

    //    log.textContent += `${keys}        `;
    //    ms.textContent += `${pressTime}        `;

    //    repeat = false;
    //    start = 0;
    //}
    //else {
        var ut = (new Date()).getTime();
        var keyCode = event.keyCode;
        var pressTime = 0;
        var nextKeyTime = 0;
        if (arr[keyCode] == 1) {
            pressTime = ut - startTimeArr[keyCode];
            nextKeyTime = nextKeyTimeArr[keyCode];
            dataArr = { keyCode, nextKeyTime, pressTime };
        }
        //keys = event.code;
        //pressTime = ((new Date()).getTime() - startTime);

        //log.textContent += `${keys}        `;
        //msTime.textContent += `${pressTime}        `;
    //}
});

function showArray() {
    document.getElementById("arrPrint2").innerHTML = JSON.stringify(dataArr);
    //document.getElementById("arrPrint").innerHTML = JSON.stringify(time);  
};

function countChar(val) {
    var len = val.value.length;
    if (len >= 151) {
        val.value = val.value.substring(0, 150);
    } else {
        $('.numbersofChar').text(150 - len);
    }
};