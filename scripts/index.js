// console.log(`this works`);
// don't use ID's because they're error prone
// Classes are for CSS Styling
// "data attributes" are for JS
    // they always start with "data-"
    // data attributes are good because if someone is changing the CSS classes it wont affect your JS
    // classes describe the location, data attributes describe the action

// 1. make some code run when i click the button
const triggerElement = document.querySelector(`[data-trigger]`);
const triggerElement2 = document.querySelector(`[data-trigger2]`);
const outputElement = document.querySelector('[data-output]');

const fortunes = [
    "You laugh now, wait till you get home.",
    "Fortune not found: Abor, Retry, Ignore?",
    "About time I got out of that cookie.",
    "Your resemblance to a muppet will prevent the world from taking you seriously", 
    "You will be hungry again in one hour."
];
const nflTeams = [
    "Houston Texans",
    "Atlanta Falcons",
    "New Orleans Saints",
    "New York Giants",
    "Kansas City Chiefts"
]
// let index = 0;

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens

//var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
triggerElement.addEventListener(`click`, function () {
    console.log(`fortune`);
    // const newFortune = fortunes.pop();
    // const newFortune = fortunes[index];
    const newFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
    outputElement.textContent = newFortune;
    // index++;
    // if (index > (fortunes.length - 1)){
    //     index = 0;
    // }
    
});

triggerElement2.addEventListener(`click`, function() {
    console.log(`NFL`);
    const newTeam = nflTeams[Math.floor(Math.random()*nflTeams.length)];
    outputElement.textContent = newTeam;
});

// function triggerEvent (obj) {
//     const newObj = obj[index];
//     outputElement.textContent = newObj;
//     index++;
//     if (index > (obj.length - 1)){
//         index = 0;
//     }
// }

// triggerElement.addEventListener(`click`, triggerEvent(fortunes));
// triggerElement2.addEventListener(`click`, triggerEvent(nflTeams));
