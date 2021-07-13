const startTime = [];
const time = [];
const keys = [];
var timesPressed = 0;
var start = 0;
var counter = 0;
var repeat = false;
const txt = document.getElementById("TextArea");
const char = document.getElementById('Znak');
const msTime = document.getElementById('ms');

txt.addEventListener('keydown', event => {
    if (!event.repeat) {
        /*timesPressed++;*/
        //if (timesPressed > 1) {
        //    counter++;
        //    startTime[counter] = (new Date()).getTime();
        //    keys[counter] = event.key;
        //    log.textContent += `${keys[counter]}        `;
        //    ms.textContent += `${time[counter]}        `;

        //}
        /*else {*/
        
            startTime[counter] = (new Date()).getTime();
            keys[counter] = event.key;

        /*}*/
    }
    else {
        if (!repeat) {
            start = (new Date()).getTime();
        }
        repeat = true;
        keys[counter] = event.key;
        time[counter] = null;
        log.textContent += `${keys[counter]}        `;
        ms.textContent += `${time[counter]}        `;
        document.getElementById("counter").innerHTML = "Counter" + counter + "\n";
        counter++;

    }
});

txt.addEventListener('keyup', event => {
    if (repeat) {
        counter--;
        time[counter] = ((new Date()).getTime() - start);

        log.textContent += `${keys[counter]}        `;
        ms.textContent += `${time[counter]}        `;

        repeat = false;
        start = 0;
    }
    else {
        time[counter] = ((new Date()).getTime() - startTime[counter]);

        log.textContent += `${keys[counter]}        `;
        ms.textContent += `${time[counter]}        `;

        
        counter++;
        document.getElementById("counter").innerHTML = "Counter" + counter + "\n";
    }
    timesPressed = 0;
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