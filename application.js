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

// text input to local storage
$("button").on("click", function() {
    localStorage.setItem("12am", (input12am.val()));
    localStorage.setItem("1am", (input1am.val()));
    localStorage.setItem("2am", (input2am.val()));
    localStorage.setItem("3am", (input3am.val()));
    localStorage.setItem("4am", (input4am.val()));
    localStorage.setItem("5am", (input5am.val()));
    localStorage.setItem("6am", (input6am.val()));
    localStorage.setItem("7am", (input7am.val()));
    localStorage.setItem("8am", (input8am.val()));
    localStorage.setItem("9am", (input9am.val()));
    localStorage.setItem("10am", (input10am.val()));
    localStorage.setItem("11am", (input11am.val()));
    localStorage.setItem("12pm", (input12pm.val()));
    localStorage.setItem("1pm", (input1pm.val()));
    localStorage.setItem("2pm", (input2pm.val()));
    localStorage.setItem("3pm", (input3pm.val()));
    localStorage.setItem("4pm", (input4pm.val()));
    localStorage.setItem("5pm", (input5pm.val()));
    localStorage.setItem("6pm", (input6pm.val()));
    localStorage.setItem("7pm", (input7pm.val()));
    localStorage.setItem("8pm", (input8pm.val()));
    localStorage.setItem("9pm", (input9pm.val()));
    localStorage.setItem("10pm", (input10pm.val()));
    localStorage.setItem("11pm", (input11pm.val()));
});

$("#textarea12am").append(localStorage.getItem("12am"));
$("#textarea1am").append(localStorage.getItem("1am"));
$("#textarea2am").append(localStorage.getItem("2am"));
$("#textarea3am").append(localStorage.getItem("3am"));
$("#textarea4am").append(localStorage.getItem("4am"));
$("#textarea5am").append(localStorage.getItem("5am"));
$("#textarea6am").append(localStorage.getItem("6am"));
$("#textarea7am").append(localStorage.getItem("7am"));
$("#textarea8am").append(localStorage.getItem("8am"));
$("#textarea9am").append(localStorage.getItem("9am"));
$("#textarea10am").append(localStorage.getItem("10am"));
$("#textarea11am").append(localStorage.getItem("11am"));
$("#textarea12pm").append(localStorage.getItem("12pm"));
$("#textarea1pm").append(localStorage.getItem("1pm"));
$("#textarea2pm").append(localStorage.getItem("2pm"));
$("#textarea3pm").append(localStorage.getItem("3pm"));
$("#textarea4pm").append(localStorage.getItem("4pm"));
$("#textarea5pm").append(localStorage.getItem("5pm"));
$("#textarea6pm").append(localStorage.getItem("6pm"));
$("#textarea7pm").append(localStorage.getItem("7pm"));
$("#textarea8pm").append(localStorage.getItem("8pm"));
$("#textarea9pm").append(localStorage.getItem("9pm"));
$("#textarea10pm").append(localStorage.getItem("10pm"));
$("#textarea11pm").append(localStorage.getItem("11pm"));

})