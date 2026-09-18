//jumping statement in Typescript

//1.break
//2.continue
//3.return
//4.throw

//break statement: it is used to terminate the loop when condition is met.

//normal for loop to print numbers from 1 to 10
// for(let i:number=1;i<=5;i++){
//     console.log(i);
// }

//for loop with break statement to terminate the loop when i equals 3
console.log("use the break statement");

for(let i:number=1;i<=5;i++){
    if(i===3){
        break;//terminate the loop when i equals 3
    }
    console.log(i);
}
console.log("use the continue statement");

//continue statement: it is used to skip the current iteration of the loop when condition is met.
//for loop with continue statement to skip the current iteration when i equals 3
for(let i:number=1;i<=5;i++){
    if(i===3){
        continue;//skip the current iteration when i equals 3
        
    }
    console.log(i);//1,2,,4,5
}

console.log("use the return statement");
//return statement: it is used to terminate the function when condition is met and return the value to the caller function.
//return statement: it is used to exit from the function and optionally return a value.

function addNumbers(a:number,b:number):number{
    return a+b;//exit from the function and return the sum of a and b
    //console.log("this line will not be executed");//this line will not be executed because the function has already exited

}
let sum:number=addNumbers(5,10);
console.log("Sum of 5 and 10 is: "+sum);//sum:15

//throw statement: it is used to throw an exception when condition is met and terminate the function.

function withdrawAmount(amount:number){
    if(amount<=0){
        throw new Error("Invalid amount.Amount should be greater than zero.");
}
console.log("Amount withdrawn:",amount);
}

withdrawAmount(100);//Amount withdrawn: 100
withdrawAmount(-50);//Uncaught Error:Invalid amount.Amount should be greater than zero.