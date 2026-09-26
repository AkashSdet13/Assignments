//Exception Handling in TypeScript

//  Exception + Handling ==> 

//1.Try ..Catch ...Finally Block ==> When there is an exception ,we can handle that particular exception and continue the exception process.
//2. Throwing our own exception ==> we can throw own exception using the throw keyword

//1. Try...catch...finally block

let empName:any;//declare a variable with any type

//create error in execution
console.log(empName.toLowerCase())

console.log("Execution is Completed");

//------------------------------------------------------------

//After Exception Handling

let NewempName:any
try{
console.log(empName.toLowerCase())
} catch(error){
    console.log("An exception occured .please check the variable.");
}finally{
    console.log("Execution is Completed")

}




