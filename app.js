/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll(".number")
const plusButton = document.querySelector("plus-button")
const minButton = document.querySelector("min-button")
const eqButton = docment.querySelector("eq-button")
const multButton = document.querySelector("mult-button")
const divButton = document.querySelector("div-button")
/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
numbers.forEach(number => {
    number.addEventListener("click", (displayText()) => {
        // This log is for testing purposes to verify we're getting the correct value
    console.log(displayText.target.innerText);
    // Future logic to capture the button's value goes here...

    })
})

plusButton.addEventListener("click", () =>{
    return calculator.display = '+';
})

minButton.addEventListener("click", () =>{
    display = '-';
})

eqButton.addEventListener("click", () =>{
    display.textContent = '=';
})

multButton.addEventListener("click", () =>{
    display.textContent = '*';
})

divButton.addEventListener("click", () =>{
    display.textContent = '/';
})
/*-------------------------------- Functions --------------------------------*/

function displayText() {
    let text = document.getElementsByClassName("button");
    text.style.display = "block";
}

displayText();