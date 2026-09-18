//Loop Statements : Loop the statements or repeat the execution of statements multiple times based on the conditions given

// 1.for loop:When we know the total number of iterations to be executed before itself, we use for loop.
// 2.while loop:When we don't know the total number of iterations to be executed before itself, we use a while loop. 


//1.for loop

//syntax:

//for (condition-to-start; condition-to-end; increment/decrement)
// {
//     //statements
// }

// //example:print the name bharath for 10 times using for loop
//  let empName:string="Akash";

//  for(let i:number=1;i<=10;i++){
//     console.log(i+"-"+empName);
//     //console.log(empName);
//    // console.log(i)
//  }

 //2.while loop

//syntax:

// //while(condition-to-start)
// {
//     //statements
// }
// //example:refresh the page until the  application is launched successfully 

// let counter:number=1;
// while(counter > 0){
//     let isPageLoaded:boolean=false;//assume this value is coming from application

//     if(isPageLoaded || counter ===10){
//         break;//terminate the loop when the page is loaded or not loaded even after 10 attempts
//     }
//     console.log("Refresh the page");
//     counter++; 
// }

//do..while loop

//syntax:

//do{
    //statements
//}while(condition-to-start)

// let i:number=0;

// while(i>0){
//     console.log("akash umap");
//     i++;
// }

// do{
//     console.log("akash umap");
//     i++;
// }while(i>0);

//4.for..of loop
//for..of loop: Iterate each and every value of the predefined list(array,set,map)
let fruits:string[]=["Apple","Banana","Mango","Grapes"];

//syntax:

//for(const element of array){
    //statements
//}
// //traditional for loop
// for(let i:number=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// //for..of loop
// for(const fruit of fruits){
//     console.log(fruit);
// }

//5.for..in loop
//for..in loop: Iterate each and every index of the predefined list(array,set,map)
//object ==> object represents a collection of key-value pairs.

interface empDetails {
    empId: number ,
    empName: string,
    havingVisa: boolean,
    address: {
        city: string,
        zipCode: number,
        state: string,
        country: string
    }
}

let empinfo:empDetails = {
    empId: 101,
    empName: "John Doe",
    havingVisa: true,
    address: {
        city: "New York",
        zipCode: 10001,
        state: "NY",
        country: "USA"
    }
};

console.log(empinfo.empId);
console.log(empinfo["empId"]);

//syntax:
//for (key in pre-defined-object)
{
    //statements
}

for (let key in empinfo) {
    console.log(key);
    console.log(empinfo[key as keyof empDetails]);
}