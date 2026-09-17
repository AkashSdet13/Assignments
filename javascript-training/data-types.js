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

//6.symbol==> symbol represent a unique identifier
let countryOfOrigin=Symbol();
let productInfo={
    productName: "OnePlus 9",
    productPrice: 69999,
    [countryOfOrigin]:"China"
};
console.log(productInfo);


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

//call the function
launchTheApplication("Chrome","https://www.example.com");

//4.Date ==> Date represents date and time in javascript

let currentDate=new Date();

//get current year
console.log(currentDate.getFullYear());//output current year

//get current month
console.log(currentDate.getMonth()+1);//output:current month(0-based index,so adding 1)

//get current date
console.log(currentDate.getDate());//output current date

//get current hours
console.log(currentDate.getHours());//current hours

//get current minutes
console.log(currentDate.getMinutes());//output: current minutes

//get current seconds
console.log(currentDate.getSeconds());//output current sec

//get millisecond since jan 1,1970
console.log(currentDate.getMilliseconds());//output:milliseconds since 1 jan,1970

//5.Map==> Map represent a collection of key pairs where keys can be of any data type

let employeeMap=new Map();

employeeMap.set("empId",101)
employeeMap.set("empName","john doe")
employeeMap.set("havingVisa",true)
employeeMap.set("empName","Akash")
employeeMap.delete("havingVisa")//deleting key HavingVisa

//get employee name

console.log(employeeMap.get("empName"));//output Akash//print only latest data
console.log(employeeMap);
console.log(employeeMap.size)//getting size

//6.set ==> set represent a collection of unique values of any data type

let uniqueNumbers=new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20);//duplicate value,will hot be added
uniqueNumbers.delete(10);//deleting value 10
console.log(uniqueNumbers.size)//getting size of the set
console.log(uniqueNumbers);

//7. any represent a variable that can hold any type of data.(not recommended to use)
//it will remove all the type-checking benefits provided by Typescript






