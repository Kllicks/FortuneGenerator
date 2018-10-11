console.log(`this works`);
// don't use ID's because they're error prone
// Classes are for CSS Styling
// "data attributes" are for JS
    // they always start with "data-"
    // data attributes are good because if someone is changing the CSS classes it wont affect your JS
    // classes describe the location, data attributes describe the action



// 1. make some code run when i click the button
const triggerElement = document.querySelector(`[data-trigger]`);

function hello() {
    console.log(`hello addEventListener!`);
}

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
triggerElement.addEventListener(`click`, hello);

// 2. Write some text to the page on button click


// 3. pull text from an array of text to write to the page