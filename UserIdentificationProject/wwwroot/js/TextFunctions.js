var startTime = 0;
var time = 0;
var keys = 0;
var repeat = false;
const txt = document.getElementById("TextArea");
const char = document.getElementById('Znak');
const msTime = document.getElementById('ms');

    
txt.addEventListener('keydown', event => {
    if (!event.repeat) {
            startTime = (new Date()).getTime();
    }
    else {
        if (!repeat) {
            start = (new Date()).getTime();
        }
        repeat = true;
        keys = event.key;
        time = null;

        log.textContent += `${keys}        `;
        ms.textContent += `${time}        `;
    }
});

txt.addEventListener('keyup', event => {
    if (repeat) {
        time = ((new Date()).getTime() - start);

        log.textContent += `${keys}        `;
        ms.textContent += `${time}        `;

        repeat = false;
        start = 0;
    }
    else {
        keys = event.key;
        time = ((new Date()).getTime() - startTime);

        log.textContent += `${keys}        `;
        ms.textContent += `${time}        `;
    }
});

function showArray() {
    document.getElementById("arrPrint2").innerHTML = JSON.stringify(keys);
    document.getElementById("arrPrint").innerHTML = JSON.stringify(time);
    
}

function countChar(val) {
    var len = val.value.length;
    if (len >= 151) {
        val.value = val.value.substring(0, 150);
    } else {
        $('.numbersofChar').text(150 - len);
    }
};