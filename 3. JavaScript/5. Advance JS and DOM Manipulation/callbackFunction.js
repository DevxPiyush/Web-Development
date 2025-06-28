// suppose maine ek document ka code aisa likha hai jisme hum function as input use kr rhe hai for eg : 

document.addEventListener("click", function (e) {
   console.log(e); 
});

// the function with parameter e is called back not by us ( explicitly ), but by the document itself
// hence the function(e) is called as callback function

// another example

function anotherEventListener(typeOfEvent, callback) {
    
    // detect event code..

    var eventThatHappened = {
        // suppose the event that occured is pressing key, then it will detect: 
        eventtype: "keypress",
        whichKey: "p", // for eg
        durationOfKeyPressed : 2 // for eg 2 sec
    }
    // So when the event happens, namely pressing a key on the keyboard, then this object gets created based on that event.


    // and now we can pass the object back through the callback method so that the programmer, if they wish they can get the event object and use it to see what event triggered this event listener 

    if (eventThatHappened.eventType == typeOfEvent) {
        callback(eventThatHappened);
    }
    // callback only gets triggered when, the event that the developer wants gets happened
}

// the code that we write is 
anotherEventListener("keypress", function (event) {
   console.log(event);
    
});