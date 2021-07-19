var startTime = (new Date()).getTime();
var lastKeyDown = 0;
var keyASCIIArr = [];
var arr = [];
var startTimeArr = [];
var nextKeyTimeArr = [];
var dataArr = [];
const txt = document.getElementById("TextArea");
    
txt.addEventListener('keydown', event => {  
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
    var pressTime = 0;
    var nextKeyTime = 0;
    
    if (arr[keyCode] == 1) {
        pressTime = ut - startTimeArr[keyCode];
        nextKeyTime = nextKeyTimeArr[keyCode];
        var login = document.getElementById("Login").value;
        var keyASCII = keyASCIIArr[keyCode];
        dataArr = { login, key, keyASCII, nextKeyTime, pressTime };
        sendData(dataArr);
        arr[keyCode] = 0;
    }
});

function showArray() {
    document.getElementById("arrPrint2").innerHTML = JSON.stringify(dataArr);
};

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

function countChar(val) {
    var len = val.value.length;
    if (len >= 151) {
        val.value = val.value.substring(0, 150);
    } else {
        $('.numbersofChar').text(150 - len);
    }
};