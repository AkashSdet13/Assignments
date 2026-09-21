let sentence: string = "Java programming is fun and challenging";

// 1. Count total number of words
let words: string[] = sentence.split(" ");

console.log("Total number of words:", words.length);


// 2. Print sentence words in reverse order
console.log("Words in reverse order:");

for (let i = words.length - 1; i >= 0; i--) {
    console.log(words[i]);
}


// 3. Convert first character of each word to uppercase
let result: string = "";

for (let i = 0; i < words.length; i++) {
    let word: string = words[i]!;

    word = word.charAt(0).toUpperCase() + word.slice(1);

    result = result + word + " ";
}

console.log("Original sentence with first character uppercase:");
console.log(result.trim());