//step 1: put current date on web page using moment()
//step 2: compare the current hour with time-blocks
//ste  3: translate time-blocks to military times
//step 4: use the css classes for present, past or future
//compare the time-blocks with moment()
// if moment() > time-blocks =>past
// if moment() == time-block => Present
// if  moment() < time-blokcs => future
//step 4: grap the textarea value and store it in localstorage
//create a selector for buttons to loop through so when you click on the button you get the value
//button and Id and textbox are the same, when you click the button need to find out from 0 to 7 which button is clicked 
// in the function it will have a for loop
// event.target.Id 
// add event to all button 1. first thing to do, then pass a function, set this as var to know the id of the button you clicked
//


var textAreaEl = $("textArea");
var buttonEl = $("button");
var timeBlocksArr=[9,10,11,12,13,14,15,16,17]; //translate time-blocks to military times
var workDayArr=[];
var currenthour= moment().hour();
           
var currentDay =$("#currentDay");  // document.querySelector("#currentDay")
console.log(currenthour);

var systemTime=moment().format("dddd, MMMM Do");
currentDay.text(systemTime)   // currentDay.textContent=systemTime

function save(event){
  
   console.log(event.target.parentNode.id)
   var btnId = $(event.target.parentNode.id);


}

//store textarea to localStorage
localStorage.setItem("textArea", JSON.stringify(textAreaEl));

function displayTimeBlockColors(){
    for(var i=0; i < timeBlocksArr.length;i++){
       console.log(timeBlocksArr[i])
        //this would be past 
        var currentTextEl = $("#" +timeBlocksArr[i]);

        if(currenthour>timeBlocksArr[i]){
          
           currentTextEl.addClass("past");
         }
         else if(currenthour=== timeBlocksArr[i]){
            currentTextEl.addClass("present");
         }
         else if(currenthour < timeBlocksArr[i]){
            currentTextEl.addClass("future"); 
         }
    }
}

buttonEl.on("click", save);
displayTimeBlockColors();

// Display today's day and date
var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(document).ready(function () {
     //saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

         //Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

             //To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }