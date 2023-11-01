
console.log("Hello World!\n======\n");
console.log("Follow the steps in the README.md file to com");

const favNumber = 15;

const userInput = prompt("Enter a number");
const birthMonth = window.prompt("What is your birth month?");
const sanitizedMonth = birthMonth.slice(0, 3).toLowerCase();

if (userInput < favNumber) {
    console.log("too low");
} else if (userInput > favNumber) {
    console.log("too high");
} else if (userInput == favNumber) {
    console.log("Congratulations !!");
} else {
    console.log("Invalid Input");
}

// Exercise 2
switch (sanitizedMonth) {
    case "sep":
    case "oct":
    case "nov":
        console.log("born in autumn");
        break;
    case "dec":
    case "jan":
    case "feb":
        console.log("born in winter");
        break;
    case "mar":
    case "apr":
    case "may":
        console.log("born in spring");
        break;
    case "jun":
    case "jul":
    case "aug":
        console.log("born in summer");
        break;
    default:
        console.log("you dont exist");
}

// Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
    case "01":
        type = "Tank top";
        break;
    case "02":
        type = "T-Shirt";
        break;
    case "03":
        type = "Long Sleeve";
        break;
    case "04":
        type = "Sweat Shirt";
        break;
    default:
        type = "Other";
}

switch (colorId) {
    case "BK":
        color = "Black";
        break;
    case "BL":
        color = "Blue";
        break;
    case "RD":
        color = "Red";
        break;
    case "PU":
        color = "Purple";
        break;
    default:
        color = "White";
}

switch (sizeId) {
    case "S":
        size = "Small";
        break;
    case "M":
        size = "Medium";
        break;
    case "L":
        size = "Large";
        break;
    case "XL":
        size = "Extra Large";
        break;
    default:
        size = "One Size Fits All";
}

// String interpolation
console.log(`Product: ${size} ${color} ${type}`);

let userSize = prompt("What would you like?");
