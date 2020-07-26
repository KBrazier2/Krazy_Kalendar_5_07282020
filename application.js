$(document).ready(function() {
    var input12am = $("#textarea12am");
    var input1am = $("#textarea1am");
    var input2am = $("#textarea2am");
    var input3am = $("#textarea3am");
    var input4am = $("#textarea4am");
    var input5am = $("#textarea5am");
    var input6am = $("#textarea6am");
    var input7am = $("#textarea7am");
    var input8am = $("#textarea8am");
    var input9am = $("#textarea9am");
    var input10am = $("#textarea10am");
    var input11am = $("#textarea11am");
    var input12pm = $("#textarea12pm");
    var input1pm = $("#textarea1pm");
    var input2pm = $("#textarea2pm");
    var input3pm = $("#textarea3pm");
    var input4pm = $("#textarea4pm");
    var input5pm = $("#textarea5pm");
    var input6pm = $("#textarea6pm");
    var input7pm = $("#textarea7pm");
    var input8pm = $("#textarea8pm");
    var input9pm = $("#textarea9pm");
    var input10pm = $("#textarea10pm");
    var input11pm = $("#textarea11pm");

// current date/time
// stack overflow URL https://stackoverflow.com/questions/28689524/show-real-time-date-day-of-the-week-in-javascript-or-jquery/28689891
$(document).ready(function() {
    var interval = setInterval(function(){
        var momentNow = moment();
        $("#date-part").html(momentNow.format("dddd").substring(0,8).toUpperCase() + "  " + momentNow.format("MMMM DD YYYY"));
        $("#time-part").html(momentNow.format("hh:mm:ssa"));
    }, 100);
});

// colorcoded for past, present, and future
var currentHour = parseInt(moment().format("HH"));

$("textarea").each(function() {
    var now = parseInt($(this).attr("name"));
    if (now < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
    }
    if (now > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    }
    if (now === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }
});

$("button").on("click", function() {
    localStorage.setItem("12am", (input12am.val()));
});

$("#textarea12am").append(localStorage.getItem("12am"));


})