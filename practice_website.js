window.addEventListener("load", function(){
    this.console.log('page loaded');
    
    //clock unit//
    let runningClock = function(){
        let clockBox = document.getElementById("clock");
        let currentTime= "";
        setInterval(() => {
            currentTime = new Date();
            currentTime =(`${toTwelveHours(currentTime.getHours())}:${addZero(currentTime.getMinutes())}:${addZero(currentTime.getSeconds())} ${isAmOrPm(currentTime.getHours())}`);
            clockBox.innerHTML =currentTime;
        }, 1000);
    };

    let addZero = function (remainder){
        let seconds = String(remainder);
        if (seconds.length===1){
            seconds ='0'+seconds;
        } else if (seconds.length===0){
            seconds ='00';
        }
        return seconds;
    };

    let toTwelveHours= function(hours){
        if (hours>12){
            hours=hours-12;
        }
        return hours;
    };

    function isAmOrPm (hours){
        if (hours<12&&hours>0){
            return ("AM");
        } else if(hours<24&&hours>=12){
            return ("PM");
        } else {
            return ("AM");
        }
    };
    
    runningClock();


});