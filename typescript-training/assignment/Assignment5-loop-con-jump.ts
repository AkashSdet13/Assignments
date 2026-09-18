// Assignment 5
// Conditional Statements, Loops, Map & Jump Statements

// Employee Data
const employees = [
    {
        name: "Alice Johnson",
        baseSalary: 75000,
        experience: 5.1,
        rating: 4.2
    },
    {
        name: "Bob Smith",
        baseSalary: 68000,
        experience: 3.2,
        rating: 3.8
    },
    {
        name: "Carol Davis",
        baseSalary: 82000,
        experience: 7.1,
        rating: 4.5
    },
    {
        name: "David Brown",
        baseSalary: 90000,
        experience: 10.2,
        rating: 2.5
    },
    {
        name: "Eva Green",
        baseSalary: 60000,
        experience: 2.4,
        rating: 3.5
    }
];


// Function
function calculateEmployeeHike(): void {

    // Jump Statement: return
    // If there are no employees, exit the function
    if (employees.length === 0) {
        console.log("No employee records found.");
        return;
    }


    // Map
    const employeeHikeMap = new Map<string, number>();


    // Loop
    for (const employee of employees) {

        // Jump Statement: continue
        // Skip employee if salary is invalid
        if (employee.baseSalary <= 0) {
            console.log(
                `Skipping ${employee.name} because salary is invalid.`
            );
            continue;
        }


        let variablePay: number;
        let bonus: number;
        let reward: number = 0;


        // Conditional Statements
        // Determine variable pay and bonus based on rating

        if (employee.rating >= 4.0) {

            variablePay = 15;
            bonus = 1500;

        }
        else if (employee.rating >= 3 && employee.rating < 4) {

            variablePay = 10;
            bonus = 1200;

        }
        else {

            variablePay = 3;
            bonus = 300;
        }


        // Extra Reward
        if (employee.experience >= 5) {

            reward = 5000;

        }


        // Calculate Hike
        const hike =
            (employee.baseSalary * variablePay / 100)
            + bonus
            + reward;


        // Calculate Hike Percentage
        const hikePercentage =
            (hike / employee.baseSalary) * 100;


        // Store data in Map
        employeeHikeMap.set(
            employee.name,
            hikePercentage
        );


        // Jump Statement: break
        // Stop loop after all employee records are processed
        if (employeeHikeMap.size === employees.length) {
            break;
        }
    }


    // Print Map
    console.log("Employee Hike Percentage");
    console.log("-------------------------");

    for (const [name, hikePercentage] of employeeHikeMap) {

        console.log(
            `${name} : ${hikePercentage.toFixed(2)}%`
        );
    }
}


// Calling Function
calculateEmployeeHike();