let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
const button = document.querySelector("button");
const heading = document.querySelector("h1");


// // 1. Take the button and wait for a prompt using the addEventListener.
// button.addEventListener("click", function() {
//     // 2. Waiting on prompt to be triggered using "click".
//     // 3. When prompt is triggered, a name will be asked.
//     const name = prompt("What is your name?");
//     // 4. The heading will change due to the textContent.
//     heading.textContent = `Hi, ${name}`;
//     // console.log allows us to see the output in the console via inspect.
//     console.log("The button has been clicked");
// })

button.addEventListener("click", function() {
    const name = prompt("What is your name?");
    heading.textContent = `Hi, ${name}!`;
    console.log("The button has been clicked");
    p1.textContent = "Today's weather is much nicer.";
    p2.textContent = `What do you want to do today?`;
    console.log("The text has been changed.")
})

// Functions, Voicing and Scoping