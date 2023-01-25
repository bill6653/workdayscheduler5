// Display the currrent date, current month, # of the month by the day and year
var currentDay = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(currentDay);


$(document).ready(function () {
    
    //saveBtn click listener
    $(".saveBtn").on("click", function () {

// pulling the values of descriptions with Jquery
var task = $(this).siblings(".description").val();
var time = (this).parent().attr("id");

//saving time and task to local storage
localStorage.setItem(time, task);
    })
// function to create the time tracker, utilize block out system
function timeTracker() {
    
    var timeNow = moment().hour();

    /* loop function that will enact the block out effect once the current time has passed any hour slot,
    takes the id attribute to pull the individual hour buttons
    */
    $(".time-block").each(function () {
    var timePast = parseInt($(this).attr("id").split("h")[1]);
    
    /* if statements that checks the time and changes the classes based off (timeNow) function, changes the class to future,
    present or past also links to my css to change the colors of the time slots
    */
    if (timePast < timeNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    }
    else if (timePast === timeNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }})}

    //functions to get items stored locally in each description that use the save button
    $("#h9 .description").val(localStorage.getItem("h9"));
    $("#h10 .description").val(localStorage.getItem("h10"));
    $("#h11 .description").val(localStorage.getItem("h11"));
    $("#h12 .description").val(localStorage.getItem("h12"));
    $("#h13 .description").val(localStorage.getItem("h13"));
    $("#h14 .description").val(localStorage.getItem("h14"));
    $("#h15 .description").val(localStorage.getItem("h15"));
    $("#h16 .description").val(localStorage.getItem("h16"));
    $("#h17 .description").val(localStorage.getItem("h17"));

    timeTracker();
})