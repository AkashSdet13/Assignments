let paragraph: string =
    "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let searchWord: string = "Java";

let count: number = 0;
let indexes: number[] = [];

let index: number = paragraph.indexOf(searchWord);

while (index !== -1) {

    count++;
    indexes.push(index);

    index = paragraph.indexOf(searchWord, index + searchWord.length);
}

console.log("Total number of occurrences:", count);
console.log("Indexes:", indexes);