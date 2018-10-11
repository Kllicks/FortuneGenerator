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
const imageElement = document.querySelector('[data-image]');

const fortunes = [
    "You laugh now, wait till you get home.",
    "Fortune not found: Abor, Retry, Ignore?",
    "About time I got out of that cookie.",
    "Your resemblance to a muppet will prevent the world from taking you seriously", 
    "You will be hungry again in one hour."
];
const nflTeams = [
    { 
        text: "Houston Texans",
        url: "https://images-na.ssl-images-amazon.com/images/I/61l9aPR4q5L._SX466_.jpg"
    } ,
    { 
        text: "Atlanta Falcons",
        url: "https://pbs.twimg.com/profile_images/1046749142134009856/XpV9Ak0Z_400x400.jpg"
    } ,
    { 
        text: "New Orleans Saints",
        url: "http://a.espncdn.com/i/teamlogos/nfl/500/no.png"
    } ,
    { 
        text: "New York Giants",
        url: "https://www.skinit.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/n/f/nfllgox7.jpg"
    } ,
    { 
        text: "Kansas City Chiefts",
        url: "http://a.espncdn.com/i/teamlogos/nfl/500/kc.png"
    } ,
]
let index = 0;

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
// original for medium exercise:
// triggerElement2.addEventListener(`click`, function() {
//     console.log(`NFL`);
    
//     const newTeam = nflTeams[Math.floor(Math.random()*nflTeams.length)];
//     outputElement.textContent = newTeam;
// });
triggerElement2.addEventListener(`click`, function() {
    console.log(`NFL`);
    const newTeam = nflTeams[Math.floor(Math.random()*nflTeams.length)];
    outputElement.textContent = newTeam.text;
    imageElement.src = newTeam.url;

    // imageElement.setAttribute('src', "http://a.espncdn.com/i/teamlogos/nfl/500/kc.png");
    
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
