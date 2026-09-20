//Conditional Statements : Writing conditions along with statements. 
// So whenever Node.js is going to run the statement, first it is going to check the condition. If the condition satisfies, then only it is going to run the statement. 

// There are two different types of conditional statements. 

//1. if...else statement ==> When we don't know the result of condition before execution.
//2. switch statement ==> When we know the result of condition before execution.Now, we want to choose one option among multiple

// 1. nested if...else statement ==> if...else statement inside another if...else statement.
let percentage: number = 90;

if(percentage >=85){
    console.log("Grade A");
    if(percentage >=90){
        console.log("Distinction");
        console.log("Congratulations!you will get gold medal");
}
else{
    console.log("you just missed distinction by"+(90-percentage)+"marks.");
}
}
else if(percentage >= 70){
    console.log("Grade B");
}
else if(percentage >= 50){
    console.log("Grade C");
}else{
    console.log("Sorry Bro,you are Failed")
}

//switch statement ==>when we know the result of condition before execution.Now, we want to choose one option among multiple

let env:string="prod";

switch(env){

    case "dev":
        console.log("login into the application with 'dev.netflix.com'");
        break;
    case "qa":
        console.log("login into the application with 'qa.netflix.com'");
        break;
    case "prod":
        console.log("login into the application with 'prod.netflix.com'");
        break;
    default:
        console.log("Please provide valid environment");
}

