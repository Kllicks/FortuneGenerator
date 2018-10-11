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

// const fortunes = [
//     "You laugh now, wait till you get home.",
//     "Fortune not found: Abor, Retry, Ignore?",
//     "About time I got out of that cookie.",
//     "Your resemblance to a muppet will prevent the world from taking you seriously", 
//     "You will be hungry again in one hour."
// ];
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
const nbaTeams = [
    { 
        text: "Houston Rockets",
        url: "https://pbs.twimg.com/profile_images/1043168084565970946/Mo-p2qK3_400x400.jpg"
    } ,
    { 
        text: "Atlanta Hawks",
        url: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/8164fa21831283.5630835a3f3a0.jpg"
    } ,
    { 
        text: "Los Angeles Lakers",
        url: "http://a.espncdn.com/i/teamlogos/nba/500/lal.png"
    } ,
    { 
        text: "New York Knicks",
        url: "https://s7d2.scene7.com/is/image/aeo/sbt_cat8650028_PNG_sm?scl=2&qlt=100&fmt=png-alpha"
    } ,
    { 
        text: "Boston Celtics",
        url: "http://a.espncdn.com/i/teamlogos/nba/500/bos.png"
    } ,
]
// let index = 0;

// addEventListener accepts 2 arguments:
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens

// triggerElement.addEventListener(`click`, function () {
//     console.log(`fortune`);
//     // const newFortune = fortunes.pop();
//     // const newFortune = fortunes[index];
//     const newFortune = fortunes[Math.floor(Math.random()*fortunes.length)];
//     outputElement.textContent = newFortune;
//     // index++;
//     // if (index > (fortunes.length - 1)){
//     //     index = 0;
//     // }
    
// });
triggerElement.addEventListener(`click`, function () {
    console.log(`nba`);
    const newTeam = nbaTeams[Math.floor(Math.random()*nbaTeams.length)];
    outputElement.textContent = newTeam.text;
    imageElement.src = newTeam.url;
    
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
    
});

// function triggerEvent (obj) {
//     const newItem = obj[Math.floor(Math.random()*obj.length)];
//     outputElement.textContent = newItem.text;
//     imageElement.src = newItem.url;
// }
// triggerElement2.addEventListener(`click`, triggerEvent(nflTeams));

