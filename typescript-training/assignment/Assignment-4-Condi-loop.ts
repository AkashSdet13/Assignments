// Assignment - 4
// Conditional Statements & Loops
// Bank Transactions

const transactions: number[] = [
    50000,
    -2000,
    3000,
    -15000,
    -200,
    -300,
    4000,
    -3000
];

let creditCount: number = 0;
let debitCount: number = 0;

let totalCredit: number = 0;
let totalDebit: number = 0;

let balance: number = 0;

let suspiciousCount: number = 0;

for (const amount of transactions) {

    // Check Credit and Debit
    if (amount > 0) {
        creditCount++;
        totalCredit = totalCredit + amount;
    } 
    else {
        debitCount++;
        totalDebit = totalDebit + Math.abs(amount);
    }

    // Calculate remaining balance
    balance = balance + amount;

    // Check suspicious transaction
    if (amount > 10000) {
        console.log(
            "Suspicious credit Transaction with Amount: " + amount
        );
        suspiciousCount++;
    } 
    else if (amount < -10000) {
        console.log(
            "Suspicious debit Transaction with Amount: " + Math.abs(amount)
        );
        suspiciousCount++;
    }
}

// Final Output
console.log("--------------------------------");
console.log("Total Credit Transactions: " + creditCount);
console.log("Total Debit Transactions: " + debitCount);
console.log("Total Amount Credited: ₹" + totalCredit);
console.log("Total Amount Debited: ₹" + totalDebit);
console.log("Remaining Bank Balance: ₹" + balance);
console.log("Total Suspicious Transactions: " + suspiciousCount);
console.log("--------------------------------");