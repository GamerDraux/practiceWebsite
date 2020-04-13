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

    //Tip calculator unit----------------------------------------------------------------------------------------
    let mealAmount = document.getElementById('mealAmount');
    let serviceLevel = document.getElementById('serviceLevel');
    let numOfPeople = document.getElementById('numOfPeople');
    let tipPerPersonResult = document.getElementById('tipPerPersonResult')
    let tipCalculatorButton = document.getElementById('tipCalculatorButton');
    tipCalculatorButton.addEventListener('click', function(){
        console.log (mealAmount.value, serviceLevel.value, numOfPeople.value);
        if (serviceLevel.value==="2"){
            tipPerPersonResult.innerHTML ="Server gets 2&cent;"
        } else {
            tipPerPersonResult.innerHTML = "Each person needs to chip in:\n"+`${toDollarAmount((mealAmount.value*serviceLevel.value)/numOfPeople.value)}`;
        }
    });
    function toDollarAmount(number){
        function addZerosToCents(cents){
            cents=cents.split(".");
            if (cents.length===1){
                cents.push("00");
            };
            if (cents[1].length===0){
                cents[1]="00";
            } else if(cents[1].length===1){
                cents[1]=cents[1]+"0";
            };
            return cents.join('.');
        }
        dollars = addZerosToCents("$"+`${(Math.round(number*100)/100)}`);
        return dollars;
    };

    
});