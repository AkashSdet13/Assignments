// Assignment-3: Conditional Statements

function checkLoanEligibility(
    customerName: string,
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): void {

    // Credit Score Check
    if (creditScore > 750) {

        console.log(customerName + " - Loan is automatically approved.");

    } else if (creditScore >= 650 && creditScore <= 750) {

        // Income Check
        if (income < 50000) {

            console.log(customerName + " - Loan is denied because income is below $50,000.");

        } else {

            // Employment Status Check
            if (!isEmployed) {

                console.log(customerName + " - Loan is denied because the customer is unemployed.");

            } else {

                // DTI Ratio Check
                if (debtToIncomeRatio < 40) {

                    console.log(customerName + " - Loan is approved.");

                } else {

                    console.log(customerName + " - Loan is denied because DTI ratio is 40% or greater.");

                }
            }
        }

    } else {

        console.log(customerName + " - Loan is denied because credit score is below 650.");
    }
}


// Customer Details
let customerName: string = "Karan art";
let creditScore: number = 720;
let income: number = 55000.0;
let isEmployed: boolean = true;
let debtToIncomeRatio: number = 35.0;


// Function Call
checkLoanEligibility(
    customerName,
    creditScore,
    income,
    isEmployed,
    debtToIncomeRatio
);

export {};//export statement to make this file a module and avoid global scope issues.
//export statement to make this file a module and avoid global scope issues.