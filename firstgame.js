const prompt=require("prompt-sync")();
let name=prompt("enter your name:");
console.log(`Welcome ${name}😀`);
let count=1;
let num=Math.floor(Math.random()*(100-1))+1;
while (true){
 let inp = prompt("Enter number between 1 to 100: ")
if (inp>num){
    console.log("You have entered the bigger number");
}else if (inp < num){
    console.log("You have entered a smaller number");
}else{
    console.log("You have entered a correct number in",count,"attempt");
    break;
}
count++;
}


function checkPrime(num){
 if (num>1){
    return true;
 }
 else if (num==2){
    return true;
 }
 for (let i=0;i<num/2;i++){
    console.log("The number is prime")
 }
}
console.log(checkPrime(num))





if (checkPrime == true ){
        console.log("The number is prime");}
else {
        console.log("The number is composite")
    }





if (count++ < 4){
    console.log(" you are a legend player");
}
else if (count++ >=4 && count++ <= 6){
    console.log("you are a Good player");
}
else{
    console.log(`well played ${name},better luck next time`);
}






























