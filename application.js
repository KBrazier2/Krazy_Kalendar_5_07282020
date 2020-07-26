// current date/time
// stack overflow URL https://stackoverflow.com/questions/28689524/show-real-time-date-day-of-the-week-in-javascript-or-jquery/28689891
$(document).ready(function() {
    var interval = setInterval(function(){
        var momentNow = moment();
        $("#date-part").html(momentNow.format("YYYY MMMM DD") + "" + momentNow.format("dddd").substring(0,3).toUpperCase());
        $("#time-part").html(momentNow.format("A hh:mm:ss"));
    }, 100);
})