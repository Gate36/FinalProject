const clock = document.querySelector(".mainClock");

function getNowTime() {
    const now = new Date();
    let nowHour = addZeros(now.getHours(), 2);
    let nowMin = addZeros(now.getMinutes(), 2);
    let nowSec = addZeros(now.getSeconds(), 2);
    let setAmPm = "AM";

    if(nowHour >= 12) {
        setAmPm = "PM";
        nowHour = addZeros(nowHour - 12, 2);
    }

    clock.innerHTML = nowHour + ":" +
        nowMin + ":" +
        nowSec +
        " <span style = 'font-size: 50px;'>"+ setAmPm + "</span>";
}

function addZeros(num, digit) {
    let zero = "";
    num = num.toString();
    if(num.length < digit) {
        for(i = 0; i < digit - num.length; i++) {
            zero += "0";
        }
    }
    return zero + num;
}

function init() {
    getNowTime();
    setInterval(getNowTime, 1000);
}

init();