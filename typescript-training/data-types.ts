//Data types are two different categories
//primitive data typesa nd Non-primitive data types.

//*******************************************************************
//****************PRIMITIVE DATA TYPES********************************* 
//*******************************************************************

//1.number ==> number represents numbers with decimals and without decimals(without quotes)

let marks:number=98;
let percentage:number=99.8;
console.log("marks:",marks);
console.log("Percentage:",percentage);

//2.string==> string represents text data.(with quotes)
let name1:string="john js";//double quotes
let name2:string = 'Akash';//single quotes
let name3:string = `ROhan`;//single quotes
console.log("Name1:",name1)
console.log("Name2:",name2)
console.log("Name3:",name3)

//3.boolean ==> boolean represents only two values or false(its specifies results of conditions)

let visaStatus:boolean=true;
let isGraduated:boolean=false;
console.log("Visa satus:"+visaStatus)
console.log("is graduate:"+isGraduated)

//union of types (|) ==> variable can hold more than one type of data
let empAddress:string|number|boolean;
empAddress="Pune"
empAddress=216976;
empAddress=true;

console.log("emp address:",empAddress)

//4.undefined ==> undefined represnts a variable that is declared but not assigned with any value

let empSalary:undefined;
//empSalary=60000;//Type '60000' is not assignable to type 'undefined'.

//null==> null represent a variable that is assigned with a null value

let empRole:null|string;
empRole=null;
empRole= "Developer"
console.log("Employee Role:",empRole);

//*******************************************************************
//****************NON-PRIMITIVE DATA TYPES********************************* 
//*******************************************************************

//2.array ==> array represent an  collection of similar datatype.

let fruits:string[]=["Apple","Banana","Mango","Orange"];
console.log("fruits:",fruits);

let scores:number[]=[98,99,100,95];
console.log("scores:",scores);

//fruit names along with their prices in array
let fruitDetails:(string|number)[]=["Apple",120,"Banana",60,"Mango",150,"Orange",80];

//2.object ==> object represents a collection of key-value pairs.


interface empDetails{
    empId:number,
    empName:string,
    havingVisa:boolean,
    address:{
        city:string,
        zipcode: number,
        state:string,
        country:string
    }
}

let empinfo:empDetails={
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
console.log("Employee details:",empinfo.empName);
console.log("Employee Address:",empinfo.address.city);

//3.tuple==> tuple represent a collection of different data types in a specific order
let address :[string,string,number]=["221B Baker Street","London",560068];
console.log("Address:",address);

//4.functioin ==> function represents a block of code that performs a specific task
//void represent a function that does not return any value
//if function returns any value,then same data type should be mentioned in the function definition.

function launchTheApplication(browserName:string,url:string):void{
    console.log("Launch the browser:"+browserName);
    console.log("Navigate to URL:"+url);
    console.log("Application launched succesfully");
}

function sumofNumbers(num1:number,num2:number):number{
    let num3:number=num1+num2;
    return num3;
}

function getFullName(firstName:string,lastName:string):string{
    let getFullName:string=firstName+""+lastName;
    return getFullName;
}

launchTheApplication("chrome","www.example.com");
console.log("Sum of Numbers:",sumofNumbers(10,20))
console.log("Full Name:",getFullName("Bharath","Reddy"));

//5.Map==> Map represent a collection of key-value pairs where keys can be of any data type

let employeeMap:Map<string,string>=new Map();

employeeMap.set("empId","101")
employeeMap.set("empName","john doe")
employeeMap.set("havingVisa","true")
employeeMap.set("empName","Akash")
employeeMap.delete("havingVisa")//deleting key HavingVisa

console.log("Employee Map:",employeeMap);

//6.set ==> set represent a collection of unique values of any data type

let uniqueNumbers: Set<number>=new Set();
uniqueNumbers.add(10);
uniqueNumbers.add(20);
uniqueNumbers.add(30);
uniqueNumbers.add(20);//duplicate value,will hot be added
uniqueNumbers.delete(10);//deleting value 10
console.log(uniqueNumbers.size)//getting size of the set
console.log(uniqueNumbers);

//7. any represent a variable that can hold any type of data.(not recommended to use)
//it will remove all the type-checking benefits provided by Typescript

let randomValue:any;
randomValue=100;
console.log("Random value(number):",randomValue);
randomValue="Hello world";
console.log("Random value(string):",randomValue);
randomValue=true;
console.log("Random value(boolean):",randomValue);








