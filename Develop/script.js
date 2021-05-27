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

// color code the hours


// need an event listener on save button => add function after click
// .ready is to specify a function to execute when the DOM is loaded
$(document).ready(function() {
    // save button saves data even upon refresh

    // .saveBtn eventListener -- $(.saveBtn).on("click",function() 
    $(".saveBtn").on("click",function() {
        // get nearby values of the description
        // get from parent node for the hour div, $(this) returns the current HTML element
        let hour = $(this).parent().attr("id");

        // get from sibling node from class description (.val gets current value of the first element in set of matched el's)
        let userInput = $(this).siblings(".description").val(); 

        // localStorage for that data in general
        localStorage.setItem(hour,userInput);
    }
    )}
)
