// Simple message to make sure JavaScript is connected properly
console.log("Portfolio loaded successfully!");

const string = "Ahmad";
let city = "Lahore";
let semester = 5;
let skills = ["C++", "JavaScript", "HTML", "CSS", "Python"];
skills.push("Java");
const me = {name : "Ahmad", city : "Lahore", semester : 5, skills : skills};
console.log(me);
console.log(`Hello, my name is ${me.name}. I live in ${me.city} and I am in semester ${me.semester}. My skills include: ${me.skills.join(", ")}.`);
console.log(`I have ${me.skills.length} skills.`);

function getGreeting(hour) {
    if (hour < 12) {
        return "Good morning!";
    } else if (hour < 18) {
        return "Good afternoon!";
    } else {
        return "Good evening!";
    }
}

const button = document.querySelector("#greet-btn");   // 1. find
const message = document.querySelector("#message");

button.addEventListener("click", function () {          // 2. listen
    message.textContent = getGreeting(new Date().getHours());
});