// Manage words
import { WORDS } from "./words.js";
let wordToGuess = WORDS[Math.floor(Math.random() * WORDS.length)].toLowerCase();

// Setting game options
const numberOfTries = 5;
const numberOfLetters = 5;
let currentTry = 1;

// Setting game name
const gameName = "Wordle";
document.title = gameName;
document.getElementById("metaTitle").setAttribute("content", `${gameName} Game`);
document.getElementById("metaDescription").setAttribute("content", `${gameName} Game`);
document.querySelector("header h1").innerHTML = gameName;
document.querySelector("footer .name").innerHTML = gameName;
document.querySelector("footer .year").innerHTML = new Date().getFullYear();
const checkButton = document.querySelector(".check");

function generateInput() {
    const inputsContainer = document.querySelector(".inputs");

    // Create rows (number of trials)
    for (let i = 1; i <= numberOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);

        if (i !== 1) tryDiv.classList.add("disabled-inputs");

        // Create inputs (Number of letters in each word)
        for (let j = 1; j <= numberOfLetters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute("maxlength", "1");
            tryDiv.appendChild(input);
        }

        inputsContainer.appendChild(tryDiv);
    }

    // Focus on first input in first try element
    inputsContainer.children[0].children[0].focus();

    // Disable all inputs except first one
    document
        .querySelectorAll(".disabled-inputs input")
        .forEach((input) => (input.disabled = true));

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input, index) => {
        input.addEventListener("input", function () {
            // Convert input to uppercase
            this.value = this.value.toUpperCase();

            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        });
        input.addEventListener("keydown", function (event) {
            const currentIndex = Array.from(inputs).indexOf(event.target);

            if (event.key === "Tab") event.preventDefault();
            if (event.key === "ArrowRight" || event.key === "Tab") {
                const nextInput = currentIndex + 1;
                if (nextInput < inputs.length) inputs[nextInput].focus();
                if (!inputs[currentIndex].value) {
                    inputs[currentIndex].classList.remove("active");
                }
            }

            if (event.key === "ArrowLeft") {
                const prevInput = currentIndex - 1;
                if (prevInput >= 0) inputs[prevInput].focus();
                if (!inputs[currentIndex].value) {
                    inputs[currentIndex].classList.remove("active");
                }
            }
        });
    });
}

function validateInputs() {
    const inputs = document.querySelectorAll("input:not([disabled])");
    return Array.from(inputs).every((input) => input.value.trim() !== "");
}

function handleGuesses() {
    if (!validateInputs()) return;

    // Checking Word
    let successGuess = true;
    for (let i = 1; i <= numberOfLetters; i++) {
        const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
        const letter = inputField.value.toLowerCase();
        const actualLetter = wordToGuess[i - 1];

        if (letter === actualLetter) {
            // Letter is correct and in its place
            inputField.classList.add("yes-in-place");
        } else if (wordToGuess.includes(letter)) {
            // Letter is correct but not in its place
            inputField.classList.add("not-in-place");
            successGuess = false;
        } else {
            // Letter is wrong
            inputField.classList.add("no");
            successGuess = false;
        }
    }

    // Check If User Win Or Lose
    if (successGuess) {
        Swal.fire({
            title: "Congratulations !!",
            html: `<p>You got it, the word was <span>${wordToGuess}</span></p>`,
            footer: `<a href="https://wordfind.org/dictionary/${wordToGuess}" target="_blank">What does this word mean?</a>`,
            showCancelButton: true,
            cancelButtonColor: "#b00020",
            confirmButtonColor: "#18ba89",
            confirmButtonText: "New Game",
            customClass: {
                title: "good",
            },
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `,
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `,
            },
        }).then((result) => {
            if (result.isConfirmed) window.location.reload();
        });

        // Add Disabled Class On All Try Divs
        let allTries = document.querySelectorAll(".inputs > div");
        allTries.forEach((tryDiv) => tryDiv.classList.add("disabled-inputs"));

        checkButton.disabled = true;
    } else {
        // Disable wrong previous guess
        document.querySelector(`.try-${currentTry}`).classList.add("disabled-inputs");
        const currentTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
        currentTryInputs.forEach((input) => (input.disabled = true));

        // Move to the next guess (row)
        currentTry++;

        // Enable the next guess
        const nextTryInputs = document.querySelectorAll(`.try-${currentTry} input`);
        nextTryInputs.forEach((input) => (input.disabled = false));

        let newRow = document.querySelector(`.try-${currentTry}`);
        if (newRow) {
            document.querySelector(`.try-${currentTry}`).classList.remove("disabled-inputs");
            newRow.children[0].focus();
        } else {
            checkButton.disabled = true;

            Swal.fire({
                title: "Whoops :(",
                html: `<p>The answer was <span>${wordToGuess}</span></p>`,
                footer: `<a href="https://wordfind.org/dictionary/${wordToGuess}" target="_blank">What does this word mean?</a>`,
                showCancelButton: true,
                cancelButtonColor: "#b00020",
                confirmButtonColor: "#18ba89",
                confirmButtonText: "New Game",
                customClass: {
                    title: "bad",
                },
                showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `,
                },
                hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `,
                },
            }).then((result) => {
                if (result.isConfirmed) window.location.reload();
            });
        }
    }
}

function handleWriting(event) {
    const pressableChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Tab", "Home", "End", "Del", "Control", "Shift", "Insert", "Delete", "PageUp", "PageDown", "NumLock", "ScrollLock"];
    if (!pressableChars.includes(event.key)) event.preventDefault();

    const inputs = document.querySelectorAll("input:not([disabled])");
    const currentIndex = Array.from(inputs).indexOf(document.activeElement);
    if (inputs[currentIndex]) inputs[currentIndex].classList.add("active");

    if (event.key === "Backspace") {
        const inputs = document.querySelectorAll("input:not([disabled])");
        const currentIndex = Array.from(inputs).indexOf(document.activeElement);

        if (currentIndex >= 0) {
            const currentInput = inputs[currentIndex];
            const prevInput = inputs[currentIndex - 1];

            if (currentInput.value === "" && prevInput) {
                prevInput.value = "";
                prevInput.focus();
                currentInput.classList.remove("active");
            } else {
                currentInput.value = "";
            }
        }
    }
}

window.addEventListener("load", generateInput);
checkButton.addEventListener("click", handleGuesses);
document.addEventListener("keydown", function (event) {
    handleWriting(event);
    if (event.key === "Enter") {
        event.preventDefault();
        handleGuesses();
    }
});
