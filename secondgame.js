// const prompt=require("prompt-sync")();
// let name=prompt("enter your name:");
// console.log(`Welcome ${name}😀`);
// let count=1;
// let num=Math.floor(Math.random()*(100-1))+1;
// function check (num){
//     if (num<=1){
//         console.log("it is neither prime nor composite")
//         return;
//     }
//     if (num==2){
//         console.log("it is a prime number ")
//         return;
//     }

// for (let i=2;i<=num/2;i++){
//     if (num%i==0){
//         console.log("it is a composite number");
        
//     }else{
// console.log("it is a prime number")
// }
// }
// return;
// }
// check(num)

// while(true){
//     let inp=prompt("Enter number between 1 to 100 : ");
//     if(check(num)){
//         console.log("Number is prime")
//     }
//     else{
//         console.log("Number is not prime")
//     }
//     if (inp>num){
//         console.log("you entered a greater number")
//     }
//     else if (inp<num){
//         console.log("you entered a smaller number")
//         break;
//     }
//     count++
// }

// if (count<=4){
//     console.log(`Congratulations ypou guessed the number in ${count} and you are legend player`)
// }
// else if(count>4 && count<=6){
//     console.log(`Congratulations you guessed the number in ${count} times and you are good player`)
// }
// else{
//     console.log(`congratulation you guessed the number in ${count} time and you played well,better luck next time `)
// }


const prompt = require("prompt-sync")();
let name = prompt("enter your name: ");
console.log(`⁠Welcome ${name} 😊`⁠);
let res = 1;
let count = 1;
let num = Math.floor(Math.random() * 100) + 1;
function numPrime(num) {
    if (num < 2) {
        return false;
    }
    if (num === 2) {
        return true
    }
    for (let i = 2; i <num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true;
}
while (true) {
    let input = parseInt(prompt("enter number 1 to 100: "));
    if (input < 1 || input > 100) {
        console.log("Invalid");
        continue;
    }
    if (input > num) {
        console.log(⁠`${name}, You have entered the bigger number`⁠);
    } else if (input < num) {
        console.log(⁠`${name}, You have entered the smaller number`⁠);
    } else {
        console.log(⁠` Congratulation ${name} , You have guessed the right number in ${count} times. `⁠);
        break;
    }
    count++;
    if(count>4){
        if (numPrime(num)) {
            console.log("Hint: Number is prime");
        } else if (num % 2 === 0) {
            console.log("Hint: Number is even");
        } else {
            console.log("Hint: Number is odd");
        }
    }
}
if (count <= 4) {
    console.log("You are Legend");
} else if (count <= 6) {
    console.log("You are a good player");
} else {
    console.log("Well done but try Again you score is low");
}
