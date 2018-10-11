console.log(`this works`);
// don't use ID's because they're error prone
// Classes are for CSS Styling
// "data attributes" are for JS
    // they always start with "data-"
    // data attributes are good because if someone is changing the CSS classes it wont affect your JS
    // classes describe the location, data attributes describe the action



// 1. make some code run when i click the button
const triggerElement = document.querySelector(`[data-trigger]`);
const outputElement = document.querySelector('[data-output]');

const fortunes = [
    "You laugh now, wait till you get home.",
    "Fortune not found: Abor, Retry, Ignore?",
    "About time I got out of that cookie.",
    "Your resemblance to a muppet will prevent the world from taking you seriously", 
    "You will be hungry again in one hour."
];

// function hello() {
//     console.log(`hello addEventListener!`);
// }

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
triggerElement.addEventListener(`click`, function () {
    console.log(`hello addEventListener!`);
    const newFortune = fortunes.pop();
    outputElement.textContent = newFortune;
});
// above is an anonymous function, which you should use if you're only using it once

// 2. Write some text to the page on button click




// 3. pull text from an array of text to write to the page