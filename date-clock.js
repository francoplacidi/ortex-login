(function() {
    var updateTime = function() {

        var date = new Date(),
            hours = date.getHours(),
            ampm,
            minutes = date.getMinutes(),
            seconds = date.getSeconds(),
            weekDay = date.getDay(),
            numberDay = date.getDate(),
            month = date.getMonth(),
            year = date.getFullYear();

        var pHours = document.getElementById('hours');
            pAMPM = document.getElementById('ampm'),
            pMinutes = document.getElementById('minutes'),
            pSeconds = document.getElementById('seconds'),
            pWeekDay = document.getElementById('weekDay'),
            pNumberDay = document.getElementById('numberDay'),
            pMonth = document.getElementById('month'),
            pYear = document.getElementById('year');

        var allWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sathurday',];
        pWeekDay.textContent = allWeek[weekDay];

        pNumberDay.textContent = numberDay;

        var months = ['January,', 'February,', 'March,', 'April,', 'May,', 'June,', 'July,', 'August,', 'September,', 'November,', 'December,'];
        pMonth.textContent = months[month];

        pYear.textContent = year;

        if(hours >= 12){
            hours =- 12;
            ampm = 'PM';
        }else{
            ampm = 'AM';
        }
        if(hours == 0){
            hours == 12;
        };

        pHours.textContent = hours;
        pAMPM.textContent = ampm;

        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if(seconds < 10){
            seconds = "0" + seconds;
        }

        pMinutes.textContent = minutes;
        pSeconds.textContent = seconds; 
        
    };

    updateTime();
    var interval = setInterval(updateTime, 1000);
}())