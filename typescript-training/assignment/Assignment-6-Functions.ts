// Assignment 6
// Prime Number using different Function Types


// ======================================
// 1. Named Function
// ======================================

function checkPrimeNamed(n: number): boolean {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


// ======================================
// 2. Anonymous Function
// =================

const checkPrimeAnonymous = function(n: number): boolean {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
};


// ======================================
// 3. Arrow Function
// ======================================

const checkPrimeArrow = (n: number): boolean => {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            return false;
        }
    }

    return true;
};


// ======================================
// Test Cases
// ======================================

console.log("Named Function:");
console.log("7 =", checkPrimeNamed(7));
console.log("25 =", checkPrimeNamed(25));
console.log("1 =", checkPrimeNamed(1));

console.log("\nAnonymous Function:");
console.log("7 =", checkPrimeAnonymous(7));
console.log("25 =", checkPrimeAnonymous(25));
console.log("1 =", checkPrimeAnonymous(1));

console.log("\nArrow Function:");
console.log("7 =", checkPrimeArrow(7));
console.log("25 =", checkPrimeArrow(25));
console.log("1 =", checkPrimeArrow(1));