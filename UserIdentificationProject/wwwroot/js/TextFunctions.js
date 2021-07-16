var keys = 0;
var startTime = 0;
var lastKeyDown = 0;
var repeat = false;
var keyASCIIArr = [];
var arr = [];
var startTimeArr = [];
var nextKeyTimeArr = [];
var KeyArr = [];
var dataArr = [];
const txt = document.getElementById("TextArea");
    
txt.addEventListener('keydown', event => {
    var i = false;
    if (!i) {
        startTime = (new Date()).getTime();
        i = true;
    }
    
    if (!event.repeat) {
        var keyCode = event.keyCode;
        var t = startTime;
        startTime = (new Date()).getTime();
        var nextKeyTime = startTime - t;
        arr[keyCode] = 1;
        nextKeyTimeArr[keyCode] = nextKeyTime;
        startTimeArr[keyCode] = startTime;
        lastKeyDown = keyCode;
    }
    
    //else {
    //    if (!repeat) {
    //        startTime = (new Date()).getTime();
    //    }
    //    repeat = true;
    //    keys = event.code;
    //    var keyCode = event.keyCode;
    //    var nextKeyTime = null;
    //    nextKeyTimeArr[keyCode]
    //}
});

txt.addEventListener('keypress', event => {
    var keyCode = lastKeyDown;
    keyASCIIArr[keyCode] = event.charCode;

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
    var key = event.key;
    var keyCode = event.keyCode;
    var pressTime = 0;
    var nextKeyTime = 0;
    //if (!event.shiftKey) {
    //    if (arr[keyCode] == 1) {
    //        pressTime = ut - startTimeArr[keyCode];
    //        nextKeyTime = nextKeyTimeArr[keyCode];
    //        var login = document.getElementById("Login").value;
    //        dataArr = { login, key, keyCode, nextKeyTime, pressTime };
    //        sendData(dataArr);

    //        arr[keyCode] = 0;
    //    }
    //}
        if (arr[keyCode] == 1) {
            pressTime = ut - startTimeArr[keyCode];
            nextKeyTime = nextKeyTimeArr[keyCode];
            var login = document.getElementById("Login").value;
            var keyASCII = keyASCIIArr[keyCode];
            dataArr = { login, key, keyASCII, nextKeyTime, pressTime };
            sendData(dataArr);

            arr[keyCode] = 0;
        }
    //}
});

function showArray() {
    document.getElementById("arrPrint2").innerHTML = JSON.stringify(dataArr);
};

var sendData = function (dataArr) {
    $.ajax({
        type: 'POST',
        url: "/SaveData/AjaxMethod",
        data: JSON.stringify({ function_param: dataArr }),
        datatype: 'json',
        //success: function (result) {
        //    alert('Success ');
        //},
        //error: function (result) {
        //    alert('Fail ');
        //}
    });
}

function countChar(val) {
    var len = val.value.length;
    if (len >= 151) {
        val.value = val.value.substring(0, 150);
    } else {
        $('.numbersofChar').text(150 - len);
    }
};