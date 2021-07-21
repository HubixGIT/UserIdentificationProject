var lastKeyDown = 0;
var keyASCIIArr = [];
var startTime;
var arr = [];
var startTimeArr = [];
var nextKeyTimeArr = [];
var dataArr = [];
var i = new Boolean(true);
const txt = document.getElementById("TextArea");
    
txt.addEventListener('keydown', event => {
    if (i == true) {
        startTime = (new Date()).getTime();
        i = false;
    }
    
    var keyCode = event.keyCode;
    var t = startTime;
    startTime = (new Date()).getTime();
    var nextKeyTime = startTime - t;
    arr[keyCode] = 1;
    nextKeyTimeArr[keyCode] = nextKeyTime;
    startTimeArr[keyCode] = startTime;
    lastKeyDown = keyCode;
    
    
    if (keyCode == 16 || keyCode == 17 || keyCode == 20 || keyCode == 8 ||
        keyCode == 37 || keyCode == 38 || keyCode == 39 || keyCode == 40){
        keyASCIIArr[keyCode] = keyCode;
    }    
});

txt.addEventListener('keypress', event => {
    var keyCode = lastKeyDown;
    keyASCIIArr[keyCode] = event.charCode;
});

txt.addEventListener('keyup', event => {
    var ut = (new Date()).getTime();
    var key = event.key;
    var keyCode = event.keyCode;
    var keyDownTime = 0;
    var nextKeyTime = 0;
    
    if (arr[keyCode] == 1) {
        keyDownTime = ut - startTimeArr[keyCode];
        nextKeyTime = nextKeyTimeArr[keyCode];
        var login = document.getElementById("Login").value;
        var keyASCII = keyASCIIArr[keyCode];
        dataArr = { login, key, keyASCII, nextKeyTime, keyDownTime };
        sendData(dataArr);
        arr[keyCode] = 0;
    }
});

var sendData = function (dataArr) {
    $.ajax({
        type: 'POST',
        url: "/SaveData/GetData",
        data: {
            function_param: JSON.stringify(dataArr)
        },
        datatype: 'json',
    });
}

//function countChar(val) {
//    var len = val.value.length;
//    if (len >= 151) {
//        val.value = val.value.substring(0, 150);
//    } else {
//        $('.numbersofChar').text(150 - len);
//    }
//};