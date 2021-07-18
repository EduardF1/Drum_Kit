// 1) One way to write the anonymous function.
// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");
// });

//  2) Another way as an arrow function.
// document.querySelector("button").addEventListener("click", () => {
//     alert("I got clicked!");
// });

// Optimized version:
// document.querySelectorAll("button").forEach((button) => {
//     button.addEventListener("click", () => {
//         alert("I got clicked !");
//     });
// });

runScript();

function runScript() {
    detectButtonPress();
    detectKeyboardPress();
}

function detectButtonPress() {
    const numberOfButtons = document.querySelectorAll(".drum").length;
    // Detect Button Press for all buttons
    for (let i = 0; i < numberOfButtons; i++) {
        document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            const buttonText = this.textContent;
            makeSound(buttonText);
            animateButton(buttonText);
        })
    }
}


function detectKeyboardPress() {
    // Detect Keyboard Press
    document.addEventListener("keypress", function (event) {
        makeSound(event.key);
        animateButton(event.key);
    })
}


/**
 * Function that creates a sound based on a given key
 * @param key Button or Keyboard identifier
 */
function makeSound(key) {
    switch (key) {
        case "w":
            playAudio("sounds/tom-1.mp3");
            setButtonClickedColor(key);
            break;
        case "a":
            playAudio("sounds/kick-bass.mp3");
            setButtonClickedColor(key);
            break;
        case "s":
            playAudio("sounds/snare.mp3");
            setButtonClickedColor(key);
            break;
        case "d":
            playAudio("sounds/tom-1.mp3");
            setButtonClickedColor(key);
            break;
        case "j":
            playAudio("sounds/tom-2.mp3");
            setButtonClickedColor(key);
            break;
        case "k":
            playAudio("sounds/tom-3.mp3");
            setButtonClickedColor(key);
            break;
        case "l":
            playAudio("sounds/tom-4.mp3");
            setButtonClickedColor(key);
            break;
        default:
            // log possible errors
            console.error(key);
            break;
    }
}

/**
 * Function that plays a sound when a button is pressed
 * @param resourceUrl url of the audio resource
 */
function playAudio(resourceUrl) {
    const audio = new Audio(resourceUrl);
    try {
        audio.play();
    } catch (error) {
        console.error(error);
    }
}

/**
 * Sets the color of the button that was pressed to white. After 2 s reverts to
 * the initial state of the button.
 * @param buttonText the text of the button or keyboard key that was clicked/pressed
 */
function setButtonClickedColor(buttonText) {
    setButtonColor("#ffffff", buttonText);
    setTimeout(() => {
        setButtonColor("#DA0463", buttonText);
    }, 2000);
}

/**
 * Changes the button color to the specified hexCode
 * @param colorHexCode the code of the color used to change the button color
 * @param buttonText the text of the button or keyboard key that was clicked/pressed
 */
function setButtonColor(colorHexCode, buttonText) {
    document.getElementsByClassName(`${buttonText}`)[0].style.color = colorHexCode;
}

/**
 * Sets the `.pressed` class to the active (pressed) button. After 1 s, reverts to the
 * initial state of the button (removes the `.pressed` class).
 * @param key Button or Keyboard identifier
 */
function animateButton(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 1000);
}