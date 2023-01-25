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

})
    

}

})