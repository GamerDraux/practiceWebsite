window.addEventListener("load", function(){
    this.console.log('page loaded');
    
    //clock unit//
    let runningClock = function(){
        let clockBox = document.getElementById("clock");
        let currentTime= "";
        setInterval(() => {
            currentTime = new Date();
            currentTime =(`${currentTime.getHours()}:${addZero(currentTime.getMinutes())}:${addZero(currentTime.getSeconds())}`);
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
    
    runningClock();


});