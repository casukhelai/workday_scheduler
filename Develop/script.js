// Functionality problem
// NEED: Moment.js library to display the current time and date in the jumbotron
// GOAL: Time blocks are for standard business hours and color coded for past,present,future
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
    $(".saveBtn").on("click",function() {
        // get nearby values of the description
        // get from parent node for the hour div, $(this) returns the current HTML element
        let hour = $(this).parent().attr("id");

        // get from sibling node from class description (.val gets current value of the first element in set of matched el's)
        let userInput = $(this).siblings(".description").val(); 

        // need to put into localStorage to keep even after refresh
        localStorage.setItem(hour,userInput);
       
    });

        // scan the current time with 8 AM
        // initialize currentTime
        let currentTime = moment().hour();
        
        // grab block time...iterate over the description boxes
        $(".time-block").each(function() {

        // gets the time block from the page
        let timeBlock = $(this).attr("id");
        timeBlock = parseInt(timeBlock.split("-")[1]);

        // compare user's current time to the block time, then change the color of the blocks based on the time
        if (currentTime == timeBlock){ // present time
            $(this).removeClass('past','future');
            $(this).addClass('present'); // future time 
         } else if (currentTime < timeBlock){
            $(this).removeClass(['past','present']);
            $(this).addClass('future');
        } else // past time
            $(this).removeClass(['future','present']);
            $(this).addClass('past');
    })
    
    // for-loop runs through every hour and if there is anything stored, it will remain on the page
    for(var i = 8; i < 18; i++){
        $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
    }
    

})