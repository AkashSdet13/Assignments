/*
       Data types are two different categories.
       primitive data types and Non-primitive data types.
*/

/**************************************************/
/****************PRIMITIVE DATA TYPES*********/
/**************************************************/

//1.number==> Number represent number with decimals and without decimals
let num =123; //number without decimals
let floatNum= 12.34;//number with decimals
console.log(typeof num);//output:number
console.log(typeof floatNum);//output:number

//2.string==> string represent text sequence of characters wrapped inside single or double quotes


let str1= 'Hello,world';//string with single quotes
let str2="javascript is fun!"//string with double quotes
console.log(typeof str1);//output:string
console.log(typeof str2);//output:string

//3.boolean==> boolean represent logical entity and can have two values: true or false

let isjavascriptFun=true;//boolean true
let isSkyGreen=false;//boolean false
console.log(typeof isjavascriptFun);//output:boolean

//4.undefined ==> undefined represent a variable that has been declared but not assigned a value.
let undevfVar;//variable declared but not assigned
console.log(typeof undevfVar);//output:undefined

//5.null==> null represent an international abseence of any object value.
let nullVar=null;
console.log(typeof nullVar);//output:object

/**************************************************/
/***********NON**PRIMITIVE DATA TYPES*********/
/**************************************************/

//1.OBJECT= ==> object represent a collecton of key-value pairs.

let empDetails={
    empId:101,
    empName:'john doe',
    havingVisa:true,
    address:{
        city:'New York',
        zipcode: 10001,
        state:'NY',
        country:'USA',
    }
};

//print employee name
console.log(empDetails.empName);

//print employee zip code
console.log(empDetails.address.zipcode);

//print entire employee details
console.log(empDetails);

//2.array ==> array represent an ordered collection of items.

let fruits=["Apple","Banana","Mango","Orange"];
let fruitsAndPrices=["Apple",120,"Banana",60,"Mango",150,"Orange",80];
let fruitsandpriceandAvailability=["Apple",120,true,"Banana",60,true,"Mango",150,false,"Orange",110,false];

//print banana from friuts array
console.log(fruits[1]);

//print price of Apple from fruitsAndPrices array
console.log(fruitsAndPrices[1]);

//print availability of Orange from fruitsAndPricesAndAvailability array
console.log(fruitsandpriceandAvailability[11]);




