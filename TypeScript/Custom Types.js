// Enums
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
let petOnSaleTS = Pet.Chinchilla;
let ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
];
// String Enum
var Pet_str;
(function (Pet_str) {
    Pet_str["Hamster"] = "HAMSTER";
    Pet_str["Rat"] = "RAT";
    Pet_str["Chinchilla"] = "CHINCHILLA";
    Pet_str["Tarantula"] = "TARANTULA";
})(Pet_str || (Pet_str = {}));
let petOnSaleTS_str = Pet_str.Chinchilla;
let ordersArrayTS_str = [
    [Pet_str.Rat, 2],
    [Pet_str.Chinchilla, 1],
    [Pet_str.Hamster, 2],
    [Pet_str.Chinchilla, 50]
];
// Object Types
function sayHappyBirthdayWithObject(personObject) {
    let output = '';
    output += 'Happy Birthday '
        + personObject.name + '! ';
    output += 'You are now '
        + personObject.age + ' years old! ';
    output += 'Your birthday wish was to receive '
        + personObject.giftWish
        + '. And guess what? You will ';
    if (!personObject.success) {
        output += 'not ';
    }
    output += 'receive it! \n';
    console.log(output);
}
let birthdayBabies = [
    { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
    { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
    { name: 'Ava', age: 0, giftWish: '$0.25', success: true }
];
birthdayBabies.forEach(sayHappyBirthdayWithObject);
let codecademyCoordinates2 = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates2 = [25, 0, 'N', 71, 0, 'W'];
// Function Types
// Math Operations
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return a / b; }
function wrongAdd(a, b) { return (a + b) + ''; }
// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
    console.log("Let's learn how to", operationCallback.name, '!');
    let value25 = operationCallback(2, 5);
    console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
    console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
    console.log('Now fill out this worksheet.');
}
//Do not change the code above this line.
//Provide type annotations for the variables below:
let theFamily = {
    parents: [3, 4], mate: 9, children: [5, 30, 121]
};
let someFamily = {
    parents: [true, true], mate: false,
    children: [false, false, true, true]
};
let aFamily = {
    parents: [
        { name: 'Mom', job: 'software engineer' },
        { name: 'Dad', job: 'coding engineer' }
    ],
    mate: { name: 'Matesky', job: 'engineering coder' },
    children: [{ name: 'Babesky', job: 'none' }]
};
let anotherFamily = {
    parents: [
        { name: 'Momo', tailWagSpeed: 3 },
        { name: 'Dado', tailWagSpeed: 100 }
    ],
    mate: { name: 'Cheems', tailWagSpeed: 7 },
    children: [
        { name: 'Puppin', tailWagSpeed: 0.001 },
        { name: 'Puppenaut', tailWagSpeed: 0.0001 },
        { name: 'Puppenator', tailWagSpeed: 0.01 }
    ]
};
// Generic Functions
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
// Write your code below:
stringArray = getFilledArray('hi', 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: 'J. Dean', age: 24 }, 6);
coordinateArray = getFilledArray([3, 4], 6);
