// Functionality problem
// NEED: Moment.js library to display the current time and date in the jumbotron
// GOAL: Time blocks are for standard business and color coded for past,present,future
// when User clicks into time block, they should be able to type and SAVE the entry
// then if they refresh the page, entry should remain

// Past: Grey
// Present: red
// Future: green

// print the today's date in the jumbotron
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));


// need an event listener on save button => add function after click
// .ready is to specify a function to execute when the DOM is loaded
// all functions must be inside of .ready because they will ALL be executed at once without separate function calls
$(document).ready(function() {
    // save button saves data even upon refresh

    // .saveBtn eventListener -- $(.saveBtn).on("click",function() 
    $(".saveBtn").on("click",function() {
        // get nearby values of the description
        // get from parent node for the hour div, $(this) returns the current HTML element
        let hour = $(this).parent().attr("id");

        // get from sibling node from class description (.val gets current value of the first element in set of matched el's)
        let userInput = $(this).siblings(".description").val(); 

        // need to put into localStorage to keep even after refresh
        localStorage.setItem(hour,userInput);
       
    }),

    // color code the hours
    /* if (currentTime > "particular time threshold"...oh wait ".time-block") {
        display past time as grey, 
    }else if {
        display CURRENT time as RED
    } else 
    display green for future time
    */ 

    function scanCurrentTime(){
        // scan the current time with 8 AM
        // initialize currentTime
        let currentTime = moment().hour();
        

        // grab block time...maybe initialize an array and then the above if statements
        
    },

    // want to call every hour id that has local storage allocated
    // would need to initialize an array holding all of the hour ids in order to write a for-loop
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));

})